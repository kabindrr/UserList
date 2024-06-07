import React from "react";

export const Display = ({ name }) => {
  return (
    <div>
      <div
        className="display"
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
          fontSize: "2rem",
          paddingBottom: "2rem",
        }}
      >
        {name}
      </div>
    </div>
  );
};
