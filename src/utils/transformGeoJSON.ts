import { ChartId, DataPointGeneratorName } from '@/types/ChartIds';
import { ChartBulkResponse, GeoBoundaryResponse } from '@/types/MapData';
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
  } else if (choroplethData.id === ChartId.TXCostBarrier) {
    return _.chain(choroplethData.data)
      .groupBy('geo_id')
      .mapValues((inf) =>
      _.chain(inf)
        .groupBy('question_name')
        .mapValues((infGroup) => _.first(infGroup))
        .value(),
    )
    .value();
  } else if (choroplethData.id === ChartId.TXSubscription) {
    return _.chain(choroplethData.data)
      .groupBy('geo_id')
      .mapValues((inf) =>
        _.chain(inf)
          .groupBy('cohort')
          .mapValues((infGroup) => _.first(infGroup))
          .value(),
      )
      .value();
  } else if (choroplethData.id === ChartId.TXDigitalLiteracy) {
    return _.chain(choroplethData.data)
      .groupBy('geo_id')
      .mapValues((inf) =>
        _.chain(inf)
          .groupBy('response')
          .mapValues((infGroup) => _.nth(infGroup, 3))
          .value(),
      )
      .value();
  } else if (choroplethData.id === ChartId.TXACP) {
    return _.chain(choroplethData.data)
      .groupBy('geo_id')
      .mapValues((inf) => _.first(inf))
      .value();
  }  else if (choroplethData.id === ChartId.TXCyberSecurity) {
    return _.chain(choroplethData.data)
      .groupBy('geo_id')
      .mapValues((inf) =>
        _.chain(inf)
          .groupBy('question_name')
          .mapValues((infGroup) => _.nth(infGroup, 2))
          .value(),
      )
      .value();
  } else if (choroplethData.id === ChartId.TXPublicResourceAccess) {
    return _.chain(choroplethData.data)
      .groupBy('geo_id')
      .mapValues((inf) =>
        _.chain(inf)
          .groupBy('question_name')
          .mapValues((infGroup) => _.first(infGroup))
          .value(),
      )
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
    return (parseFloat(aggregatedChoroplethData[geoId]['ALL']['hispeed_share'])).toFixed(2);
  } else if (
    dataPointGeneratorName === DataPointGeneratorName.lowIncomeInternetwithdeviceshare &&
    ChartId.TXAdoption === chartId
  ) {
    return (
      parseFloat(aggregatedChoroplethData[geoId]['LOW_INCOME']['internet_with_device_share'])
    ).toFixed(2);
  } else if (
    dataPointGeneratorName === DataPointGeneratorName.internetwithdeviceshare &&
    ChartId.TXAdoption === chartId
  ) {
    return (
      parseFloat(aggregatedChoroplethData[geoId]['ALL']['internet_with_device_share'])
    ).toFixed(2);
  } else if (
    dataPointGeneratorName === DataPointGeneratorName.lowIncomeInternetSmartphoneOnlyShare &&
    ChartId.TXAdoption === chartId
  ) {
    return (
      parseFloat(aggregatedChoroplethData[geoId]['LOW_INCOME']['internet_smartphone_only_share'])
    ).toFixed(2);
  } else if (
    dataPointGeneratorName === DataPointGeneratorName.internetSmartphoneOnlyShare &&
    ChartId.TXAdoption === chartId
  ) {
    return (
      parseFloat(aggregatedChoroplethData[geoId]['ALL']['internet_smartphone_only_share'])
    ).toFixed(2);
  } else if (
    dataPointGeneratorName === DataPointGeneratorName.costAsBarrier &&
    ChartId.TXCostBarrier === chartId
  ) {
    return (
      parseFloat(aggregatedChoroplethData[geoId]['hid13_1']['percent'])
    ).toFixed(2);
  } else if (
    dataPointGeneratorName === DataPointGeneratorName.broadbandShare &&
    ChartId.TXSubscription === chartId
  ) {
    return (
      parseFloat(aggregatedChoroplethData[geoId]['ALL']['hispeed_share'])
    ).toFixed(2);
  } else if (
    dataPointGeneratorName === DataPointGeneratorName.digitalLiteracySkills &&
    ChartId.TXDigitalLiteracy === chartId
  ) {
    return (100 - 
      parseFloat(aggregatedChoroplethData[geoId]['Not comfortable at all']['percent'])
    ).toFixed(2);
  } else if (
    dataPointGeneratorName === DataPointGeneratorName.acpEligibleEnrolled &&
    ChartId.TXACP === chartId
  ) {
    return (
      parseFloat(aggregatedChoroplethData[geoId]['percent'])
    ).toFixed(2);
  } else if (
    dataPointGeneratorName === DataPointGeneratorName.cybersecurityAwareness &&
    ChartId.TXCyberSecurity === chartId
  ) {
    return (
      parseFloat(aggregatedChoroplethData[geoId]['hid11']['percent'])
    ).toFixed(2);
  } else if (
    dataPointGeneratorName === DataPointGeneratorName.publicResourceAccess &&
    ChartId.TXPublicResourceAccess === chartId
  ) {
    return (100 - 
      parseFloat(aggregatedChoroplethData[geoId]['hid7_1']['percent'])
    ).toFixed(2);
  } else {
    console.error('chartId and Datapoint Mismatch');
  }
};

export const transformToGeoJSON = (
  geoDataCollection: GeoBoundaryResponse,
  chartBulkResponse: ChartBulkResponse,
  dataPointGeneratorName: DataPointGeneratorName,
) => {
  const aggregateChartData = getAggregateChartData(chartBulkResponse);
  const features = _.map(geoDataCollection.boundaries, (boundaryItem) => ({
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
