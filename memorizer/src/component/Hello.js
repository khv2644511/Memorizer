import React from "react";
import World from "./World";

export default function Hello() {
  return (
    <>
      <h1
        style={{
          color: "#f00",
          borderRight: "2px solid #000",
          marginBottom: "50px",
          opacity: 8,
        }}
      >
        Hello
      </h1>
      <World />
    </>
  );
}
