
// Define a type for a GeoJSON Point
interface GeoJSONPoint {
    type: "Point";
    coordinates: [number, number];
}

// Define a type for a GeoJSON LineString
interface GeoJSONLineString {
    type: "LineString";
    coordinates: [number, number][];
}

// Define a type for a GeoJSON Polygon
interface GeoJSONPolygon {
    type: "Polygon";
    coordinates: [number, number][][];
}

// Define a type for a GeoJSON Feature
interface GeoJSONFeature<T = any> {
    type: "Feature";
    geometry: T;
    properties?: Record<string, any>;
}


interface GeoJSONFeatureCollection<T = any> {
  type: "FeatureCollection";
  features: GeoJSONFeature<T>[];
}
