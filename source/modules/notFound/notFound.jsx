import React from 'react';

const Page404 = ({ location }) => {
    return (
        <section>
            <h1>Page {location.pathname} not found!</h1>
        </section>
    );
};

export default Page404;
