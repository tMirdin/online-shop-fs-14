import { Container, Grid, Paper } from "@mui/material";
import React from "react";
import ProductsList from "../Products/ProductsList";
import Billboard from "./Billboard/Billboard";

const Home = () => {
  return (
    <div>
      <Billboard />
      <Grid item md={9}>
        <Paper>
          <Container>
            <ProductsList />
          </Container>
        </Paper>
      </Grid>
    </div>
  );
};

export default Home;
