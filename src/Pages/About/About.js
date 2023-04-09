import React from 'react';
import { Helmet } from 'react-helmet';

const About = () => {
    return (
        <div>
        <Helmet>
        <title>login - BookShelf</title>
        <meta name="description" content="Nested component" />
      </Helmet>
            <h2>this i s about page</h2>
        </div>
    );
};

export default About;