import React from "react";
import Head from "next/head";
import Menu from "./Menu";
import Link from "next/link";

import styled from "styled-components";
import tw from "twin.macro";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Spotify Profile</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className="py-15p bg-black77-light w-full text-white relative"
        style={{ height: "100vh" }}
      >
        <Menu />
        {children}
      </main>

      <Styled.Footer>
        <Link href="https://mahmoodkhan.me">
          <a target="_blank" rel="noopener noreferrer">
            ⚡<div className="inline -m-2 p-1">K77</div>
          </a>
        </Link>
      </Styled.Footer>
    </div>
  );
};

const Styled = {
  Footer: styled.footer`
    ${tw`bg-black w-full text-white text-center p-2 grid place-items-center fixed bottom-0 md:hidden`}
  `,
};

export default Layout;
