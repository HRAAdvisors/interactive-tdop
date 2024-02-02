import _ from 'lodash';

export function getColorStops(
  geoJson: GeoJSON.FeatureCollection<GeoJSON.Geometry>,
  color: 'blue' | 'red' = 'blue',
) {
  // Step 1: Sort the data
  const sortedData = _.map(geoJson.features, (feature) =>
    _.isString(feature.properties?.dataPoint) ? parseFloat(feature.properties?.dataPoint) : feature.properties?.dataPoint,
  ).sort((a, b) => a - b);

  // Step 2: Calculate positions
  const positionQ1 = 0.2 * (sortedData.length + 1);
  const positionQ2 = 0.4 * (sortedData.length + 1);
  const positionQ3 = 0.6 * (sortedData.length + 1);
  const positionQ4 = 0.8 * (sortedData.length + 1);
  

  // Step 3: Calculate quintiles
  const q1 = sortedData[Math.floor(positionQ1) - 1];
  const q2 = sortedData[Math.floor(positionQ2) - 1];
  const q3 = sortedData[Math.floor(positionQ3) - 1];
  const q4 = sortedData[Math.floor(positionQ4) - 1];

  // Step 4: Calculate the max
  const maxStep = Math.max(...sortedData);

  if (color === 'red') {
    return [
      { step: 0, color: '#F7CAC9' },
      { step: q1, color: '#E9A5A3' },
      { step: q2, color: '#DB6D84' },
      { step: q3, color: '#C92C4D' },
      { step: q4, color: '#BE0B31' },
      { step: maxStep, color: '#BE0B31' },
    ];
  } else {
    return [
      { step: 0, color: '#C9DCF7' },
      { step: q1, color: '#96AFD3' },
      { step: q2, color: '#6481B0' },
      { step: q3, color: '#32548C' },
      { step: q4, color: '#002768' },
      { step: maxStep, color: '#002768' },
    ];
  }

  // Return the calculated quintiles
}
