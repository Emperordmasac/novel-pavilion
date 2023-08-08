import React, { FC } from "react";
import { Box, Heading } from "@chakra-ui/react";

const Hero: FC<{ content: { title: string; body: string } }> = ({
  content,
}) => {
  return (
    <Box width="100%" display="flex" alignItems="center">
      <Box>
        <Heading
          fontSize="clamp(2rem, 8vw, 6rem)"
          lineHeight="clamp(2rem, 8vw, 6rem)"
        >
          {content.title}
        </Heading>
        <Box
          fontSize="clamp(1.2rem, 4vw, 1.5rem)"
          lineHeight="clamp(1.2rem, 4vw, 2rem)"
        >
          {content.body}
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
