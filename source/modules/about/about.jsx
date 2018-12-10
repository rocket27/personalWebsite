import React from 'react';
import SideNav from '../sideNav/sideNav';

const AboutPage = () => {
    return (
        <section className="page-about">
            <div className="container">
                <div className="page-about__content">
                    <SideNav />
                    <h1>Page About</h1>
                </div>
            </div>
        </section>
    );
};

export default AboutPage;
