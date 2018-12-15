import React from 'react';
import ParallaxContainer from './components/parallax/parallax';
import OwnerCard from './components/ownerCard/ownerCard';
import Preloader from '../preloader/preloader';

const IndexPage = () => {
    return (
        <div className="index-page">
            <Preloader />
            <ParallaxContainer />
            <div className="index-page__inner">
                <OwnerCard />
            </div>
        </div>
    );
};

export default IndexPage;
