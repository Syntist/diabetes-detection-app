
import { Box, Typography } from "@mui/material";
import { FileUpload } from "./components/FileUpload";

export default function Home() {
  return (
    <Box>
      <Box textAlign={"center"}>
        <Typography variant="h2">Diabetes Detection</Typography>
      </Box>
      <FileUpload />
    </Box>
  );
}
