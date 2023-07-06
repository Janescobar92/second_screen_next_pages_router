import "../styles/globals.css";
import type { AppProps } from "next/app";

import {
  Background,
  ServiceWorkerComponent,
  WebSocketComponent,
} from "./components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Background />
      <ServiceWorkerComponent />
      <WebSocketComponent
        config={{
          COMPANY: "aurgi",
          WS_ROOM: "secon_screen",
          WS_SERVER_PORT: "8080",
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
