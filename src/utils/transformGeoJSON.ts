import { ChoroplethChartData, GeoDataCollection } from '@/types/MapData';
import _ from 'lodash';

export const getAggregateChartData = (choroplethData: ChoroplethChartData[]) =>
  _.chain(choroplethData)
    .groupBy('geo_id')
    .mapValues((inf) =>
      _.mapValues(_.groupBy(inf, 'internet_access_type'), (infGroup) => _.first(infGroup)),
    )
    .value();

export const transformToGeoJSON = (
  aggregatedChoroplethData: any,
  geoDataCollection: GeoDataCollection,
) => {
  const features = _.map(geoDataCollection, (boundaryItem) => {
    const geoId = boundaryItem.geoId;
    const noInternetProportion = (
      parseInt(aggregatedChoroplethData[geoId]['no_internet']['households']) /
      parseInt(aggregatedChoroplethData[geoId]['total_households']['households'])
    ).toFixed(2);

    return {
      type: 'Feature',
      geometry: boundaryItem.feature.geometry,
      properties: {
        ..._.get(aggregatedChoroplethData, geoId, {}),
        ...boundaryItem.feature.properties,
        noInternetProportion, // Add the calculated proportion to the properties
      },
    };
  });

  return {
    type: 'FeatureCollection',
    features,
  };
};
