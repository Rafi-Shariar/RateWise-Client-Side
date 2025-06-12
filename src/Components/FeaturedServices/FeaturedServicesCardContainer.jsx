import React, { useEffect, useState } from 'react';
import LoadingCardSkeleton from '../Shared/LoadingCardSkeleton';
const FeaturedServiceCard = React.lazy(() => import("./FeaturedServiceCard"));

const FeaturedServicesCardContainer = () => {

    const [loading, setLoading] = useState(true);
    const [featuredData, setFeaturedData] = useState(null);

    useEffect(()=>{

        fetch(`https://ratewise-seven.vercel.app/services`)
        .then(res => res.json())
        .then(data =>{
            setFeaturedData(data);
            setLoading(false);
        })


    },[])
    

    return (
        <div>
            {
                loading ? 
                (<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    <LoadingCardSkeleton></LoadingCardSkeleton>
                    <LoadingCardSkeleton></LoadingCardSkeleton>
                    <LoadingCardSkeleton></LoadingCardSkeleton>
                </div>) : 
                (<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-7'>

                    {
                        featuredData?.map(featured => <FeaturedServiceCard key={featured._id} featured={featured}/>)
                    }

                </div>)
            }
            
        </div>
    );
};

export default FeaturedServicesCardContainer;