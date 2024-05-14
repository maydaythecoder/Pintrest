import React from "react";
import UserTag from "../UserTag";

function PinInfo({ pinDetail }) {
  const user = {
    name: pinDetail.userName,
    email: pinDetail.email,
    image: pinDetail.userImage,
  };
  return (
    <div>
      <button
        className="p-2 text-[23px]
      mt-10 rounded-full  transition-all"
        onClick={() => window.open(pinDetail.link)}
      >
        <svg
          aria-hidden="true"
          aria-label=""
          className=""
          height="20"
          role="img"
          viewBox="0 0 24 24"
          width="20"
        >
          <path d="M10 7.66 8.81 8.84a2 2 0 0 1-2.84-2.82l6-6.02L18 6.01a2 2 0 0 1-2.82 2.83l-1.2-1.19v6.18a2 2 0 0 1-4 0zM19 16a2 2 0 0 1 4 0v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-6a2 2 0 0 1 4 0v4h14z"></path>
        </svg>
      </button>

      <button
        className="p-2 text-[23px]
      mt-10 rounded-full  transition-all"
        onClick={() => window.open(pinDetail.link)}
      >
        <svg
          aria-hidden="true"
          aria-label=""
          className=""
          height="20"
          role="img"
          viewBox="0 0 24 24"
          width="20"
        >
          <path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6M3 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6m18 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6"></path>
        </svg>
      </button>

      <h2 className="text-[30px] font-bold mb-10">{pinDetail.title}</h2>
      <UserTag user={user} />
      <h2 className="mt-10">{pinDetail.desc}</h2>
    </div>
  );
}

export default PinInfo;
