import { XCircleIcon } from '@heroicons/react/24/outline';

export default function ActiveFilters({ filters, activeFilters, setActiveFilters }: any) {
  return (
    <div className='bg-gray-100'>
      <div className='mx-auto max-w-7xl px-4 py-3 sm:flex sm:items-center sm:px-6 lg:px-8'>
        <h3 className='text-sm font-medium text-gray-500'>
          Filters
          <span className='sr-only'>, active</span>
        </h3>

        <div aria-hidden='true' className='hidden h-5 w-px bg-gray-300 sm:ml-4 sm:block' />

        <div className='mt-2 sm:ml-4 sm:mt-0'>
          <div className='-m-1 flex flex-wrap items-center'>
            {activeFilters.map((activeFilter: any) => (
              <span
                key={Math.random()}
                className='m-1 inline-flex items-center rounded-full bg-gray-500 border border-gray-200 text-white py-1.5 pl-3 pr-2 text-sm font-medium'
                style={{
                  background: activeFilter.color,
                }}
              >
                <span className='flex gap-2 text-xs leading-5'>
                  <span className='text-white'>
                    {
                      filters
                        .find((f: any) => f.name === 'Type Of Service')
                        ?.options.find((o: any) => o.label === activeFilter.label)?.icon
                    }
                  </span>
                  {activeFilter.label}
                </span>
                <button
                  type='button'
                  className='ml-1 inline-flex h-6 w-6 flex-shrink-0 rounded-full text-white hover:bg-white hover:text-black'
                >
                  <span className='sr-only'>Remove filter for {activeFilter.label}</span>
                  <XCircleIcon
                    role='button'
                    onClick={() => {
                      filters
                        .find((f: any) => f.name === activeFilter.type)
                        .options.find((o: any) => o.label === activeFilter.label).checked = false;

                      setActiveFilters([
                        ...activeFilters.filter((af: any) => af.label !== activeFilter.label),
                      ]);
                    }}
                    className='h-6 w-6'
                  />
                </button>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
