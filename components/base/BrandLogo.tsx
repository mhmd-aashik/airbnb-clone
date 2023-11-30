import React from "react";
import Image from "next/image";

const BrandLogo = () => {
  return (
    <div>
      <Image
        src="/images/logo.png"
        alt="logo"
        height={120}
        width={120}
        className="hidden lg:block"
      />
      <Image
        src="/images/logo-sm.png"
        alt="logo"
        height={100}
        width={100}
        className="lg:hidden"
      />
    </div>
  );
};

export default BrandLogo;
