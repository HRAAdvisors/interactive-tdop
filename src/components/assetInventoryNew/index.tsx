import { useGetAssetInventoryQuery } from '@/services/dataDashboard';
import _ from 'lodash';
import { GridIcon, ListIcon } from '../IconSvg';
import { useMemo, useRef, useState } from 'react';
import { classNames } from '@/utils/helper';
import { AssetInfo } from '@/types/AssetInventory';
import { MultiSelect, Pagination } from '@mantine/core';
import AssetListItem, { ViewType, AssetListItemSkeleton } from './AssetListItem';
import { countyFilter, filterDataAssetInventory } from '@/static/filterDataAssetInventory';

export default function AssetInventory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [viewType, setViewType] = useState<ViewType>(ViewType.GRID);
  const [selectedFilters, setSelectedFilters] = useState<{ [key: string]: string[] }>({});
  const [activeCounties, setActiveCounties] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const LIMIT = viewType === ViewType.LIST ? 20 : 21;

  const { data, isFetching, error } = useGetAssetInventoryQuery();

  const filteredAssets: AssetInfo[][] = useMemo(() => {
    if (!data || !data.records) return [];

    // Filter assets, ensuring "Hide" is not true
    const allAssets = data.records
      .filter((asset) => {
        // Ensure required fields exist and "Hide" is not true
        const isValid =
          asset.fields.Asset &&
          asset.fields.County &&
          asset.fields['Asset Broadband Focus Area'] &&
          asset.fields['Asset Covered Population'] &&
          asset.fields['Organization Sub-Type'] &&
          asset.fields.Hide !== true; // Exclude if "Hide" is true

        return isValid;
      })
      .sort((a, b) => a.fields.Asset.localeCompare(b.fields.Asset));

    const activeFilters = _.flatMap(_.toArray(selectedFilters), (f) => f);

    return _.chunk(
      _.filter(allAssets, (asset) => {
        // Apply additional filters for counties and active filters
        const matchesCounty =
          _.size(activeCounties) === 0 ||
          _.some(activeCounties, (ac) => asset.fields.County?.includes(ac));

        const matchesFilters =
          _.size(activeFilters) === 0 ||
          _.some(
            activeFilters,
            (af) =>
              asset.fields['Asset Broadband Focus Area']?.includes(af) ||
              asset.fields['Asset Covered Population']?.includes(af) ||
              asset.fields['Organization Sub-Type']?.includes(af),
          );

        const isIncluded = matchesCounty && matchesFilters;
        return isIncluded;
      }),
      LIMIT,
    );
  }, [data, selectedFilters, activeCounties]);

  const totalPage = _.size(filteredAssets);

  if (error) {
    return <div className='text-red-500'>Failed to load assets. Please try again later.</div>;
  }

  return (
    <div ref={containerRef} className='w-full h-full max-w-screen-xl m-auto px-8 py-4'>
      <div className='flex w-full justify-between'>
        <h3 className='font-semibold text-[28px] subpixel-antialiased'>Texas Asset Inventory</h3>
        <div className='flex w-1/2 gap-2 items-center justify-end'>
          <div
            onClick={() => setViewType(ViewType.GRID)}
            className={classNames(
              'p-3 border bg-white drop-shadow rounded-md cursor-pointer',
              viewType === ViewType.GRID ? 'border-blue-400' : 'border-gray-400',
            )}
          >
            <GridIcon />
          </div>
          <div
            onClick={() => setViewType(ViewType.LIST)}
            className={classNames(
              'p-3 border bg-white drop-shadow rounded-md cursor-pointer',
              viewType === ViewType.LIST ? 'border-blue-400' : 'border-gray-400',
            )}
          >
            <ListIcon />
          </div>
        </div>
      </div>
      <div className='py-2 text-slate-600 text-sm'>Search and filter below.</div>

      <div className='flex flex-wrap w-full py-8 border-y border-gray-200'>
        <div className='pr-8 py-2 lg:w-1/4 md:w-1/2 w-full'>
          <MultiSelect
            classNames={{
              label: 'text-gray-700 text-sm font-medium',
              wrapper: 'py-1 drop-shadow',
              input: 'rounded-md',
            }}
            color='#0000000'
            className='bg-transparent'
            label='County'
            value={activeCounties}
            onChange={setActiveCounties}
            data={_.map(countyFilter.options, (option) => ({
              label: option.label,
              value: option.label,
            }))}
            clearable
            searchable
          />
        </div>

        {_.map(filterDataAssetInventory, (filter, i) => (
          <div key={i} className='pr-8 py-2 lg:w-1/4 md:w-1/2 w-full'>
            <MultiSelect
              classNames={{
                label: 'text-gray-700 text-sm font-medium',
                wrapper: 'py-1 drop-shadow',
                input: 'rounded-md',
              }}
              label={filter.name}
              value={selectedFilters[filter.id]}
              onChange={(value) => setSelectedFilters((s) => ({ ...s, [filter.id]: value }))}
              data={_.map(filter.options, (option) => ({
                label: option.label,
                value: option.label,
              }))}
              clearable
              searchable
            />
          </div>
        ))}
      </div>

      <div className='py-2 text-slate-600 text-sm'>
        Showing {_.size(_.flatten(filteredAssets))} results.
      </div>
      <div
        className={classNames(
          'grid min-h-96 grid-cols-1 py-4 w-full gap-4',
          viewType === ViewType.GRID && 'sm:grid-cols-2 lg:grid-cols-3 ',
        )}
      >
        {isFetching &&
          _.size(filteredAssets) < 1 &&
          _.map(_.range(LIMIT), (_, i) => <AssetListItemSkeleton key={i} viewType={viewType} />)}

        {_.map(filteredAssets[currentPage - 1], (asset, i) => (
          <AssetListItem key={i} asset={asset} viewType={viewType} />
        ))}
      </div>

      <div className='flex justify-center'>
        {_.size(filteredAssets) > 1 && (
          <Pagination.Root
            value={currentPage}
            onChange={(val) => {
              window.scrollTo({ top: containerRef.current?.offsetTop, behavior: 'smooth' });
              setCurrentPage(val);
            }}
            total={totalPage}
          >
            <Pagination.Previous />
            <Pagination.Items />
            <Pagination.Next />
          </Pagination.Root>
        )}
      </div>
    </div>
  );
}
