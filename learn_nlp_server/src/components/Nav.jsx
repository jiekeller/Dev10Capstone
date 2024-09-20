import { NavLink } from "react-router-dom";
import {Disclosure} from '@headlessui/react';
import {useContext } from "react";
import AuthContext from "../context/AuthContext";

function Nav() {

  const auth = useContext(AuthContext);

  return (
    <Disclosure as="nav" className="bg-blue-200">
      <div className="navbar flex justify-between p-4">
        <div className="flex space-x-4">
          <NavLink to="/"><button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">Home</button></NavLink>
          <NavLink to="/LearnNLP"><button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Learn NLP</button></NavLink>
          <NavLink to="/ExploreNLP"><button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Explore NLP</button></NavLink>
          <NavLink to="/Stories"><button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Stories</button></NavLink>
        </div>
        <div>
          {auth.user ? (
            <NavLink to="/"><button onClick={auth.logout} className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Logout</button></NavLink>
          ) : (
            <NavLink to="/login"><button className=" bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Login</button></NavLink>
          )}
        </div>
      </div>
    </Disclosure>
  );
}

export default Nav;