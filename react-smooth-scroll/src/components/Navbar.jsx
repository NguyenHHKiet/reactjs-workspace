import React from 'react';
import { Link } from 'react-scroll';

// import Link from react-scroll and specify properties including among others
// the scroll destination (to) and scroll duration

const Navbar = () => {
    return (
        <nav className="fixed top-0 bg-slate-900 text-white flex justify-center items-center h-20 w-full">
            <ul className="w-3/4 px-4 md:w-1/4 md:px-0 flex justify-between">
                <li>
                    <Link
                        to="section1"
                        smooth={true}
                        duration={500}
                        className="hover:text-slate-500 cursor-pointer"
                    >
                        Section 1
                    </Link>
                </li>{' '}
                <li>
                    <Link
                        to="section2"
                        smooth={true}
                        duration={500}
                        className="hover:text-slate-500 cursor-pointer"
                    >
                        Section 2
                    </Link>
                </li>{' '}
                <li>
                    <Link
                        to="section3"
                        smooth={true}
                        duration={500}
                        className="hover:text-slate-500 cursor-pointer"
                    >
                        Section 3
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
