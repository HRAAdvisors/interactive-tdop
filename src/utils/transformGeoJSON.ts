import { ChartId, DataPointGeneratorName } from '@/types/ChartIds';
import { ChartBulkResponse, GeoDataCollection } from '@/types/MapData';
import _ from 'lodash';

export const getAggregateChartData = (choroplethData: ChartBulkResponse) => {
  if (choroplethData.id === ChartId.TXAccess) {
    return _.chain(choroplethData.data)
      .groupBy('geo_id')
      .mapValues((inf) =>
      _.chain(inf)
          .groupBy('internet_access_type')
          .mapValues((infGroup) => _.first(infGroup))
          .value(),
      )
      .value();
  } else if (choroplethData.id === ChartId.TXAdoption) {
    return _.chain(choroplethData.data)
      .groupBy('geo_id')
      .mapValues((inf) =>
        _.chain(inf)
          .groupBy('cohort')
          .mapValues((infGroup) => _.first(infGroup))
          .value(),
      )
      .value();
  } else if (choroplethData.id === ChartId.TxReliability) {
    return _.chain(choroplethData.data)
      .groupBy('geo_id')
      .mapValues((inf) => _.first(inf))
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
    return (parseFloat(aggregatedChoroplethData[geoId]['ALL']['hispeed_share']) / 100).toFixed(2);
  } else if (
    dataPointGeneratorName === DataPointGeneratorName.lowIncomeInternetwithdeviceshare &&
    ChartId.TXAdoption === chartId
  ) {
    return (
      parseFloat(aggregatedChoroplethData[geoId]['LOW_INCOME']['internet_with_device_share']) / 100
    ).toFixed(2);
  } else if (
    dataPointGeneratorName === DataPointGeneratorName.internetwithdeviceshare &&
    ChartId.TXAdoption === chartId
  ) {
    return (
      parseFloat(aggregatedChoroplethData[geoId]['ALL']['internet_with_device_share']) / 100
    ).toFixed(2);
  } else if (
    dataPointGeneratorName === DataPointGeneratorName.lowIncomeInternetSmartphoneOnlyShare &&
    ChartId.TXAdoption === chartId
  ) {
    return (
      parseFloat(aggregatedChoroplethData[geoId]['LOW_INCOME']['internet_smartphone_only_share']) /
      100
    ).toFixed(2);
  } else if (
    dataPointGeneratorName === DataPointGeneratorName.internetSmartphoneOnlyShare &&
    ChartId.TXAdoption === chartId
  ) {
    return (
      parseFloat(aggregatedChoroplethData[geoId]['ALL']['internet_smartphone_only_share']) / 100
    ).toFixed(2);
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
