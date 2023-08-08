import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <p className="flex text-[20px] text-[#fff]">
        <strong>Novel Pavilion</strong>
      </p>
    </Link>
  );
};

export default Logo;
