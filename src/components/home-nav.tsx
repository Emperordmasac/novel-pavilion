import Container from "./container";
import Logo from "./logo";
import Link from "next/link";
import { FaBars, FaUser } from "react-icons/fa";

const HomeNav = () => {
  const links = [
    { name: "Series", link: "/novels" },
    { name: "Bookmarks", link: "/bookmark" },
    { name: "Resources", link: "/resources" },
  ];
  return (
    <nav className="text-[#fff] bg-[#131415]">
      <div className="w-[100vw] py-10">
        <Container>
          <div className="flex content-center items-center h-[100%]">
            <Logo />
            <div className="flex  gap-[30px] d_k2:hidden">
              <FaUser size={20} />
              <FaBars size={20} />
            </div>
            <div className="content-center justify-between ml-[40px] hidden d_k2:flex">
              {links && links.length > 0
                ? links.map((link) => (
                    <Link
                      href={`${link.link}`}
                      key={link.name}
                      className="px-[10px]"
                    >
                      <p className="text-[16px]  text-bold">{link.name}</p>
                    </Link>
                  ))
                : null}
            </div>
          </div>
        </Container>
      </div>
    </nav>
  );
};

export default HomeNav;

// import React, { FC } from "react";
// import NextLink from "next/link";
// import Container from "./container";
// import Logo from "./logo";
// import User from "./user";

// const HomeNav: FC<{ links?: { name: string; link: string }[] }> = ({
//   links,
// }) => {
//   return (
//     <nav>
//       <div className="w-[100vw] py-10">
//         <Container height="100%" paddingX="40px">
//           <div
//             className="flex content-center justify-between"
//             display="flex"
//             justifyContent="space-between"
//             alignItems="center"
//             height="100%"
//           >
//             <Logo />

//             <div
//               display="flex"
//               justifyContent="space-around"
//               alignItems="center"
//             >
//               {links && links.length > 0
//                 ? links.map((link) => (
//                     <Box paddingX={majorScale(3)} key={link.name}>
//                       <NextLink href={`${link.link}`}>
//                         <Text fontSize="16px">{link.name}</Text>
//                       </NextLink>
//                     </Box>
//                   ))
//                 : null}
//               <div paddingX={majorScale(3)}>
//                 <User />
//               </div>
//             </div>
//           </div>
//         </Container>
//       </div>
//     </nav>
//   );
// };

// HomeNav.defaultProps = {
//   links: [
//     { name: "Series", link: "/novels" },
//     { name: "Bookmarks", link: "/bookmark" },
//     { name: "Resources", link: "/resources" },
//   ],
// };

// export default HomeNav;
