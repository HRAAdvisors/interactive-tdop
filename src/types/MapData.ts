interface Properties1 {
  STATEFP: string;
  COUNTYFP: string;
  COUNTYNS: string;
  AFFGEOID: string;
  GEOID: string;
  NAME: string;
  NAMELSAD: string;
  STUSPS: string;
  STATE_NAME: string;
  LSAD: string;
  ALAND: number;
  AWATER: number;
}


interface GeoData {
  _id: string;
  geoId: number;
  scale: string;
  feature: GeoJSON.Feature<any, Properties1>;
  year: number;
}

export interface GeoDataCollection {
  [key: string]: GeoData;
}

export interface ChoroplethChartData {
 geo_id: string; 
 households: number;
 internet_access_type: "total_households" | "broadband" |  "no_internet" | "fiber_or_dsl_only" | "dialup_only" | "satellite_only"  | "cellular_only";
 year: string;
}
export interface ChartBulkResponse {
  id: string;
  data: ChoroplethChartData[]
}