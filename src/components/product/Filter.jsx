import React, { useEffect, useState } from "react";
import { useProducts } from "../context/ProductContextProvider";
import {
  Badge,
  Button,
  FormControl,
  Menu,
  MenuItem,
  Paper,
  RadioGroup,
  TextField,
  Tooltip,
} from "@mui/material";
import { Link, useSearchParams } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "../context/CartContextProvider";
import AddIcon from "@mui/icons-material/Add";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useFavorites } from "../context/FavoritesContext";

const Filter = () => {
  const { categories, getCategories, fetchByParams, getProducts } =
    useProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  const [anchorEl, setAnchor] = useState(null);
  const [badgeCount, setBadgeCount] = useState(0);
  const [favoriteCount, setFavoriteCount] = useState(0);
  const { addProductToCart, getProductsCountInCart } = useCart();
  const { getProductsCountInFavorites, addToFavorites } = useFavorites();

  useEffect(() => {
    setFavoriteCount(getProductsCountInFavorites);
  }, [addToFavorites]);

  useEffect(() => {
    setBadgeCount(getProductsCountInCart());
  }, [addProductToCart]);

  useEffect(() => {
    setSearchParams({
      q: search,
    });
    getProducts();
  }, [search]);
  useEffect(() => {
    getCategories();
  }, []);

  const handleFilterChange = (e) => {
    const selectedCategory = e.target.value;
    fetchByParams("category", selectedCategory);
  };

  const handleMenuOpen = (e) => {
    setAnchor(e.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchor(null);
  };

  const handleCategorySelect = (category) => {
    fetchByParams("category", category);
    handleMenuClose();
  };

  console.log(categories);
  return (
    <Paper
      sx={{ padding: 2, width: "250px", display: "flex", alignItems: "center" }}
      style={{ marginLeft: "38%", width: "293%" }}
    >
      <FormControl>
        <RadioGroup onChange={handleFilterChange}>
          <Button onClick={handleMenuOpen}>Категории</Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={() => handleCategorySelect("all")}>
              Все товары
            </MenuItem>
            {categories.map((elem) => (
              <MenuItem
                key={elem.id}
                onClick={() => handleCategorySelect(elem.name)}
              >
                {elem.name}
              </MenuItem>
            ))}
          </Menu>
        </RadioGroup>
      </FormControl>
      <Tooltip title="Найти товар">
        <TextField
          onChange={(e) => setSearch(e.target.value)}
          fullWidth
          variant="standard"
          label="Поиск..."
          sx={{
            marginLeft: "20px",
            marginTop: "-15px",
            flex: 1,
            "& .MuiInput-underline:before": { borderBottom: "none" },
          }}
        />
      </Tooltip>
      <Tooltip title="Перейти в избранные">
        <Link
          to="/favorites"
          style={{ marginLeft: "20px", textDecoration: "none" }}
        >
          <Badge badgeContent={favoriteCount} color="success">
            <FavoriteIcon />
          </Badge>
        </Link>
      </Tooltip>
      <Tooltip title="Добавить товар">
        <Link
          to="/products"
          style={{ marginLeft: "20px", textDecoration: "none" }}
        >
          <AddIcon />
        </Link>
      </Tooltip>
      <Tooltip title="Перейти в корзину">
        <Link to="/cart" style={{ marginLeft: "20px", textDecoration: "none" }}>
          <Badge badgeContent={badgeCount} color="success">
            <ShoppingCartIcon />
          </Badge>
        </Link>
      </Tooltip>
    </Paper>
  );
};

export default Filter;
