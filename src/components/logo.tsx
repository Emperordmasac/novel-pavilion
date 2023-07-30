import React from "react";
import Link from "next/link";
import { Text } from "evergreen-ui";

const Logo = ({ ...styles }) => {
  return (
    <Link href="/">
      <Text fontSize="30px" color="#000" {...styles}>
        <strong>Novel Pavilion</strong>
      </Text>
    </Link>
  );
};

export default Logo;
