import { Fragment, useState } from 'react';
import { Dialog, Disclosure, Transition } from '@headlessui/react';
import {
  MapPinIcon,
  ChevronDownIcon,
  ArrowTopRightOnSquareIcon,
  ArrowPathIcon,
} from '@heroicons/react/20/solid';
import FocusArea from './FocusArea';

import CoveredPopulation from './CoveredPopulation';
import { classNames } from '@/utils/helper';

export default function AssetRow({ asset, filters }: any) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <li className='relative border border-1 border-slate-200 shadow mb-4 rounded'>
      <div className='text-left py-4 px-4'>
        <h3 className='text-sm font-semibold mb-2 md:text-lg'>{asset.fields.Asset}</h3>
        <p className='text-xs text-gray-600 flex gap-3 justify-between flex-wrap middle'>
          <span className='flex gap-1'>
            <MapPinIcon className='h-5 w-5 flex-none text-gray-400' aria-hidden='true' />
            <span className='flex '>
              <span key={Math.random()} className='pt-0.5'>
                {asset.fields['County (from Org County)'][0]} County
              </span>
              {asset.fields['County (from Org County)'].length > 1 ? (
                <>
                  <span className='pt-0.5 pl-2'>
                    <button
                      type='button'
                      onClick={openModal}
                      className='text-xs italic hover:bg-gray-100 p-1 rounded -mt-1'
                    >
                      (See More counties)
                    </button>
                  </span>

                  <Transition appear show={isOpen} as={Fragment}>
                    <Dialog as='div' className='relative z-10' onClose={closeModal}>
                      <Transition.Child
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                      >
                        <div className='fixed inset-0 bg-black/25' />
                      </Transition.Child>

                      <div className='fixed inset-0 overflow-y-auto'>
                        <div className='flex min-h-full items-center justify-center p-4 text-center'>
                          <Transition.Child
                            as={Fragment}
                            enter='ease-out duration-300'
                            enterFrom='opacity-0 scale-95'
                            enterTo='opacity-100 scale-100'
                            leave='ease-in duration-200'
                            leaveFrom='opacity-100 scale-100'
                            leaveTo='opacity-0 scale-95'
                          >
                            <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                              <Dialog.Title
                                as='h3'
                                className='text-lg font-medium leading-6 text-gray-900'
                              >
                                All Counties Served by {asset.fields.Asset}
                              </Dialog.Title>
                              <div className='mt-2'>
                                {asset.fields['County (from Org County)'].join(', ')}.
                              </div>

                              <div className='mt-4'>
                                <button
                                  type='button'
                                  className='inline-flex justify-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2'
                                  onClick={closeModal}
                                >
                                  Close
                                </button>
                              </div>
                            </Dialog.Panel>
                          </Transition.Child>
                        </div>
                      </div>
                    </Dialog>
                  </Transition>
                </>
              ) : null}
            </span>
          </span>
          <span className='flex gap-1'>
            <span className='flex flex-wrap text-ellipsis overflow-hidden'>
              {asset.fields['Asset Broadband Focus Area'].length
                ? asset.fields['Asset Broadband Focus Area'].map((c: any) => (
                    <FocusArea key={Math.random()} category={c} filters={filters} />
                  ))
                : null}
            </span>
          </span>
          <span className='flex gap-1'>
            {asset.fields['Website'] && (
              <span className='flex flex-wrap text-ellipsis overflow-hidden'>
                <ArrowTopRightOnSquareIcon
                  className='h-5 w-5 flex-none text-gray-400 mr-1'
                  aria-hidden='true'
                />
                <span className='text-xs leading-5 text-gray-500'>
                  <a
                    className='text-blue-600 underline pt-0.5'
                    target='_blank'
                    rel='noreferrer'
                    href={`http://${asset.fields['Website']}`}
                  >
                    {asset.fields['Website']}
                  </a>
                </span>
              </span>
            )}
          </span>
          <span className='flex flex-wrap text-ellipsis overflow-hidden gap-2'>
            {asset.fields['Organization Sub-Type']
              ? asset.fields['Organization Sub-Type'].map((ost: any) => (
                  <span
                    key={Math.random()}
                    style={{
                      background: filters
                        .find((f: any) => f.name === 'Type of Organization')
                        ?.options.find((o: any) => o.label.trim() == ost.trim())?.color,
                    }}
                    className={classNames(
                      'text-xs text-white px-2 py-1 rounded-full bg-gray-400 h-6',
                    )}
                  >
                    {ost}
                  </span>
                ))
              : null}
          </span>
        </p>
      </div>
      <Disclosure>
        <Disclosure.Button className='w-full h-full text-left text-xs flex p-4'>
          More Details
          <ChevronDownIcon className='w-5 h-5' />
        </Disclosure.Button>
        <Disclosure.Panel className='text-gray-500 pb-4 px-4'>
          <div className='space-y-4'>
            <div className='flex flex-wrap justify-between gap-x-8 gap-y-4'>
              <div className='flex text-xs'>
                <span className='flex gap-1'>
                  <ArrowPathIcon className='h-4 w-4 flex-none text-gray-400' aria-hidden='true' />
                  Last Updated
                  <time>{new Date(asset.createdTime).toLocaleString().split(',')[0]}</time>
                </span>
              </div>
            </div>
            {asset.fields['Asset Description'] && asset.fields['Asset Description'].length ? (
              <div className='bg-gray-100 shadow rounded flex gap-x-3 top'>
                <p className='p-4 text-sm'>{asset.fields['Asset Description']}</p>
              </div>
            ) : null}

            {asset.fields['Asset Covered Population'].length ? (
              <div className='h-fit bg-gray-100 shadow rounded md:flex gap-x-3'>
                <h4 className='text-xs bg-white p-4 rounded-l min-w-36'>Populations served</h4>
                <div className='p-2 flex flex-wrap text-ellipsis overflow-hidden'>
                  {asset.fields['Asset Covered Population'].map((c: any) => (
                    <CoveredPopulation key={Math.random()} category={c} filters={filters} />
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </Disclosure.Panel>
      </Disclosure>
    </li>
  );
}
