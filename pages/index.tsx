import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";
import {
  CompanyLogo,
  MessageBox,
  Footer,
  Background,
  ServiceWorkerComponent,
  WebSocketComponent,
} from "./components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Pantalla Interactiva TPV</title>
        <meta name="description" content="Anjana TPV pantalla interactiva" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.grid}>
          <CompanyLogo />
          <MessageBox content="HOLA MUNDO" />
        </div>
        <Footer />
      </main>
    </>
  );
}
