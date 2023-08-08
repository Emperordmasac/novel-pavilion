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
