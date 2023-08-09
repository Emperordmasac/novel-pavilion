import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <p className="flex text-[20px] text-[#fff]">
        <strong>
          <span className="s_m1:hidden">Novel</span> Pavilion
        </strong>
      </p>
    </Link>
  );
};

export default Logo;
