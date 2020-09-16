import React, { Component } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { useRouter } from "next/router";
import Header from "./Header";
import Meta from "./Meta";

const theme = {
  white: "#fff",
  red: "#dc392d",
  black: "#393939",
  grey: "#3A3A3A",
  lightgrey: "#E1E1E1",
  offWhite: "rgba(226, 232, 240, .50)",
  maxWidth: "87.5vw",
  lightBlue: "#4bb7dd",
  lighttan: "#f4ede4",
  tan: "#f1e7db",
  brown: "#4a5568",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)",
};

const StyledPage = styled.div`
  background: ${(props) => (props.active ? "#fff" : props.theme.offWhite)};
  color: ${(props) => props.theme.black};
  /* background-image: "url('https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm21-smoke-bb-5_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=c8347a73d6427dda5d03bd1100c39354')"; */
`;

const Inner = styled.div`
  margin: 0 auto;
  /* padding: 5rem; */
  padding-top: 0rem;
`;

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 1;
    /* font-family: 'radnika_next'; */
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
  /* button {  font-family: 'radnika_next'; } */
`;

function Page(props) {
  let router = useRouter();
  console.log(router.pathname);

  return (
    <ThemeProvider theme={theme}>
      {router && (
        <StyledPage
        // active={router.pathname === "/" || router.pathname === "/items"}
        >
          <GlobalStyles />
          <Meta />

          <Header />

          <Inner>{props.children}</Inner>
        </StyledPage>
      )}
    </ThemeProvider>
  );
}

export default Page;
export { StyledPage, GlobalStyles };
