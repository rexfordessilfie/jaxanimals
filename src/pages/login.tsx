import { type NextPage } from "next";
import Head from "next/head";
import { Header } from "~/components/ui/Header";
import { BsGoogle } from "react-icons/bs";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { Button } from "~/components/ui/Button";
import Google from "next-auth/providers/google";

const LoginPage: NextPage = () => {
  const { data: sessionData, status } = useSession();
  const { push } = useRouter();

  if (status === "loading") {
    return <h1>Checking authentication...</h1>;
  }

  if (sessionData) {
    setTimeout(() => {
      () => void push("/");
    }, 5000);

    return <h1>You are already signed in!</h1>;
  }

  const handleLogin = async () => {
    await signIn("google", { callbackUrl: "https://localhost:3000" });
  };

  return (
    <>
      <Head>
        <title>Login | JaxAnimals</title>
        <meta
          name="description"
          content="Browse listings of the lost and found pets of Jacksonville, FL"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header loggingIn={true} />
      <main className="text-primary-content -mt-[4rem] grid h-screen place-items-center items-center pt-20">
        <div className="container flex flex-col items-center justify-center px-4 ">
          <p className="mb-2 text-5xl font-extrabold">
            We currently only support Google log ins.
          </p>
          <p className="text-2xl italic opacity-70">
            We are working on adding more log in features.
          </p>
          <p className="text-2xl italic opacity-70">
            Thank you for your patience.
          </p>
          <Button
            onClick={handleLogin}
            className="mt-10 h-16 gap-2 px-16 text-2xl"
          >
            <BsGoogle />
            Sign in with Google
          </Button>
        </div>
      </main>
    </>
  );
};

export default LoginPage;
