import { classNames } from '@/utils/helper';

export default function FocusArea({ category, filters }: any) {
  const option = filters
    .find((f: any) => f.name === 'Type Of Service')
    ?.options.find((o: any) => {
      return o.label.trim() == category.trim();
    });

  return (
    <>
      {category.match('We Do Not Provide Digital Equity Programs') ||
      category.match('but our Organization May Be Interested') ? (
        ''
      ) : (
        <span
          key={Math.random()}
          className={classNames(
            '',
            'flex gap-1 mr-2 text-black whitespace-nowrap mb-2 px-1.5 text-md font-medium truncate',
          )}
        >
          <span className='text-[#df3636]'>{option?.icon}</span>
          <span className='pt-0.5'>{category}</span>
        </span>
      )}
    </>
  );
}
