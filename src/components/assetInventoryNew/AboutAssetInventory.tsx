import abboutAsset from '@/assets/aboutAsset.png';

const AboutAssetInventory = () => (
  <div className='flex min-h-screen  max-w-screen-xl px-8 m-auto py-10 items-center'>
    <div className='flex w-full flex-col gap-16'>
      <div className='flex flex-col w-full'>
        <h2 className='text-4xl'>About the Resource Hub</h2>
        <p className='py-3 text-gray-600'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem
          non.{' '}
        </p>
      </div>

      <div className='flex flex-col-reverse lg:flex-row  w-full gap-12'>
        <div className='flex flex-col w-full lg:w-1/2'>
          <p className='text-gray-600'>
            Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In
            aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer
            aliquam in vitae malesuada fringilla.
          </p>
          <div className='pt-6'>
            <h3 className='text-3xl py-4'>Why we’re better</h3>
            <p className='py-2 text-gray-600 tracking-wide'>
              Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi
              eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam
              enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At
              feugiat sapien varius id.
            </p>
            <p className='py-2 text-gray-600 tracking-wide'>
              Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi
              eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam
              enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At
              feugiat sapien varius id.
            </p>
          </div>
        </div>
        <div className='w-full lg:w-1/2'>
          <img src={abboutAsset} className='w-full' />
        </div>
      </div>
    </div>
  </div>
);

export default AboutAssetInventory;
