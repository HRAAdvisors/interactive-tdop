import classNames from 'classnames';

export default function CoveredPopulation({ filters, category }: any) {
  const option = filters
    .find((f: any) => f.name === 'Population Served')
    ?.options.find((o: any) => {
      return o.label.trim() == category.trim();
    });

  return (
    <span
      key={Math.random()}
      className={classNames(
        '',
        'flex gap-1 mr-2 bg-gray-500 text-white ring-gray-500/10 rounded-md whitespace-nowrap mb-2 mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset shadow-sm truncate',
      )}
      style={{
        backgroundColor: option?.color,
      }}
    >
      {category}
    </span>
  );
}
