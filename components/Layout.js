
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>

      <Head>
        <title> LTH`s Portfolio</title>
      </Head>
      <div>{children}</div>
    </>
  );
}
