import React from "react";

function OptScreen() {
  const renderOtp = () => {
    return (
      <input
        type="text"
        className="border-black border-[1px] placeholder-gray-400 text-custom-p rounded-[5px] text-center mr-3 w-16 h-12"
      />
    );
  };
  return (
    <>
      <div className="mb-4">
        <label
          htmlFor="password"
          className=" block text-black text-custom-p font-medium mb-2"
        >
          Enter your OTP
        </label>
        {renderOtp()}
        {renderOtp()}
        {renderOtp()}
        {renderOtp()}
        {renderOtp()}
        {renderOtp()}
      </div>
    </>
  );
}

export default OptScreen;
