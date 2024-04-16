import { useState } from "react";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { styled } from "@mui/material/styles";

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Button } from "react-bootstrap";

function valuetext(value) {
  return `${value}$`;
}
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));
const CartItems = ({ cart, removeFromCart }) => {
  if (cart.length === 0)
    return <p className="card-items">No items in the cart.</p>;

  return (
    <>
      <ul className="card-items mt-5 p-5" style={{ boxShadow: "0 0 2px #ccc" }}>
        {cart.map((item) => (
          <li
            key={item.id}
            className="mb-3 text-left d-flex justify-content-between"
          >
            <img src={item.img} width="30" alt="" />{" "}
            <p className="my-auto">
              {item.name} - ${item.price} <b>x {item.qty}</b>
            </p>
            <Button
              variant="danger"
              className="btn ms-3 p-2 my-auto bg-danger"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </Button>
          </li>
        ))}
        <li>
          <Button
            variant="success"
            className="d-block mx-auto text-center mt-30 bg-success"
          >
            checkout
          </Button>
        </li>
      </ul>
    </>
  );
};
function HomePage({ items }) {
  const [priceRange, setPriceRange] = useState([0, 30]);
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortKey, setSortKey] = useState("");

  const handleAddToCart = (item) => {
    setCart((prev) => {
      const exist = prev.find((x) => x.id === item.id);
      if (exist) {
        return prev.map((x) =>
          x.id === item.id ? { ...x, qty: x.qty + 1 } : x
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const handleRemoveFromCart = (id) => {
    setCart((prev) =>
      prev.reduce((acc, item) => {
        if (item.id === id) {
          if (item.qty === 1) return acc;
          return [...acc, { ...item, qty: item.qty - 1 }];
        }
        return [...acc, item];
      }, [])
    );
  };

  const filteredItems = items
    .filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        item.price >= priceRange[0] &&
        item.price <= priceRange[1]
    )
    .sort((a, b) => {
      if (sortKey === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortKey === "price") {
        return a.price - b.price;
      }
      return 0;
    });
  return (
    <>
      {" "}
      <header className="container col-12 d-flex justify-content-between">
        <img src="e2e.png" alt="logo" width="100" />
        <div className="card-container">
          <IconButton
            aria-label="cart"
            onClick={() => setShow(!show)}
            className="mt-10"
          >
            <StyledBadge badgeContent={cart.length} color="secondary">
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
          <div style={{ display: show ? "block" : "none" }}>
            {" "}
            <CartItems cart={cart} removeFromCart={handleRemoveFromCart} />
          </div>
        </div>{" "}
      </header>
      <section>
        <div className="container mt-5">
          <div className="col-12 col-lg-10 mx-auto">
            <input
              type="text"
              className="form-control mb-50"
              placeholder="Search by name..."
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="col-12 mx-auto d-flex flex-column flex-lg-row justify-content-between">
              <div className="d-flex py-25  ">
                <button
                  className="btn btn-secondary me-2  "
                  onClick={() => setSortKey("name")}
                >
                  Sort by Name
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => setSortKey("price")}
                >
                  Sort by Price
                </button>
              </div>

              <div className="d-flex flex-column flex-lg-row justify-content-lg-between">
                <p className="pb-50 pb-xs-0 pt-xs-30">Min Price: 0$</p>
                <Box sx={{ width: 300, margin: "auto" }}>
                  <Slider
                    getAriaLabel={() => "Price range"}
                    value={priceRange}
                    onChange={(event, newValue) => setPriceRange(newValue)}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    min={0}
                    max={30}
                  />
                </Box>
                <p className="pb-50">Max Price: 30$</p>
              </div>
            </div>
          </div>
          <ul className="list-group   mt-3 col-12 col-lg-10 mx-auto">
            {filteredItems.map((item) => (
              <li
                key={item.id}
                className="col-12 list-group-item flex-column flex-lg-row align-items-center p-0 d-flex justify-content-between "
              >
                <div style={{ borderRight: "1px solid #ccc" }}>
                  <img src={item.img} alt={item.name} width="200" />
                </div>
                <div className="col-6 my-auto   text-left">
                  {" "}
                  <h5>{item.name}</h5>
                  <p>{item.description}</p>
                  <p className="d-flex justify-content-lg-end pt-3 pb-3 pb-lg-0 fs-1">
                    <strong>${item.price}</strong>
                  </p>
                </div>
                <Button onClick={() => handleAddToCart(item)}>
                  Add to Cart
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default HomePage;
