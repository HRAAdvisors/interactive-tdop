import { useEffect, useState } from 'react';
import { uiData, countyFilter } from '../../static/filterDataAssetInventory';
import AssetRow from './AssetRow';
import FiltersMobile from './FiltersMobile';
import FiltersDesktop from './FiltersDesktop';
import ActiveFilters from './ActiveFilters';
import Search from './Search';
import Intro from './Intro';
import AssetRowSkelton from './AssetRowSkeleton';
import { useGetAssetInventoryQuery } from '@/services/dataDashboard';

export default function AssetInventory() {
  const { data, isLoading } = useGetAssetInventoryQuery();
  const [assets, setAssets] = useState<any[]>([]);
  const [allAssets, setAllAssets] = useState<any[]>([]);
  const [activeFilters, setActiveFilters] = useState<any[]>([]);
  const [activeCounties, setActiveCounties] = useState<any[]>([]);
  const [filters] = useState(uiData);
  let filteredCount = 1;

  useEffect(() => {
    if (data) {
      const assets = data.records
        .filter((asset: any) => {
          if (
            asset.fields.Asset &&
            asset.fields['County (from Org County)'] &&
            asset.fields['Asset Broadband Focus Area'] &&
            asset.fields['Asset Covered Population'] &&
            asset.fields['Organization Sub-Type']
          ) {
            return asset;
          }
        })
        .sort((a: any, b: any) => {
          if (a.fields.Asset < b.fields.Asset) {
            return -1;
          }
          if (a.fields.Asset > b.fields.Asset) {
            return 1;
          }
          return 0;
        });
      setAssets(assets);
      setAllAssets(assets);
    }
  }, [data]);

  useEffect(() => {
    const show = [] as any[];
    allAssets.forEach((asset: any) => {
      if (activeCounties.length > 0 && activeFilters.length > 0) {
        activeCounties.forEach((activeCounty) => {
          if (asset.fields['County (from Org County)'].includes(activeCounty.label)) {
            activeFilters.forEach((af: any) => {
              if (
                asset.fields['Asset Broadband Focus Area'].includes(af.label) ||
                asset.fields['Asset Covered Population'].includes(af.label) ||
                asset.fields['Organization Sub-Type'].includes(af.label)
              ) {
                show.push(asset);
              }
            });
          }
        });
        setAssets(show);
      } else if (activeCounties.length > 0 || activeFilters.length > 0) {
        if (activeCounties.length > 0) {
          activeCounties.forEach((activeCounty) => {
            if (asset.fields['County (from Org County)'].includes(activeCounty.label)) {
              show.push(asset);
            }
          });
        }
        if (activeFilters.length > 0) {
          activeFilters.forEach((af: any) => {
            if (
              asset.fields['Asset Broadband Focus Area'].includes(af.label) ||
              asset.fields['Asset Covered Population'].includes(af.label) ||
              asset.fields['Organization Sub-Type'].includes(af.label)
            ) {
              show.push(asset);
            }
          });
        }
        setAssets(show);
      }
    });
  }, [activeCounties, activeFilters]);

  return (
    <main className='w-full'>
      <div className='w-full'>
        <Intro />
        <Search allAssets={allAssets} setAssets={setAssets} />

        <section aria-labelledby='filter-heading'>
          <h2 id='filter-heading' className='sr-only'>
            Filters
          </h2>
          {!isLoading ? (
            <>
              <FiltersMobile
                activeFilters={activeFilters}
                setActiveFilters={setActiveFilters}
                filters={filters}
                countyFilter={countyFilter}
                activeCounties={activeCounties}
                setActiveCounties={setActiveCounties}
              />

              <FiltersDesktop
                activeFilters={activeFilters}
                setActiveFilters={setActiveFilters}
                setAssets={setAssets}
                assets={assets}
                filters={filters}
                countyFilter={countyFilter}
                activeCounties={activeCounties}
                setActiveCounties={setActiveCounties}
              />
            </>
          ) : null}
          {activeFilters.length ? (
            <ActiveFilters
              activeFilters={activeFilters}
              setActiveFilters={setActiveFilters}
              setAssets={setAssets}
              assets={assets}
              filters={filters}
            />
          ) : null}
        </section>
      </div>

      <div className='h-full min-h-screen max-w-full p-5'>
        {isLoading ? (
          <ul>
            {Array(15)
              .fill(null)
              .map(() => (
                <AssetRowSkelton key={Math.random()} />
              ))}
          </ul>
        ) : assets.length === 0 && filteredCount > 0 ? (
          <p className='p-4'>No matches.</p>
        ) : (
          <ul className=''>
            {assets.map((asset) => (
              <AssetRow key={Math.random()} asset={asset} filters={filters} />
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
