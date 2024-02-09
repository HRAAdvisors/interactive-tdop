import * as turf from '@turf/turf';
import _ from 'lodash';
import mapboxgl from 'mapbox-gl';
import { Map, PaddingOptions } from 'mapbox-gl';
import { MutableRefObject, ReactNode, useEffect, useRef } from 'react';

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
  tooltipContent?: (feature: any, showFeatureName: boolean) => string;
  shouldTooltipShow?: boolean;
  showFeatureNameInTooltip?: boolean;
  center?: mapboxgl.LngLatLike;
  children?: ReactNode;
  mapBoxExpression?: any[];
  padding?: PaddingOptions;
  mapContainerClassName?: string;
  zoom?: number;
  onMove?: () => void;
  onLoad?: (map: Map) => void;
  toolTipClass?: string;
  mapClassName?: string;
  syncCenterAndZoom?: boolean;
  shouldSetMaxBound?: boolean;
  fitBoundFeature?: GeoJSON.Feature<GeoJSON.Geometry>;
  shouldFitBounds?: boolean; // New prop to control fitBounds behavior
  anchor?: mapboxgl.Anchor;
}

// Updated getToolTip function to accept an additional parameter
const getToolTip = (feature: any, showFeatureName: boolean = true) => {
  const featureNameHtml = showFeatureName
    ? `<strong class="text-white uppercase">${feature.properties.NAME}</strong><br>`
    : '';
  return `<div class="text-white">
${featureNameHtml}
<span class="">${feature.properties.dataPoint}%</span>
</div>
`;
};

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
  shouldTooltipShow = true,
  showFeatureNameInTooltip = true, // You can add this prop to ChoroplethMapProps interface
  padding = { top: 20, left: 20, right: 20, bottom: 20 },
  children,
  mapContainerClassName = 'relative h-full w-full shadow-sm',
  mapClassName = '',
  center = getCalculatedCenter(geoJSONFeatureCollection),
  zoom,
  onMove,
  onLoad,
  syncCenterAndZoom = false,
  shouldSetMaxBound = true,
  fitBoundFeature,
  shouldFitBounds = true,
  toolTipClass = 'z-50',
  anchor,
}: ChoroplethMapProps) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const localGeoJSON = useRef(geoJSONFeatureCollection);
  const currentFitBound = useRef<number[]>();
  const currentFitBoundFeature = useRef<GeoJSON.Feature<GeoJSON.Geometry> | undefined>(
    fitBoundFeature,
  );

  const fitBound = () => {
    const newBounds = turf.bbox(fitBoundFeature ? fitBoundFeature : geoJSONFeatureCollection);

    if (!_.isEqual(currentFitBound.current, newBounds)) {
      mapRef.current?.fitBounds(
        [
          [newBounds[0], newBounds[1]],
          [newBounds[2], newBounds[3]],
        ],
        {
          padding: padding,
          animate: false,
        },
      );
    }

    currentFitBound.current = newBounds;
    currentFitBoundFeature.current = fitBoundFeature;

    if (shouldSetMaxBound) {
      const getBoundsFromViewport = mapRef.current?.getBounds();
      mapRef.current?.setMaxBounds(getBoundsFromViewport);
    }
    console.log(padding);
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
          'fill-opacity': 1, // Initialize with zero opacity
          'fill-outline-color': '#cccccc',
        },
      },
      'settlement-subdivision-label',
    );
    if (shouldFitBounds) {
      fitBound();
    }
  };

  const onLoadHandler = () => {
    if (mapRef.current) {
      addSourceAndLayer();
      if (onLoad) {
        onLoad(mapRef.current);
      }

      let tooltip: mapboxgl.Popup | null = null;
      if (shouldTooltipShow) {
        tooltip = new mapboxgl.Popup({
          closeButton: false,
          closeOnClick: false,
          className: toolTipClass,
          anchor,
        });
      }

      if (onMove) {
        mapRef.current.on('move', onMove);
      }

      if (shouldTooltipShow) {
        mapRef.current.on('mousemove', layerId, (e) => {
          const feature = _.first(e.features);
          if (feature && tooltip) {
            // Pass the `showFeatureNameInTooltip` prop to the `tooltipContent` function
            tooltip
              .setLngLat(e.lngLat)
              .setHTML(tooltipContent(feature, showFeatureNameInTooltip))
              .addTo(mapRef.current as Map);
          }
        });

        mapRef.current.on('mouseleave', layerId, () => {
          tooltip?.remove();
          // mapRef.current?.setPaintProperty(layerId, 'fill-opacity', 0.6);
        });
      }
    }
  };

  useEffect(() => {
    if (!geoJSONFeatureCollection || !!mapRef.current || !mapContainerRef.current) return;

    const obj = {
      container: mapContainerRef.current as HTMLElement,
      // style: 'mapbox://styles/mapbox/light-v11',
      style: 'mapbox://styles/eddiejoeantonio/cls0lfnea01kp01p27llib7ce',
      // style: 'mapbox://styles/mapbox/dark-v11',
      center, // Coordinates for Austin, Texas
    };
    if (zoom) {
      _.assign(obj, { zoom });
    }

    mapRef.current = new mapboxgl.Map(obj);
    mapRef.current.on('load', onLoadHandler);
  }, []);

  useEffect(() => {
    if (
      !mapRef.current ||
      !mapContainerRef.current ||
      (_.isEqual(localGeoJSON.current, geoJSONFeatureCollection) &&
        _.isEqual(currentFitBoundFeature.current, fitBoundFeature))
    )
      return;

    addSourceAndLayer();
    localGeoJSON.current = geoJSONFeatureCollection;
  }, [geoJSONFeatureCollection, colorStops, shouldSetMaxBound, fitBoundFeature]);

  return (
    <div className={mapContainerClassName}>
      {children}
      <div ref={mapContainerRef} className={`h-full w-full ${mapClassName}`} />
    </div>
  );
};

export default ChoroplethMap;
