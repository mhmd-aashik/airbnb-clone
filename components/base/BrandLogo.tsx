import React from "react";
import Image from "next/image";

const BrandLogo = () => {
  return (
    <div>
      <Image src="/images/logo.png" alt="logo" height={120} width={120} />
    </div>
  );
};

export default BrandLogo;
