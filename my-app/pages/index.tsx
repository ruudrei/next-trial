import type { NextPage } from "next";
import { ButtonSample } from "../components/Button";
import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";
import { ButtonAppBar } from "../components/AppBar";

const Home: NextPage = () => {
  return (
    <>
      {/* <ButtonSample /> */}
      <ButtonAppBar />

      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
          <ButtonSample />
        </Grid>
        <Grid item xs={6} md={4}>
          test2
        </Grid>
        <Grid item xs={6} md={4}>
          test3
        </Grid>
        <Grid item xs={6} md={8}>
          test4
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
