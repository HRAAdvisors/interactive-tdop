import { GeoData, useGetBoundaryDataBulkQuery, useGetChartDataBulkQuery } from '@/services/map';
import { RefObject, useEffect, useMemo, useState } from 'react';
import { transformToGeoJSON } from './transformGeoJSON';
import { DataPointGeneratorName } from '@/types/ChartIds';

export const useGetGeoJSON = (args: GeoData[], dataPointName: DataPointGeneratorName) => {
  const {
    data: choroplethData,
    isLoading: isLoadingChart,
    isSuccess: isSuccessChart,
  } = useGetChartDataBulkQuery(args);
  const {
    data: boundaryData,
    isLoading: isLoadingBoundary,
    isSuccess: isSuccessBoundary,
  } = useGetBoundaryDataBulkQuery(args);

  const [geoJsonFeatures, setGeoJsonFeatures] = useState<GeoJSON.FeatureCollection<GeoJSON.Geometry> | undefined>();

  const isLoading = isLoadingChart || isLoadingBoundary;
  const isSuccess = isSuccessBoundary && isSuccessChart;

   useEffect(() => {
    if (
      boundaryData &&
      choroplethData &&
      choroplethData.id == args[0].id &&
      choroplethData.regions?.segments?.geographyType ===
        boundaryData.regions?.segments?.geographyType &&
      choroplethData.regions?.main.geoId ===
        boundaryData.regions?.main.geoId
    ) {
      setGeoJsonFeatures(transformToGeoJSON(boundaryData, choroplethData, dataPointName));
    }
   
  }, [choroplethData, boundaryData]);

  return { geoJsonFeatures, choroplethData, boundaryData, isLoading, isSuccess };
};


export function useOnScreen(ref: RefObject<HTMLElement>) {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = useMemo(
    () => new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting)),
    [ref],
  );

  useEffect(() => {
    if (ref.current) {
      observer.observe(ref.current);
      return () => observer.disconnect();
    }
  }, []);

  return isIntersecting;
}