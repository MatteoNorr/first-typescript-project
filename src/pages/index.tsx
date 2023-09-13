import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import Todos from "@/components/Todos";

export default function Home() {
  return (
    <>
      <Head>
        <title>Quick todos</title>
        <meta name="description" content="Quick todo list online" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <span>Q</span>uick <span>T</span>odos
        </h1>
        <Todos />
      </main>
    </>
  );
}
