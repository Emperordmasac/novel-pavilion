import Container from "@/components/container";
import Hero from "@/components/hero";
import HomeNav from "@/components/home-nav";

const Home = () => {
  return (
    <div>
      <header>
        <HomeNav />
        <Container>
          <div className="pt-[36px]">
            <Hero />
          </div>
        </Container>
      </header>
    </div>
  );
};

export default Home;

// "use client";

// import React, { FC } from "react";
// import HomeNav from "@/components/home-nav";
// import Container from "@/components/container";
// import Hero from "@/components/hero";

// import { Box } from "@chakra-ui/react";

// const Home: FC<{ content?: { hero: any; features: any[] } }> = ({
//   content = {
//     features: [{ title: "default feature", body: "default body" }],
//     hero: { title: "default title", body: "default body" },
//   },
// }) => {
//   return (
//     <Box>
//       <header>
//         <HomeNav />
//         <Container>
//           <Hero content={content.hero} />
//         </Container>
//       </header>
//       <footer>
//         <Box background="overlay" paddingY={majorScale(9)} maxWidth="100vw">
//           <Container>Footer</Container>
//         </Box>
//       </footer>
//     </Box>
//   );
// };

// /**
//  * Should really get this content from our CMS
//  */

// // Home.defaultProps = {
// //   content: {
// //     features: [{ title: "default feature", body: "default body" }],
// //     hero: { title: "default title", body: "default body" },
// //   },
// // };

// export default Home;
