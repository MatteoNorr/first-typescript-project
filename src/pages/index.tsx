import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import Todos from "@/components/Todos";
import DefaultLayout from "@/components/DefaultLayout";
import { useState } from "react";

export default function Home() {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  return (
    <>
      <Head>
        <title>Quick todos</title>
        <meta name="description" content="Quick todo list online" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <DefaultLayout isLogged={isLogged} setIsLogged={setIsLogged}>
          <Todos isLogged={isLogged} />
        </DefaultLayout>
      </main>
    </>
  );
}
