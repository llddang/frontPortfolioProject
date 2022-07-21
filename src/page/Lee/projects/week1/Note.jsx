import React from "react";

const Note1 = () => {
  return (
    <div className="mt-2">
      <div className="text-lg text-center font-bold text-[#f0f9f0]">
        1주차 : 로딩화면 만들기
      </div>
      <div className="w-fit text-white my-3 mx-2">
        setInterval 과 clearInterval, useState와 useEffect를 이용해 시간이
        지남에 따라 명도를 달리 함.
      </div>
      <div className="w-fit text-white my-3 mx-2">
        매끄럽지 않은 모습이 아쉬움.
      </div>
    </div>
  );
};

export default Note1;
