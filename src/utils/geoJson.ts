import { ChoroplethChartData, GeoDataCollection } from "@/types/MapData";
import _ from "lodash";

export const getAggregateData = (choroplethData: ChoroplethChartData[]) =>
  _.chain(choroplethData)
    .groupBy('geo_id')
    .reduce(
      (state, inf, key) => _.extend(state, { [key]: _.groupBy(inf, 'internet_access_type') }),
      {},
    )
    .value();

export const transformToGeoJSON = (
  aggregatedChoroplethData: any,
  geoDataCollection: GeoDataCollection,
) => {
  const features = _.map(geoDataCollection, (boundaryItem) => {
    const geoId = boundaryItem.geoId;
    const noInternetProportion =
      parseInt(aggregatedChoroplethData[geoId]['no_internet']['households']) /
      parseInt(aggregatedChoroplethData[geoId]['total_households']['households']);
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
