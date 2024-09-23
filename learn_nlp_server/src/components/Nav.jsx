import { NavLink } from "react-router-dom";
import {Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/react';
import { FaBars, FaTimes } from 'react-icons/fa';
import {useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";

function Nav() {

  const auth = useContext(AuthContext);

  const [isDesktop, setDesktop] = useState(window.innerWidth > 800);

  const checkSize = () => {
    const updateMedia = () => {
      setDesktop(window.innerWidth > 800);
      window.location.reload();
    };

    useEffect(() => {
      window.addEventListener("resize", updateMedia);
      return () => window.removeEventListener("resize", updateMedia);
    }, []);
  };

  checkSize();

  return (
    <>
      {isDesktop ? (
        <Disclosure as="nav" className="bg-gray-300">
          <div className="navbar flex justify-between p-4">
            <div className="flex space-x-4">
              <NavLink to="/"><button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">Home</button></NavLink>
              <NavLink to="/LearnNLP"><button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Learn NLP</button></NavLink>
              <NavLink to="/ExploreNLP"><button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Explore NLP</button></NavLink>
              <NavLink to="/Stories"><button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Stories</button></NavLink>
              {auth.user && <NavLink to="/authors"><button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Authors</button></NavLink>}
            </div>
            <div>
              {auth.user ? (
                <NavLink to="/"><button onClick={auth.logout} className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600 transition duration-300">Logout</button></NavLink>
              ) : (
                <NavLink to="/login"><button className=" bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600 transition duration-300">Login</button></NavLink>
              )}
            </div>
          </div>
        </Disclosure>
      ) : (
        <div className="mobile-nav">
          {/* Add mobile navigation items here */}
          <Disclosure>
            {({ open }) => (
              <>
                <div className="flex justify-between p-4 bg-gray-300">
                  <div className="flex space-x-4">
                    <NavLink to="/"><button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">Home</button></NavLink>
                  </div>
                  <DisclosureButton as="button" className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700">
                    {open ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
                  </DisclosureButton>
                </div>
                <DisclosurePanel as="div" className="bg-gray-300">
                  <div className="flex flex-col space-y-4 p-4">
                    <NavLink to="/LearnNLP"><button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Learn NLP</button></NavLink>
                    <NavLink to="/ExploreNLP"><button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Explore NLP</button></NavLink>
                    <NavLink to="/Stories"><button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Stories</button></NavLink>
                    {auth.user && <NavLink to="/authors"><button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Authors</button></NavLink>}
                    {auth.user ? (
                      <NavLink to="/"><button onClick={auth.logout} className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600 transition duration-300">Logout</button></NavLink>
                    ) : (
                      <NavLink to="/login"><button className=" bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600 transition duration-300">Login</button></NavLink>
                    )}
                  </div>
                </DisclosurePanel>
              </>
            )}
          </Disclosure>
        </div>
      )}
    </>
  );
}

export default Nav;


