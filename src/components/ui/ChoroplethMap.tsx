import * as turf from '@turf/turf';
import _ from 'lodash';
import mapboxgl from 'mapbox-gl';
import { Map, PaddingOptions } from 'mapbox-gl';
import { MutableRefObject, ReactNode, useEffect, useRef, useState } from 'react';

const getCalculatedCenter = (geoJSONFeatureCollection: any) => {
  const coOrdinate = turf.center(geoJSONFeatureCollection);
  return coOrdinate.geometry.coordinates as [number, number];
};
export interface ChoroplethMapProps {
  geoJSONFeatureCollection: GeoJSON.FeatureCollection<GeoJSON.Geometry>;
  mapRef?: MutableRefObject<Map | undefined>;
  layerId?: string;
  sourceId?: string;
  colorStops?: { step: number; color: string }[];
  tooltipContent?: (feature: any) => string;
  center?: mapboxgl.LngLatLike;
  children?: ReactNode;
  mapBoxExpression?: any[];
  padding?: number | PaddingOptions;
  mapContainerClassName?: string;
  zoom?: number;
  onMove?: () => void;
  syncCenterAndZoom?: boolean;
}

const getToolTip = (feature: any) => `
<strong class="font-sans uppercase">${feature.properties.NAME} County</strong>
<hr class="my-2"/>
Share of households with No Internet Subscription: 
<span class="font-bold">${feature.properties.dataPoint}</span>
`;

const ChoroplethMap = ({
  geoJSONFeatureCollection,
  mapRef = useRef<Map>(),
  layerId = 'regionLayer',
  sourceId = 'regionData',
  colorStops = [
    { step: 0.05, color: '#C9DCF7' },
    { step: 0.15, color: '#96AFD3' },
    { step: 0.25, color: '#6481B0' },
    { step: 0.35, color: '#32548C' },
    { step: 0.45, color: '#002768' },
  ],
  mapBoxExpression = ['to-number', ['get', 'dataPoint']],
  tooltipContent = getToolTip,
  padding = 20,
  children,
  mapContainerClassName = 'relative h-full w-full',
  center = getCalculatedCenter(geoJSONFeatureCollection),
  zoom,
  onMove,
  syncCenterAndZoom = false,
}: ChoroplethMapProps) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const localGeoJSON = useRef(geoJSONFeatureCollection);

  const [fitBounds, setFitBound] = useState<number[]>([]);

  const fitBound = () => {
    const newBounds = turf.bbox(geoJSONFeatureCollection);
    if (!_.isEqual(newBounds, fitBounds)) {
      setFitBound(newBounds);
      mapRef.current?.fitBounds(
        [
          [newBounds[0], newBounds[1]],
          [newBounds[2], newBounds[3]],
        ],
        {
          padding,
        },
      );
    }
  };

  useEffect(() => {
    if (syncCenterAndZoom) {
      if (center && mapRef.current) {
        const currentCenter = [
          parseFloat(mapRef.current.getCenter().lng.toFixed(4)),
          parseFloat(mapRef.current.getCenter().lat.toFixed(4)),
        ];
        if (!_.isEqual(currentCenter, center)) {
          mapRef.current.setCenter(center);
        }
      }
      if (zoom && mapRef.current) {
        const currentZoom = parseFloat(mapRef.current.getZoom().toFixed(2));
        if (!_.isEqual(currentZoom, zoom)) {
          mapRef.current.setZoom(zoom);
        }
      }
    }
  }, [center, zoom]);

  const addSourceAndLayer = () => {
    if (!mapRef.current) return;

    if (mapRef.current.getSource(sourceId)) {
      mapRef.current.removeLayer(layerId);
      mapRef.current.removeSource(sourceId);
    }
    fitBound();
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
  };

  const onLoad = () => {
    if (mapRef.current) {
      addSourceAndLayer();

      const tooltip = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false,
      });

      if (onMove) {
        mapRef.current.on('move', onMove);
      }

      mapRef.current.on('mousemove', layerId, (e) => {
        const feature = _.first(e.features);
        if (feature) {
          tooltip.addClassName('z-30');
          tooltip
            .setLngLat(e.lngLat)
            .setHTML(tooltipContent(feature))
            .addTo(mapRef.current as Map);

          // Highlight the hovered feature
          mapRef.current?.setPaintProperty(layerId, 'fill-opacity', [
            'case',
            ['==', ['get', 'dataPoint'], feature?.properties?.dataPoint],
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
  };

  useEffect(() => {
    if (!geoJSONFeatureCollection || !!mapRef.current || !mapContainerRef.current) return;

    const obj = {
      container: mapContainerRef.current as HTMLElement,
      style: 'mapbox://styles/mapbox/light-v11',
      center, // Coordinates for Austin, Texas
    };
    if (zoom) {
      _.assign(obj, { zoom });
    }

    mapRef.current = new mapboxgl.Map(obj);
    mapRef.current.on('load', onLoad);
  }, []);

  useEffect(() => {
    if (
      !mapRef.current ||
      !mapContainerRef.current ||
      _.isEqual(localGeoJSON.current, geoJSONFeatureCollection)
    )
      return;
    addSourceAndLayer();
    localGeoJSON.current = geoJSONFeatureCollection;
  }, [geoJSONFeatureCollection, colorStops]);

  return (
    <div className={mapContainerClassName}>
      {children}
      <div ref={mapContainerRef} className={`h-full w-full ${mapContainerClassName}`} />
    </div>
  );
};

export default ChoroplethMap;
