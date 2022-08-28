import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import {
  Badge,
  Button,
  Container,
  Dropdown,
  FormControl,
  Nav,
  Navbar,
  Col,
} from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { CartState } from "../context/Context";

import "./styles.css";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContextProvider";
const Header = () => {
  const {
    state: { cart },
    dispatch,
    productDispatch,
  } = CartState();
  const { dispatchDark } = useContext(DarkModeContext);
  return (
    <>
      <Navbar style={{ height: 80 }}>
        <Container>
          <Navbar.Brand href="/">
            <span>Shopping Cart</span>
          </Navbar.Brand>
          {useLocation().pathname.split("/")[1] !== "cart" && (
            <Navbar.Text className="search">
              <FormControl
                style={{ width: 500 }}
                type="search"
                placeholder="Search a product..."
                className="m-auto"
                aria-label="Search"
                onChange={(e) => {
                  productDispatch({
                    type: "FILTER_BY_SEARCH",
                    payload: e.target.value,
                  });
                }}
              />
            </Navbar.Text>
          )}

          <Nav>
            <Dropdown>
              <Dropdown.Toggle variant="success">
                <FaShoppingCart  fontSize="25px" />
                <Badge >{cart.length}</Badge>
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ minWidth: 370 }}>
                {cart.length > 0 ? (
                  <>
                    {cart.map((prod) => (
                      <span className="cartitem" key={prod.id}>
                        <img
                          src={prod.image}
                          className="cartItemImg"
                          alt={prod.name}
                        />
                        <div className="cartItemDetail">
                          <span>{prod.name}</span>
                          <span>$ {prod.price.split(".")[0]}</span>
                        </div>
                        <AiFillDelete
                          fontSize="20px"
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: prod,
                            })
                          }
                        />
                      </span>
                    ))}
                    <Link to="/cart">
                      <Button style={{ width: "95%", margin: "0 10px" }}>
                        Go To Cart
                      </Button>
                    </Link>
                  </>
                ) : (
                  <span style={{ padding: 10 }}>Cart is Empty!</span>
                )}
              </Dropdown.Menu>
            </Dropdown>
            <DarkModeOutlinedIcon
              className="icon"
              fontSize="large"
              onClick={() => {
                dispatchDark({ type: "TOGGLE" });
              }}
              style={{ cursor: "pointer" }}
            />
          </Nav>
        </Container>
      </Navbar>
      <Col md={12} className="media">
        <FormControl
          type="search"
          placeholder="Search a product..."
          className="m-auto "
          aria-label="Search"
          onChange={(e) => {
            productDispatch({
              type: "FILTER_BY_SEARCH",
              payload: e.target.value,
            });
          }}
        />
      </Col>
    </>
  );
};

export default Header;
