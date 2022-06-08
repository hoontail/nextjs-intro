
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>

      <Head>
        <title>hoontail`s Portfolio</title>
      </Head>
      <div>{children}</div>
    </>
  );
}
