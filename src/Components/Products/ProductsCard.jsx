import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { red } from "@mui/material/colors";
import React from "react";
import { Link } from "react-router-dom";

const ProductsCard = ({ product }) => {
  return (
    <Grid item xs={4}>
      <Card>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              I
            </Avatar>
          }
          title={product.title}
          subheader={`${product.price} сом`}
        />
        <CardMedia
          component="img"
          height="auto"
          image={product.image}
          alt={product.title}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing sx={{ justifyContent: "space-around" }}>
          <IconButton aria-label="add to fav">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="add to cart">
            <AddShoppingCartIcon />
          </IconButton>
          <Button variant="outlined">
            <Link to={`/details/${product.id}`}>Подробнее</Link>
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductsCard;
