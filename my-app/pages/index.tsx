import type { NextPage } from "next";
import { ButtonSample } from "../components/Button";
import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";
import { Header } from "../components/AppBar";
import { TemporaryDrawer } from "../components/Drawer";
import { LineChart } from "../components/Chart";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <LineChart />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
