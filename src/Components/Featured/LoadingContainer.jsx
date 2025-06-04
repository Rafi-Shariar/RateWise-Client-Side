import React from 'react';
import Loading from '../Shared/Loading.';

const LoadingContainer = () => {
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
                <Loading></Loading>
            </div>
        </div>
    );
};

export default LoadingContainer;