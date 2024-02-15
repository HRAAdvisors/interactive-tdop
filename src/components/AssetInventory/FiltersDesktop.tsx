import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Select from 'react-select';
import classNames from '@/utils/helper';

export default function FiltersDesktop({
  filters,
  activeFilters,
  setActiveFilters,
  countyFilter,
  setActiveCounties,
}: any) {
  return (
    <div className='hidden md:block border-b border-gray-200  pb-4 '>
      <div className='mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8'>
        <Select
          isMulti
          options={countyFilter.options}
          onChange={(options) => {
            setActiveCounties(options);
          }}
          className='flex-grow bg-transparent'
          placeholder='Filter by County'
        />
        <Popover.Group className='flex v'>
          {filters.map((section: any, idx: number) => (
            <Popover key={Math.random()} className='flex relative px-4 text-left'>
              <Popover className='relative text-left h-5'>
                <Popover.Button className='group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900 h-5'>
                  <QuestionMarkCircleIcon className='w-5 h-5' />
                </Popover.Button>
                <Popover.Panel
                  className={classNames(
                    idx < filters.length - 1 ? 'left-0' : 'right-0',
                    'w-36 absolute  z-10 mt-2 origin-top-right rounded-md bg-white p-4 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none',
                  )}
                >
                  <p className='text-gray-500'>{section.explanation}</p>
                </Popover.Panel>
              </Popover>
              <Popover.Button className='align-middle space-x-1 group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900'>
                <span>{section.name}</span>
                {activeFilters.filter((af: any) => af.type === section.name).length ? (
                  <span className='ml-1.5 rounded bg-gray-200 px-1.5 py-0.5 text-xs font-semibold tabular-nums text-gray-700'>
                    {activeFilters.filter((af: any) => af.type === section.name).length}
                  </span>
                ) : null}
                <ChevronDownIcon
                  className='-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500'
                  aria-hidden='true'
                />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter='transition ease-out duration-100'
                enterFrom='transform opacity-0 scale-95'
                enterTo='transform opacity-100 scale-100'
                leave='transition ease-in duration-75'
                leaveFrom='transform opacity-100 scale-100'
                leaveTo='transform opacity-0 scale-95'
              >
                <Popover.Panel className='absolute left-0 top-5 z-10 mt-2 overflow-y-auto max-h-96 origin-top-left rounded-md bg-white p-4 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none'>
                  <form className='space-y-4'>
                    {section.options.map((option: any, optionIdx: number) => (
                      <div key={Math.random()} className='flex items-center'>
                        <input
                          id={`filter-${section.id}-${optionIdx}`}
                          name={`${section.id}[]`}
                          defaultValue={option.value}
                          type='checkbox'
                          defaultChecked={option.checked}
                          className='h-4 w-4 rounded border-gray-300 text-slate-600 focus:ring-slate-500'
                          onChange={() => {
                            if (!option.checked) {
                              option.checked = true;
                              setActiveFilters([...activeFilters, option]);
                            } else {
                              option.checked = false;

                              setActiveFilters([
                                ...activeFilters.filter((opt: any) => opt.label !== option.label),
                              ]);
                            }
                          }}
                        />
                        <label
                          htmlFor={`filter-${section.id}-${optionIdx}`}
                          className='ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900 flex gap-2 leading-6'
                        >
                          {option.icon ? (
                            <span
                              className='text-[#df3636] p-1 rounded-full w-6 h-6'
                              style={{
                                background: option.icon ? '' : option.color,
                              }}
                            >
                              {option.icon}
                            </span>
                          ) : null}
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </form>
                </Popover.Panel>
              </Transition>
            </Popover>
          ))}
        </Popover.Group>
      </div>
    </div>
  );
}
