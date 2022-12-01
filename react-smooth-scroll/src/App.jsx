import React from 'react';
import Navbar from './components/Navbar';
import SectionOne from './views/SectionOne';
import SectionThree from './views/SectionThree';
import SectionTwo from './views/SectionTwo';

function App() {
    return (
        <>
            <Navbar />
            <SectionOne />
            <SectionTwo />
            <SectionThree />
        </>
    );
}

export default App;
