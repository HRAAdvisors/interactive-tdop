import _ from 'lodash';
import { LinkIcon, LocationIcon, RightArrowIcon, UpArrowIcon } from '../IconSvg';
import { useState } from 'react';
import { addHttpsPrefix, classNames } from '@/utils/helper';
import { AssetInfo } from '@/types/AssetInventory';
import { uiData } from './uidata';

export enum ViewType {
  GRID = 1,
  LIST = 2,
}

const AssetListItem = ({ asset, viewType }: { asset: AssetInfo; viewType: ViewType }) => {
  const [showMore, setShowMore] = useState(false);

  const { options: serviceList } = _.find(uiData, (f: any) => f.id === 'focus') ?? {};

  return (
    <div
      className={classNames(
        'flex flex-col border border-blue-800 rounded-lg p-6 ',
        viewType === ViewType.GRID && 'self-center h-full',
      )}
    >
      <div
        className={classNames(
          'flex w-full py-2 gap-2 flex-col',
          viewType === ViewType.LIST && 'lg:flex-row',
        )}
      >
        <div
          className={classNames(
            'flex flex-col gap-2 w-full',
            viewType == ViewType.LIST && 'lg:w-3/5',
          )}
        >
          <div className='flex gap-2 flex-wrap'>
            {_.map(asset.fields['Organization Sub-Type'], (orgType, i) => (
              <span
                key={i}
                className='bg-green-100 hover:bg-green-200 text-green-800 text-xs  me-2 px-2.5 py-0.5 rounded-xl border  border-green-400 inline-flex items-center justify-center'
              >
                {orgType}
              </span>
            ))}
          </div>
          <h3 className='font-semibold text-xl'>{asset.fields.Asset}</h3>
        </div>

        <div
          className={classNames(
            'flex w-full flex-col gap-2',
            viewType == ViewType.LIST && 'justify-between lg:flex-row lg:w-2/5',
          )}
        >
          <div
            className={classNames(
              'flex self-start gap-2 text-[10px] justify-center items-center px-3 py-1 rounded-xl border border-gray-200 text-gray-700',
              viewType === ViewType.LIST && 'lg:self-center',
            )}
          >
            <LocationIcon /> {asset.fields['County (from Org County)'][0]} County
          </div>
          {asset.fields['Website'] && (
            <a
              target='_blank'
              href={addHttpsPrefix(asset.fields['Website'])}
              className={classNames(
                'cursor-pointer self-start text-xs flex gap-2 justify-center items-center px-3 py-1 rounded-xl border border-gray-200 text-gray-700',
                viewType === ViewType.LIST && 'lg:self-center lg:justify-items-end',
              )}
            >
              <LinkIcon /> {addHttpsPrefix(asset.fields['Website'])}
            </a>
          )}
        </div>
      </div>
      <div>
        <button
          onClick={() => setShowMore((m) => !m)}
          className='bg-blue-100 gap-2 hover:bg-blue-200 text-blue-800 text-xs  me-2 px-2.5 py-1 rounded-xl border  border-blue-400 inline-flex items-center justify-center'
        >
          {showMore ? (
            <>
              Collapse <UpArrowIcon />
            </>
          ) : (
            <>
              {' '}
              Read More <RightArrowIcon />
            </>
          )}
        </button>
        {showMore && (
          <div className='py-2 transition-transform translate-y-0 '>
            {asset.fields['Asset Description'] && (
              <>
                <h4 className='text-sm  text-blue-800'>Description</h4>
                <p className='text-xs py-2'>{asset.fields['Asset Description']}</p>
              </>
            )}

            {asset.fields['Asset Description'] && (
              <>
                <h4 className='text-sm  text-blue-800'>Service Offered</h4>
                <div className='flex flex-wrap py-2 gap-2'>
                  {_.map(asset.fields['Asset Broadband Focus Area'], (focus, i) => (
                    <div
                      key={i}
                      className={classNames(
                        'flex gap-2 text-[10px] justify-center items-center px-3 py-1 rounded-lg border border-gray-200 text-gray-700',
                        viewType === ViewType.LIST ? 'lg:self-center' : '',
                      )}
                    >
                      {
                        (
                          _.find(serviceList, (o: any) => {
                            return o.label.trim() == focus.trim();
                          }) as any
                        ).icon
                      }{' '}
                      {focus}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AssetListItem;
