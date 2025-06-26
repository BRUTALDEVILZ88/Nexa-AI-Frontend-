import { Box, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import TypingAnim from "../components/typer/TypingAnim";
import Footer from "../components/footer/Footer";
import CardCarousel from "../components/CardCarousel";
import GradientButton from "../components/GradientButton";

const Home = () => {
  const theme = useTheme();
  const isBelowMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box width="100%" height="100%">
      {/* Hero Section */}
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
          mt: 8,
          px: 2,
        }}
      >
        <Box
          sx={{
            fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
            fontWeight: 700,
            color: "white",
            lineHeight: 1.2,
          }}
        >
          Get answers. <br />
          Find inspiration. <br />
          Talk Smart. Talk Nexa-AI
        </Box>

        <Box
          sx={{
            color: "#cfcfcf",
            mt: 3,
            fontSize: { xs: "0.95rem", md: "1.1rem" },
          }}
        >
          Free to use. Easy to try. Just ask Nexa-AI and get help with writing,
          learning, brainstorming, and more.
        </Box>

        <Box sx={{ mt: 5 }}>
          <GradientButton to="/login" text="Get Started For Free" />
        </Box>
      </Box>

      {/* ✅ Carousel Section */}
      <Box width="100%" mt={5} mb={5}>
        <CardCarousel />
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
