import React from "react";

const Footer = () => {
  return (
    <footer className="  ">
      <div className="container mx-auto  px-4 sm:px-6 lg:px-8 text-right ">
        {/* <p className="max-w-md mx-auto text-gray-600">
          Empowering connections through technology. Stay connected with us.
        </p> */}

        <p className="mt-2 text-sm text-gray-500">
          © {new Date().getFullYear()}  Hariom Gauswami. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
