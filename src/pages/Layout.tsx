import Navbar from "@/components/Navbar";
import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Box
        position="sticky"
        top={0}
        padding={2}
        paddingBottom={{
          base: 4,
          md: 6,
        }}
        zIndex={1000}
        bg={"var(--chakra-colors-bg)"}
      >
        <Navbar />
      </Box>
      <Box padding={5}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
