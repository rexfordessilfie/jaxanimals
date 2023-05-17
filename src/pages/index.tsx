import { type NextPage } from "next";
import Head from "next/head";

import { api } from "~/utils/api";

import { Header } from "~/components/ui/Header";
import { Hero } from "~/components/index/Hero";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>JaxAnimals</title>
        <meta
          name="description"
          content="Browse listings of the lost and found pets of Jacksonville, FL"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
    </>
  );
};

export default Home;
