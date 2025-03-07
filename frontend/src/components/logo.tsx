import React from "react";

const Logo: React.FC = () => {
  return (
    <div className="fixed bottom-0 right-0 w-full">
      <div className="flex justify-center p-3 items-center">
        <div className="flex justify-center items-center p-2 rounded-full bg-black">
          <img
            src="/logo/imrabo-logo.png"
            alt="Imrabo Logo"
            className="h-6 mr-2"
          />
          <p className="mr-2 text-white">Imrabo</p>
        </div>
      </div>
    </div>
  );
};

export default Logo;
