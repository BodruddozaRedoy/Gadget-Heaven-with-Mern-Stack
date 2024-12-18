import React from 'react';

const ErrorPage = () => {
    return (
        <div className='flex flex-col gap-5 justify-center items-center h-svh'>
            <h1 className='text-8xl font-bold text-red-500'>404</h1>
            <p className='text-xl'>You are in wrong page</p>
        </div>
    );
};

export default ErrorPage;