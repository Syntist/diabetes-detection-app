"use client";

import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";

export const FileUpload = () => {
  const [file, setFile] = useState();
  const [response, setResponse] = useState();

  const submitHandler = () => {
    if (file) {
      axios
        .post(
          process.env.NEXT_PUBLIC_API + "check_diabetes",
          {
            file,
          },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((res) => {
          setResponse(res.data);
        });
    }
  };

  return (
    <Box mt={5} textAlign={"center"}>
      {file && <img height={200} src={URL.createObjectURL(file)} />}

      <Box mt={1}>
        <input
          type="file"
          style={{ paddingLeft: "160px", color: "transparent" }}
					accept="image/*"
          onInput={(e) => {
						setResponse()
						setFile(e.target.files[0])
					}}
        />
      </Box>
      <Box mt={3}>
        {!response && (
          <Button onClick={() => submitHandler()}>Process the Image</Button>
        )}
        {response && (
          <Box>
            <Typography variant="h5">{`This image is ${response.message}`}</Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};
