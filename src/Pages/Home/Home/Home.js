import React from 'react';
import AdvertiseItem from '../AdvertiseItem/AdvertiseItem';
import Banner from '../Banner/Banner/Banner';
import OtherSection from './OtherSection/OtherSection/OtherSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AdvertiseItem></AdvertiseItem>
            <OtherSection></OtherSection>
        </div>
    );
};

export default Home;