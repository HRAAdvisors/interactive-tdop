export default function Button(props: any) {
  return (
    <button
      {...props}
      type='submit'
      className='rounded-md bg-ajlred px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#f56754] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600'
    >
      {props.children}
    </button>
  );
}
