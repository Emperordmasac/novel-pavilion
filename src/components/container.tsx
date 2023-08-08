import React, { ReactNode, FC } from "react";

interface container {
  children: ReactNode;
}

const Container: FC<container> = ({ children }) => {
  return (
    <div className="max-w-[1200px] mx-[auto] w-[100%] px-[40px]">
      {children}
    </div>
  );
};

export default Container;

// import React from "react";
// import { Box } from "@chakra-ui/react";

// const Container = ({ children, ...styles }) => (
//   <Box
//     maxWidth="1280px"
//     marginX="auto"
//     width="100%"
//     {...styles}
//     paddingX="40px"
//   >
//     {children}
//   </Box>
// );

// export default Container;
