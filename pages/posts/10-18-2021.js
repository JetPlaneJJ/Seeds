import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";
import { appTitle } from "../../constants";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>{appTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>{"My content is right here. Lorem Ispum Dorem."}</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}
