import { Box } from "@mui/material";

const Footer = ({ children }) => {
  return (
    <Box
      sx={{
        boxShadow: "0px -4px 10px rgba(85, 22, 170, 0.1)",
        width: "100%",
        position: "absolute",
        bottom: "0",
        left: "0",
      }}
    >
      {children}
    </Box>
  );
};

export default Footer;
