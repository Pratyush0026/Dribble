import React from "react";

const Dribbble= () => {
  return (
    <div className="ml-0 inset-x-0 top-0 bg-transparent p-4 flex ml-6 mt-4 ">
        <div className="flex flex-row gap-7">
        <p className="italic font-bold text-pink-500 flex flex-row text-[20px]">dribble</p>
    <div
      className="icono-dribbble"
      style={{
        backgroundColor: "#ea4c89",
        color: "#c32461",
        width: "22px",
        height: "22px",
        boxShadow: "inset 0 0 0 2px",
        borderRadius: "50%",
        overflow: "hidden",
        backgroundImage:
          "radial-gradient(50% 100%, transparent 0, transparent 9px, currentColor 9.2px, currentColor 11px, transparent 11.2px)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "-8px center",
        transform: "rotate(-25deg) scale(2)",
        transition: "all 0.2s",
    
      }}
    >
      <div
        style={{
          content: "",
          position: "absolute",
          borderRadius: "50%",
          border: "2px solid",
          width: "40px",
          height: "30px",
          top: "14px",
          left: "-7px",
        }}
      ></div>
      <div
        style={{
          content: "",
          position: "absolute",
          borderRadius: "50%",
          border: "2px solid",
          width: "40px",
          height: "30px",
          left: "-6px",
          top: "-23px",
        }}
      ></div>
    </div>
    </div>
  </div>
  );
};

export default Dribbble;
