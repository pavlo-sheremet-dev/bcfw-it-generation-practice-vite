export const SearchForm = () => {
  return (
    <div className='p-4 space-x-6 bg-white rounded-xl shadow-md max-w-2xl mx-auto mb-10'>
      <form className='w-full flex items-center gap-2'>
        <div className='relative flex bg-gray-100 w-full rounded-lg'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 absolute left-4 translate-y-1/2'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            />
          </svg>

          <input
            className='bg-gray-100 w-full p-3 rounded-lg pl-12 text-md font-medium'
            type='text'
            placeholder='Enter name of cocktail...'
          />
        </div>

        <button
          type='submit'
          className='bg-indigo-500 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer'
        >
          Search
        </button>
      </form>
    </div>
  );
};
