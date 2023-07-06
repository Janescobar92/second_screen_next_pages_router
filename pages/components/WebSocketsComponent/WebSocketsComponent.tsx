"use client";

import { useEffect, useRef } from "react";
import { Socket, io } from "socket.io-client";
import { Config } from "../../interfaces";

interface Props {
  config: Config;
}

function WebSocketComponent(props: Props) {
  const { config } = props;
  const { WS_SERVER_PORT: endpoint, WS_ROOM: room } = config;
  const ws = useRef<null | Socket>(null);

  const handleConnect = (s: Socket) => {
    ws.current = s;
    ws.current?.on("connect", () => {
      console.log("Connected to WebSocket server");
      ws.current?.emit("register_client_in_room", room);
    });
  };

  // const handleSendMsg = () => {
  //   if (ws.current) {
  //     ws.current.emit("restart_server", { data: "data test" });
  //   }
  // };

  const handleReadMsg = () => {
    console.log("INSIDE READ");
    if (ws.current) {
      ws.current.on("second_screen_sample_event", (data) => {
        const payload = JSON.parse(data);
        console.log(`Recived data from ${payload.transmitter}`, { payload });
      });
    }
  };

  useEffect(() => {
    const socket = io(endpoint, { autoConnect: true });
    handleConnect(socket);
    handleReadMsg();

    return () => {
      ws.current?.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div id="web-sockets-component" style={{ display: "none" }} />;
}

export default WebSocketComponent;
