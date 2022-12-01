import React from 'react';
import Navbar from './components/Navbar';
import SectionOne from './views/SectionOne';
import SectionThree from './views/SectionThree';
import SectionTwo from './views/SectionTwo';

// the main app components and folders structure
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
