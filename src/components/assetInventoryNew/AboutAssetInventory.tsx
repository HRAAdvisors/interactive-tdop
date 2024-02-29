import abboutAsset from '@/assets/2.avif';

const AboutAssetInventory = () => (
  <div className='flex min-h-screen max-w-screen-xl px-4 lg:px-8 m-auto py-10 items-center'>
    <div className='flex w-full flex-col lg:flex-row gap-16'>
      <div className='flex flex-col w-full lg:w-1/2'>
        <div className='flex flex-col'>
          <h3 className='font-semibold text-[28px] subpixel-antialiased'>
            About the Resource Finder
          </h3>
          <p className='py-3 text-gray-600'>
            Looking for organizations or local governments providing digital resources like free
            Wi-Fi access, digital skills class, or devices? The Texas Digital Opportunity Resource
            Hub can help anyone find digital opportunity resources.
          </p>
        </div>
        <div className='flex flex-col'>
          <p className='text-gray-600'>
            The information in the Resource Finder comes from a survey that the BDO circulated to
            Texas agencies and organizations working to advance digital opportunity. Because this
            information is crowdsourced, it may not be 100% complete. We invite you to help keep the
            information up to date and as comprehensive as possible.
          </p>
          <div className='pt-6'>
            <h3 className='font-semibold text-[28px] subpixel-antialiased py-4'>
              What Makes the Resource Finder Unique
            </h3>
            <p className='py-2 text-gray-600'>
              On this site, Texans can find the resources they need within their communities or
              learn about what organizations in other parts of the state are doing. It is a work in
              progress that will expand as people interested in advancing digital opportunity add
              information. In this way, the Resource Finder is a unique, crowdsourced dataset that
              helps the BDO deliver on its commitment to maintaining a living digital opportunity
              plan for all Texans.
            </p>
          </div>
        </div>
      </div>
      <div className='w-full lg:w-1/2 flex justify-center'>
        <img src={abboutAsset} className='max-h-full object-cover' />
      </div>
    </div>
  </div>
);

export default AboutAssetInventory;
