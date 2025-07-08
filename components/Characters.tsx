import React from "react";

export default function Characters(): React.JSX.Element {

  return (
    <div
      className="absolute -bottom-48 transform -translate-x-1/2 left-1/2 w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] lg:-bottom-57"
      style={{
        backgroundImage: "url('/images/characters.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
}
