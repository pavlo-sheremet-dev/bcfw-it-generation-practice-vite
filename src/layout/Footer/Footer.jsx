import React from 'react';

export const Footer = () => {
  return (
    <footer className='border-t-2 border-slate-200 py-6'>
      <div className='container'>
        <p className='text-center text-base font-light leading-6 tracking-wide text-gray-400'>
          © {new Date().getFullYear()}{' '}
          <span className='font-medium text-gray-900'>Logo.</span>, Inc. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};
