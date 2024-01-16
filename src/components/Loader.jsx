import React from "react";

const Loader = () => {
  return (
    <div
      style={{
        minHeight: "20vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img width={156} height={156} src="/load-8510_256.gif" />
    </div>
  );
};

export default Loader;
