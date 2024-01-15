import { bbox } from '@turf/turf';
import _ from 'lodash';
import mapboxgl from 'mapbox-gl';
import type { Map, PaddingOptions } from 'mapbox-gl';
import { MutableRefObject, ReactNode, useEffect, useRef } from 'react';

interface ChoroplethMapProps {
  geoJSONFeatureCollection: GeoJSON.FeatureCollection<GeoJSON.Geometry>;
  mapRef: MutableRefObject<Map | null>;
  layerId?: string;
  sourceId?: string;
  colorStops?: { step: number; color: string }[];
  tooltipContent?: (feature: any) => string;
  center?: mapboxgl.LngLatLike;
  children?: ReactNode;
  mapBoxExpression?: any[];
  padding?: number | PaddingOptions;
}

const getToolTip = (feature: any) => `
<strong class="font-sans uppercase">${feature.properties.NAME} County</strong>
<hr class="my-2"/>
Share of households with No Internet Subscription: 
<span class="font-bold">${feature.properties.noInternetProportion}</span>
`;

const ChoroplethMap = ({
  geoJSONFeatureCollection,
  mapRef,
  layerId = 'regionLayer',
  sourceId = 'regionData',
  colorStops = [
    { step: 0.05, color: '#C9DCF7' },
    { step: 0.15, color: '#96AFD3' },
    { step: 0.25, color: '#6481B0' },
    { step: 0.35, color: '#32548C' },
    { step: 0.45, color: '#002768' },
  ],
  mapBoxExpression = ['to-number', ['get', 'noInternetProportion']],
  tooltipContent = getToolTip,
  center = [-99.7431, 31.2672],
  padding = 20,
  children,
}: ChoroplethMapProps) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!geoJSONFeatureCollection || !!mapRef.current) return;
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current as HTMLElement,
      style: 'mapbox://styles/mapbox/light-v11',
      center, // Coordinates for Austin, Texas
    });
  }, [geoJSONFeatureCollection]);

  useEffect(() => {
    if (!mapRef.current || !mapContainerRef.current) return;

    // setIsMapInit(true);

    mapRef.current.on('load', () => {
      if (mapRef.current) {
        if (mapRef.current.getSource(sourceId)) {
          mapRef.current.removeLayer(layerId);
          mapRef.current.removeSource(sourceId);
        }
        const firstOne = _.first(geoJSONFeatureCollection.features);
        if (firstOne) {
          const bounds = bbox(firstOne);
          mapRef.current.fitBounds(
            [
              [bounds[0], bounds[1]],
              [bounds[2], bounds[3]],
            ],
            {
              padding,
            },
          );
        }

        mapRef.current.addSource(sourceId, {
          type: 'geojson',
          data: geoJSONFeatureCollection,
        });

        mapRef.current.addLayer(
          {
            id: layerId,
            type: 'fill',
            source: sourceId,
            paint: {
              'fill-color': [
                'step', // Convert 'households' to a number
                mapBoxExpression,
                '#ffffff',
                ..._.flatMap(colorStops, (stop) => [stop.step, stop.color]),
              ],
              'fill-opacity': 0.9,
            },
          },
          'settlement-subdivision-label',
        );

        const tooltip = new mapboxgl.Popup({
          closeButton: false,
          closeOnClick: false,
        });

        mapRef.current.on('mousemove', layerId, (e) => {
          const feature = _.first(e.features);
          if (feature) {
            tooltip
              .setLngLat(e.lngLat)
              .setHTML(tooltipContent(feature))
              .addTo(mapRef.current as Map);

            // Highlight the hovered feature
            mapRef.current?.setPaintProperty(layerId, 'fill-opacity', [
              'case',
              ['==', ['get', 'noInternetProportion'], feature?.properties?.noInternetProportion],
              0.8,
              0.6,
            ]);
          }
        });

        mapRef.current.on('mouseleave', layerId, () => {
          tooltip.remove();
          mapRef.current?.setPaintProperty(layerId, 'fill-opacity', 0.6);
        });
      }
    });
  }, [geoJSONFeatureCollection, mapRef, layerId, sourceId, colorStops, tooltipContent]);

  return (
    <div className='relative w-full h-full'>
      {children}
      <div ref={mapContainerRef} className='h-full w-full' />
    </div>
  );
};

export default ChoroplethMap;
