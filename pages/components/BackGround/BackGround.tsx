"use client";
import { styled } from "@mui/material";
import useCompanyAssets from "../../Hooks/useCompanyAssets";

import { AppThemeProvider } from "../../providers";


const StyledBackground = styled("div", {
  shouldForwardProp: (prop) => prop !== "imageUrl",
})<{ imageUrl: string }>(({ imageUrl }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundSize: "cover",
  backgroundPosition: "center",
  pointerEvents: "none",
  zIndex: -99999,
  backgroundImage: `url(${imageUrl})`,
}));

function Background() {
  const { backgroundImage } = useCompanyAssets();

  return (
    <AppThemeProvider>
      <StyledBackground imageUrl={backgroundImage} />
    </AppThemeProvider>
  );
}

export default Background;
