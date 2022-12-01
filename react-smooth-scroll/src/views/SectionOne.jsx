import React from 'react';

/*
    It's very important to giv each section a name because based on it
    the scroll will be performed
*/
const SectionOne = () => {
    return (
        <section
            name="section1"
            className="flex justify-center items-center h-screen w-full bg-gradient-to-r from-indigo-500 to-blue-400"
        >
            <div className="text-5xl">Section One</div>
        </section>
    );
};

export default SectionOne;
