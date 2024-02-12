import { useEffect, useState } from 'react';
import { uiData, countyFilter } from './uidata';
import AssetRow from './AssetRow';
import FiltersMobile from './FiltersMobile';
import FiltersDesktop from './FiltersDesktop';
import ActiveFilters from './ActiveFilters';
import Search from './Search';
import Intro from './Intro';
import AssetRowSkelton from './AssetRowSkeleton';

export default function AssetInventory() {
  const [assets, setAssets] = useState<any[]>([]);
  const [allAssets, setAllAssets] = useState<any[]>([]);
  const [activeFilters, setActiveFilters] = useState<any[]>([]);
  const [activeCounties, setActiveCounties] = useState<any[]>([]);
  const [filters] = useState(uiData);
  let filteredCount = 1;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://us-central1-airtable-texas.cloudfunctions.net/airtable_data')
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        return data.records
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
      })
      .then((assets) => {
        setAssets(assets);
        setAllAssets(assets);
        setLoading(false);
      });
  }, []);

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
              console.log(asset);
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
      <div className='bg-white'>
        <Intro />
        <Search allAssets={allAssets} setAssets={setAssets} />

        <section aria-labelledby='filter-heading'>
          <h2 id='filter-heading' className='sr-only'>
            Filters
          </h2>
          {!loading ? (
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
        {loading ? (
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
