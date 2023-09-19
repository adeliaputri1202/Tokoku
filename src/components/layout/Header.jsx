import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  return (
    <header className="bg-purple-500 drop-shadow-lg p-4 flex justify-between items-center">
      <div className="flex items-center ml-10 rounded-full bg-white ">
        <span className='text-2xl w-40 text-center text-purple-500' style={{ fontFamily: 'Kaushan Script, cursive' }}> <a href="/">Tokoku</a></span>
      </div>
      <div className="search-bar relative">
        <input
          type="text"
          placeholder="Serach here..."
          className="rounded-lg px-2 py-1 bg-gray-100 focus:outline-none focus:bg-white w-80"
          style={{ paddingLeft: '2.3rem' }}
        />
         <div className="absolute left-2 top-1/2 transform -translate-y-1/2 text-purple-500">
          <FontAwesomeIcon icon={faSearch} size="lg" /> {/* Icon pencarian */}
        </div>
      </div>
      <div className="flex items-center space-x-10">
        <button className="text-white hover:text-gray-300">
          <a href="/keranjang">
          <FontAwesomeIcon icon={faShoppingCart}  size="2x" />
          </a>
        </button>
        <button className="text-white hover:text-gray-300 mr-">
          <FontAwesomeIcon icon={faBell}  size="2x" />
        </button>
        <button className="text-white hover:text-gray-300 mr-4">
          {/* <FontAwesomeIcon icon={faUserCircle}  size="2x"  /> */}
          <img src="/img/pfp.jpg" className='w-8 h-8 rounded-full mr-5' alt="" />
        </button>
      </div>
    </header>
  );
};

export default Header;
