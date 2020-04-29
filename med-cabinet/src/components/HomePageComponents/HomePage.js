import React from 'react';

import Header from '../Header/Header';
import TopStrains from './TopStrains';
import SavedStrains from './SavedStrains';
import SleepyStrains from './SleepyStrains';
// Renders the link to '/home'
const HomePage = () => {
    return (
        <div>
            <link
                rel="stylesheet"
                href="node_modules/@glidejs/glide/dist/css/glide.core.min.css"
            ></link>
            {/* Header */}
            <Header />
            {/* What will be the app tiles that carousel */}
            <TopStrains />
            <SavedStrains />
            <SleepyStrains />
        </div>
    );
};

export default HomePage;
