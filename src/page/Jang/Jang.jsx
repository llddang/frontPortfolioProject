import React from "react";
import "./jang.css";
const Jang = () => {
  const rankList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const onClick = () => {
    console.log("dd");
  };
  return (
    <div class="seoyun">
      <div className="bg-red-200 h-screen flex flex-col items-center m-4 p-4">
        <div className="flex bg-white h-12 w-1/3 p-1 mb-2 justify-center">
          <div className="flex bg-red-200 h-full w-full justify-items-start">
            <div class="lds-spinner">
              {rankList.map((info) => (
                <div></div>
              ))}
            </div>
          </div>
        </div>
        {/* 모니터 화면 */}
        <div className="w-full p-4 h-full bg-white">
          <button onClick={onClick} className=" h-20 w-20">
            <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/29/7a/b1/297ab197-2bb1-d8c5-cb4c-0e0aa654af0f/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1024x1024bb.png"></img>
          </button>
          <div className="bg-blue-300 w-40 h-64"></div>
        </div>
      </div>
    </div>
  );
};

export default Jang;
