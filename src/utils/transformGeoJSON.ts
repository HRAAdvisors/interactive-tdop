import { ChartId, DataPointGeneratorName } from '@/types/ChartIds';
import { ChartBulkResponse, GeoDataCollection } from '@/types/MapData';
import _ from 'lodash';

export const getAggregateChartData = (choroplethData: ChartBulkResponse) => {
  if (choroplethData.id === ChartId.TXAccess) {
    return _.chain(choroplethData.data)
      .groupBy('geo_id')
      .mapValues((inf) =>
        _.mapValues(_.groupBy(inf, 'internet_access_type'), (infGroup) => _.first(infGroup)),
      )
      .value();
  } else if (choroplethData.id === ChartId.TXAdoption) {
    return _.chain(choroplethData.data)
      .groupBy('geo_id')
      .mapValues((inf) => _.mapValues(_.groupBy(inf, 'cohort'), (infGroup) => _.first(infGroup)))
      .value();
  }
};

const dataPointGenerator = (
  geoId: number,
  aggregatedChoroplethData: any,
  chartId: string,
  dataPointGeneratorName: DataPointGeneratorName,
) => {
  if (
    dataPointGeneratorName === DataPointGeneratorName.noInternetProportion &&
    ChartId.TXAccess === chartId
  ) {
    return (
      parseInt(aggregatedChoroplethData[geoId]['no_internet']['households']) /
      parseInt(aggregatedChoroplethData[geoId]['total_households']['households'])
    ).toFixed(2);
  } else if (
    dataPointGeneratorName === DataPointGeneratorName.hispeedShare &&
    ChartId.TXAdoption === chartId
  ) {
    return (parseFloat(aggregatedChoroplethData[geoId]['ALL']['hispeed_share'])/100).toFixed(2); 
  } else if (
    dataPointGeneratorName === DataPointGeneratorName.lowIncomeInternetSmartphoneOnlyShare &&
    ChartId.TXAdoption === chartId
  ) {
    return (parseFloat(aggregatedChoroplethData[geoId]['LOW_INCOME']['internet_smartphone_only_share'])/100).toFixed(2); 
  } else if (
    dataPointGeneratorName === DataPointGeneratorName.internetSmartphoneOnlyShare &&
    ChartId.TXAdoption === chartId
  ) {
    return (parseFloat(aggregatedChoroplethData[geoId]['ALL']['internet_smartphone_only_share'])/100).toFixed(2); 
  } else {
    console.error('chartId and Datapoint Mismatch');
  }
};

export const transformToGeoJSON = (
  geoDataCollection: GeoDataCollection,
  chartBulkResponse: ChartBulkResponse,
  dataPointGeneratorName: DataPointGeneratorName,
) => {
  const aggregateChartData = getAggregateChartData(chartBulkResponse);
  const features = _.map(geoDataCollection, (boundaryItem) => ({
    type: 'Feature',
    geometry: boundaryItem.feature.geometry,
    properties: {
      ..._.get(aggregateChartData, boundaryItem.geoId, {}),
      ...boundaryItem.feature.properties,
      dataPoint: dataPointGenerator(
        boundaryItem.geoId,
        aggregateChartData,
        chartBulkResponse.id,
        dataPointGeneratorName,
      ),
    },
  }));

  return {
    type: 'FeatureCollection',
    features,
  } as GeoJSON.FeatureCollection<GeoJSON.Geometry>;
};
