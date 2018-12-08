import React from 'react';
import ParallaxContainer from './components/parallax/parallax';
import OwnerCard from './components/ownerCard/ownerCard';

const IndexPage = () => {
    return (
        <div className="index-page">
            <ParallaxContainer />
            <OwnerCard />
        </div>
    );
};

export default IndexPage;
