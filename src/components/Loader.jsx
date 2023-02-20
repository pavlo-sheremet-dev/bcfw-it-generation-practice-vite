export const Loader = () => {
  return (
    <div className=' fixed top-0 left-0 z-20 flex h-full w-full items-center justify-center bg-gray-900 bg-opacity-90'>
      <div className='flex flex-col items-center justify-center gap-4 text-slate-50'>
        <h2 className='text-4xl font-bold'>Loading</h2>
        <svg
          fill='none'
          className='h-14 w-14 animate-spin'
          viewBox='0 0 32 32'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            clipRule='evenodd'
            d='M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z'
            fill='currentColor'
            fillRule='evenodd'
          />
        </svg>
      </div>
    </div>
  );
};
