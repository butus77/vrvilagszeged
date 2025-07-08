import Image from "next/image";
import Footer from "./Footer";
import React from "react";

export default function Vege(): React.JSX.Element {

  return (
    <>
    <div className="absolute  w-full lg:hidden">
      <Image
        src="/images/background4.png"
        alt="zaroelem"
        width={1920}
        height={200}
        className="w-full h-auto object-cover" 
      />
    </div>
    </>
  );
}
