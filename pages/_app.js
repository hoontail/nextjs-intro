import styled from "styled-components";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />

      <span> hello</span>
    </>
  );
}

