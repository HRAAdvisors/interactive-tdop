import { useAppSelector } from '@/app/hooks';
import { useGetAssetInventoryQuery } from '@/services/dataDashboard';
import _ from 'lodash';
import { GridIcon, ListIcon } from '../IconSvg';
import { useMemo, useRef, useState } from 'react';
import { classNames } from '@/utils/helper';
import { AssetInfo } from '@/types/AssetInventory';
import { countyFilter, uiData } from './uidata';
import { MultiSelect, Pagination, Select } from '@mantine/core';
import AssetListItem, { ViewType } from './AssetListItem';

const LIMIT = 20;

export default function AssetInventory() {
  const containerRef = useRef<HTMLDivElement>(null);
  useGetAssetInventoryQuery();
  const [viewType, setViewType] = useState<ViewType>(ViewType.LIST);
  const allAssets = useAppSelector((s) => s.ui.assets);
  const [selectedFilters, setSelectedFilters] = useState<{ [key: string]: string[] }>({});
  const [activeCounty, setActiveCounty] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredAssets: AssetInfo[][] = useMemo(() => {
    setCurrentPage(1);
    if (allAssets) {
      const activeFilters = _.flatMap(_.toArray(selectedFilters), (f) => f);

      return _.chunk(
        _.filter(allAssets, (asset: any) => {
          if (
            !_.isEmpty(activeCounty) &&
            !asset.fields['County (from Org County)'].includes(activeCounty)
          ) {
            return false;
          }

          if (
            _.size(activeFilters) > 0 &&
            !_.some(
              activeFilters,
              (af) =>
                asset.fields['Asset Broadband Focus Area'].includes(af) ||
                asset.fields['Asset Covered Population'].includes(af) ||
                asset.fields['Organization Sub-Type'].includes(af),
            )
          ) {
            return false;
          }

          return true;
        }),
        LIMIT,
      );
    }
    return [];
  }, [allAssets, selectedFilters, activeCounty]);

  const totalPage = _.size(filteredAssets);

  return (
    <div className='w-full h-full max-w-screen-xl m-auto px-8 py-4'>
      <div className='flex w-full justify-between px-2'>
        <h3 className='font-semibold text-3xl subpixel-antialiased'>Texas Asset Inventory</h3>
        <div className='flex w-1/2 gap-2 items-center justify-end'>
          <div
            onClick={() => setViewType(ViewType.GRID)}
            className='p-3 border border-gray-400 rounded-lg cursor-pointer'
          >
            <GridIcon />
          </div>
          <div
            onClick={() => setViewType(ViewType.LIST)}
            className='p-3 border border-gray-400 rounded-lg cursor-pointer'
          >
            <ListIcon />
          </div>
        </div>
      </div>
      <div className='py-4'>Search and filter below.</div>

      <div className='flex flex-wrap w-full py-8 border-y border-gray-200'>
        <div className='px-4 lg:w-1/4 md:w-1/2 w-full'>
          <Select
            color='#0000000'
            className='bg-transparent'
            label='County'
            placeholder='Select County'
            value={activeCounty}
            onChange={setActiveCounty}
            data={_.map(countyFilter.options, (option) => ({
              label: option.label,
              value: option.label,
            }))}
            clearable
          />
        </div>
        {_.map(uiData, (filter, i) => (
          <div key={i} className='px-4 lg:w-1/4 md:w-1/2 w-full'>
            <MultiSelect
              className=''
              label={filter.name}
              value={selectedFilters[filter.id]}
              onChange={(value) => {
                setSelectedFilters((s) => _.clone(_.assign(s, { [filter.id]: value })));
              }}
              data={_.map(filter.options, (option) => ({
                label: option.label,
                value: option.label,
              }))}
              clearable
            />
          </div>
        ))}
      </div>
      <div ref={containerRef} className='py-4'>
        Showing {_.size(_.flatten(filteredAssets))} results.
      </div>
      <div
        className={classNames(
          `flex min-h-96 ${viewType == ViewType.LIST ? 'flex-col' : 'flex-wrap'} py-4 w-full`,
        )}
      >
        {_.map(filteredAssets[currentPage - 1], (asset, i) => (
          <div
            key={i}
            className={classNames(
              'p-2 w-full self-stretch',
              viewType == ViewType.GRID ? 'md:w-1/2 lg:w-1/3' : '',
            )}
          >
            <AssetListItem asset={asset} viewType={viewType} />
          </div>
        ))}

        <Pagination
          total={totalPage}
          value={currentPage}
          onChange={(val) => {
            window.scrollTo({ top: containerRef.current?.offsetTop });
            setCurrentPage(val);
          }}
          mt='sm'
        />
      </div>
    </div>
  );
}
