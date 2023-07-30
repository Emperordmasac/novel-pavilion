"use client";

import React, { FC } from "react";
import { Pane, majorScale } from "evergreen-ui";
import HomeNav from "@/components/home-nav";
import Container from "@/components/container";
import Hero from "@/components/hero";

const Home: FC<{ content?: { hero: any; features: any[] } }> = ({
  content = {
    features: [{ title: "default feature", body: "default body" }],
    hero: { title: "default title", body: "default body" },
  },
}) => {
  return (
    <Pane>
      <header>
        <HomeNav />
        <Container>
          <Hero content={content.hero} />
        </Container>
      </header>
      <footer>
        <Pane background="overlay" paddingY={majorScale(9)} maxWidth="100vw">
          <Container>Footer</Container>
        </Pane>
      </footer>
    </Pane>
  );
};

/**
 * Should really get this content from our CMS
 */

// Home.defaultProps = {
//   content: {
//     features: [{ title: "default feature", body: "default body" }],
//     hero: { title: "default title", body: "default body" },
//   },
// };

export default Home;
