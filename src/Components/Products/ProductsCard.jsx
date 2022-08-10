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
import "./Products.css";

const ProductsCard = ({ product }) => {
  return (
    <Card
      sx={{
        borderRadius: "20px",
        width: "300px",
        height: "430px ",
        marginBottom: "50px",
      }}
    >
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
        height="150px"
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
  );
};

export default ProductsCard;
