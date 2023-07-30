import React, { FC } from "react";
import { Pane, majorScale, Text } from "evergreen-ui";
import NextLink from "next/link";
import Container from "./container";
import Logo from "./logo";
import User from "./user";

const HomeNav: FC<{ links?: { name: string; link: string }[] }> = ({
  links,
}) => {
  return (
    <nav>
      <Pane
        width="100vw"
        paddingY={majorScale(1)}
        borderBottom
        height={majorScale(9)}
      >
        <Container height="100%" paddingX="40px">
          <Pane
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            height="100%"
          >
            <Logo />

            <Pane
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              {links && links.length > 0
                ? links.map((link) => (
                    <Pane paddingX={majorScale(3)} key={link.name}>
                      <NextLink href={`${link.link}`}>
                        <Text fontSize="16px">{link.name}</Text>
                      </NextLink>
                    </Pane>
                  ))
                : null}
              <Pane paddingX={majorScale(3)}>
                <User />
              </Pane>
            </Pane>
          </Pane>
        </Container>
      </Pane>
    </nav>
  );
};

HomeNav.defaultProps = {
  links: [
    { name: "Series", link: "/novels" },
    { name: "Bookmarks", link: "/bookmark" },
    { name: "Resources", link: "/resources" },
  ],
};

export default HomeNav;
