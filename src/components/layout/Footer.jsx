import React from 'react';

function Footer() {
  return (
    <footer className="bg-purple-900 text-white p-4 w-full">
      <div className="container-fluid mx-auto text-center">
        <ul className="flex justify-center space-x-4">
          <li>
            <a href="/about" className="hover:text-blue-500">About</a>
          </li>
          <li>
            <a href="/help" className="hover:text-blue-500">Help</a>
          </li>
        </ul> <br /><br />
        <p>&copy; 2023 Tokoku. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
