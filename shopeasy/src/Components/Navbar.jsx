import "./Styles/Navbar.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiSearch, FiHeart } from "react-icons/fi";
import { RiContactsLine } from "react-icons/ri";
import { useContext, useRef, useState } from "react";
import { Box, Button, useDisclosure } from "@chakra-ui/react";
import CartPage from "./Pages/CartPage";
import Login from "./Pages/Login";
import { AuthContext } from "./Context/AuthContext";
import logo from ".././project_logo.png";
export const Navbar = () => {
  const [ishover, setHover] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { token, logoutUser } = useContext(AuthContext);
  console.log(token, "navbar");

  const btnRef = useRef();

  const handleCart = () => {};
  const logouter = () => {};
  const isHOvered = () => {
    setHover(true);
  };
  const removeHover = () => {
    setHover(false);
  };

  return (
    <>
      <div className="NavbarContainer-1">
        <div className="Navbar-11">
          <div className="Navbar-12">
            <div className="Searchlogo">
              {" "}
              <FiSearch />{" "}
            </div>
            <input
              className="Navbar-13"
              type="text"
              placeholder="Search SEPHORA"
            />
          </div>
          <div className="Navbar-14">
            <Link className="Navbar-15" to={`/`}>
              <div className="Navbar-15">
                <img src={logo} alt="logo" />
              </div>
            </Link>
          </div>
          <div className="Navbar-16">
            <div className="Navbar-17">
              <li>
                <FiHeart fontSize={"22px"} />
              </li>
              <li>|</li>
              <li
                ref={btnRef}
                colorScheme="teal"
                onClick={onOpen}
                style={{ cursor: "pointer" }}
              >
                <HiOutlineShoppingBag fontSize={"22px"} />
                <CartPage
                  btnRef={btnRef}
                  isOpen={isOpen}
                  onOpen={onOpen}
                  onClose={onClose}
                />
              </li>
              <li>|</li>

              <Link to={`/login`}>
                <span id="adjustment1">
                  <li>
                    <RiContactsLine fontSize={"22px"} />
                  </li>
                </span>
              </Link>

              <div
                style={{
                  color: "rgb(255,51,153)",
                  cursor: "pointer",
                  fontWeight: "500",
                }}
              >
                {!token ? (
                  <Link to={`/login`}>Login</Link>
                ) : (
                  <Box onClick={logoutUser}>Jeevan</Box>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="NavbarContainer-2">
        <div className="header--left">
          <ul>
            <li
              className="nav-hover "
              onMouseOver={isHOvered}
              onMouseOut={removeHover}
            >
              <Link to={`/`}>
                <a className="heading1" href="">
                  SALE
                </a>
              </Link>
            </li>
            <li
              className="nav-hover"
              onMouseOver={isHOvered}
              onMouseOut={removeHover}
            >
              <Link to={`/mackupproduct`}>
                <a href="" className="heading">
                  MAKEUP
                </a>
              </Link>
              <div className={`${ishover ? "hovered" : "hover"} hover`}>
                <div className="hover--navbar">
                  <div>
                    <ul>
                      <li className="first">
                        <a href="">FACE</a>
                      </li>
                      <li>
                        <a href="/products">Foundation</a>
                      </li>
                      <li>
                        <a href="/products">BB & CC Cream</a>
                      </li>
                      <li>
                        <a href="/products">Concealer</a>
                      </li>
                      <li>
                        <a href="/products">Face Primer</a>
                      </li>
                      <li>
                        <a href="/products">Highlighter</a>
                      </li>
                      <li>
                        <a href="/products">Makeup Palette</a>
                      </li>
                      <li>
                        <a href="/products">Face Brushes</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    {/* <h5>	EYE</h5> */}
                    <ul>
                      <li className="first">
                        <a href="">EYE</a>
                      </li>
                      <li>
                        <a href="/products">Eye Palettes</a>
                      </li>
                      <li>
                        <a href="/products">Mascara</a>
                      </li>
                      <li>
                        <a href="/products">Eyeliner</a>
                      </li>
                      <li>
                        <a href="/products">Eyebrow</a>
                      </li>
                      <li>
                        <a href="/products">Eyeshadowr</a>
                      </li>
                      <li>
                        <a href="/products">Eye Primer</a>
                      </li>
                      <li>
                        <a href="/products">Eye Brushes</a>
                      </li>
                      <li>
                        <a href="/products">Contact Lenses</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    {/* <h5>LIP</h5> */}
                    <ul>
                      <li className="first">
                        <a href="/products">LIP</a>
                      </li>
                      <li>
                        <a href="/products">Lip Stain</a>
                      </li>
                      <li>
                        <a href="/products">Lipstick</a>
                      </li>
                      <li>
                        <a href="/products">Lip Gloss</a>
                      </li>
                      <li>
                        <a href="/products">Lip Liner</a>
                      </li>
                      <li>
                        <a href="/products">Lip Balm & Treatment</a>
                      </li>
                      <li>
                        <a href="/products">Lip Brushes </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    {/* <h5>CHEEK</h5> */}
                    <ul>
                      <li className="first">
                        <a href="/products">CHEEK</a>
                      </li>
                      <li>
                        <a href="/products">Blush</a>
                      </li>
                      <li>
                        <a href="/products">Bronzer</a>
                      </li>
                      <li>
                        <a href="/products">Highlighter</a>
                      </li>
                      <li>
                        <a href="/products">Face Oils</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    {/* <h5>NAIL MAKEUP</h5> */}
                    <ul>
                      <li className="first">
                        <a href="/products">NAIL MAKEUP </a>
                      </li>
                      <li>
                        <a href="/products">Nail Polish</a>
                      </li>
                      <li>
                        <a href="/products">Nail Care</a>
                      </li>
                      <li>
                        <a href="/products">Highlighter</a>
                      </li>
                      <li>
                        <a href="/products">Manicure Tools</a>
                      </li>
                      <li>
                        <a href="/products">Pedicure Tools</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li
              className="nav-hover"
              onMouseOver={isHOvered}
              onMouseOut={removeHover}
            >
              <Link to={`/skinproduct`}>
                <a className="heading" href="/products">
                  SKINCARE
                </a>
              </Link>
              <div className={`${ishover ? "hovered" : "hover"} hover`}>
                <div className="hover--navbar">
                  <div>
                    {/* <h5>FACE</h5> */}
                    <ul>
                      <li className="first">
                        <a href="/products">FACE</a>
                      </li>
                      <li>
                        <a href="/products">Foundation</a>
                      </li>
                      <li>
                        <a href="/products">BB & CC Cream</a>
                      </li>
                      <li>
                        <a href="/products">Concealer</a>
                      </li>
                      <li>
                        <a href="/products">Face Primer</a>
                      </li>
                      <li>
                        <a href="/products">Highlighter</a>
                      </li>
                      <li>
                        <a href="/products">Makeup Palette</a>
                      </li>
                      <li>
                        <a href="/products">Face Brushes</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li className="first">
                        <a href="/products">EYE </a>
                      </li>
                      <li>
                        <a href="/products">Eye Palettes</a>
                      </li>
                      <li>
                        <a href="/products">Mascara</a>
                      </li>
                      <li>
                        <a href="/products">Eyeliner</a>
                      </li>
                      <li>
                        <a href="/products">Eyebrow</a>
                      </li>
                      <li>
                        <a href="/products">Eyeshadowr</a>
                      </li>
                      <li>
                        <a href="/products">Eye Primer</a>
                      </li>
                      <li>
                        <a href="/products">Eye Brushes</a>
                      </li>
                      <li>
                        <a href="/products">Contact Lenses</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    {/* <h5>LIP</h5> */}
                    <ul>
                      <li className="first">
                        <a href="/products">LIP</a>
                      </li>
                      <li>
                        <a href="/products">Lip Stain</a>
                      </li>
                      <li>
                        <a href="/products">Lipstick</a>
                      </li>
                      <li>
                        <a href="/products">Lip Gloss</a>
                      </li>
                      <li>
                        <a href="/products">Lip Liner</a>
                      </li>
                      <li>
                        <a href="/products">Lip Balm & Treatment</a>
                      </li>
                      <li>
                        <a href="/products">Lip Brushes </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    {/* <h5>CHEEK</h5> */}
                    <ul>
                      <li className="first">
                        <a href="/products">CHEEK </a>
                      </li>
                      <li>
                        <a href="/products">Blush</a>
                      </li>
                      <li>
                        <a href="/products">Bronzer</a>
                      </li>
                      <li>
                        <a href="/products">Highlighter</a>
                      </li>
                      <li>
                        <a href="/products">Face Oils</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    {/* <h3>NAIL MAKEUP</h3> */}

                    <ul>
                      <li className="first">
                        <a href="/products">NAIL MAKEUP </a>
                      </li>
                      <li>
                        <a href="/products">Nail Polish</a>
                      </li>
                      <li>
                        <a href="/products">Nail Care</a>
                      </li>
                      <li>
                        <a href="/products">Highlighter</a>
                      </li>
                      <li>
                        <a href="/products">Manicure Tools</a>
                      </li>
                      <li>
                        <a href="/products">Pedicure Tools</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li
              className="nav-hover"
              onMouseOver={isHOvered}
              onMouseOut={removeHover}
            >
              <Link to={`/hairproduct`}>
                <a className="heading" href="/products">
                  FRAGRANCE
                </a>
              </Link>
              <div className={`${ishover ? "hovered1" : "hover"} hover`}>
                <div className="hover--navbar">
                  <div>
                    {/* <h5>WOMEN</h5> */}
                    <ul>
                      <li className="first">
                        <a href="/products">WOMEN </a>
                      </li>
                      <li>
                        <a href="/products">Perfume</a>
                      </li>
                      <li>
                        <a href="/products">Mists and Deodorants</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    {/* <h5>MEN</h5> */}
                    <ul>
                      <li className="first">
                        <a href="/products">MEN </a>
                      </li>
                      <li>
                        <a href="/products">Perfume</a>
                      </li>
                      <li>
                        <a href="/products">Body Sprays & Deodorant</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li
              className="nav-hover"
              onMouseOver={isHOvered}
              onMouseOut={removeHover}
            >
              <Link to={`/allhair`}>
                <a className="heading" href="">
                  HAIRCARE
                </a>
              </Link>
              <div className={`${ishover ? "hovered2" : "hover"} hover`}>
                <div className="hover--navbar">
                  <div>
                    {/* <h5>SHAMPOO & CONDITIONER</h5> */}
                    <ul>
                      <li className="first">
                        <a href="/products">SHAMPOO & CONDITIONER </a>
                      </li>
                      <li>
                        <a href="/products">Shampoo</a>
                      </li>
                      <li>
                        <a href="/products">Conditioner</a>
                      </li>
                    </ul>
                  </div>

                  <div>
                    {/* <h5>HAIR STYLING & TREATMENTS</h5> */}
                    <ul>
                      <li className="first">
                        <a href="/products">HAIR STYLING & TREATMENTS </a>
                      </li>
                      <li>
                        <a href="/products">Hair Spray & Styling Products</a>
                      </li>
                      <li>
                        <a href="/products">Hair Masks</a>
                      </li>
                      <li>
                        <a href="/products">Hair Clips</a>
                      </li>
                      <li>
                        <a href="/products">Hair Oil</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li
              className="nav-hover"
              onMouseOver={isHOvered}
              onMouseOut={removeHover}
            >
              <Link to={`/tools`}>
                <a className="heading" href="">
                  TOOLS & BRUSHES
                </a>
              </Link>
              <div className={`${ishover ? "hovered3" : "hover"} hover`}>
                <div className="hover--navbar">
                  <div>
                    {/* <h5>	BRUSHES</h5> */}
                    <ul>
                      <li className="first">
                        <a href="">BRUSHES </a>
                      </li>
                      <li>
                        <a href="">Eye Brushes</a>
                      </li>
                      <li>
                        <a href="">Face Brushes</a>
                      </li>
                      <li>
                        <a href="">Lip Brushes</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    {/* <h5>TOOLS</h5> */}
                    <ul>
                      <li className="first">
                        <a href="">TOOLS </a>
                      </li>
                      <li>
                        <a href="">Sponges & Applicators</a>
                      </li>
                      <li>
                        <a href="">Face Tools</a>
                      </li>
                      <li>
                        <a href="">Hair Clips</a>
                      </li>
                      <li>
                        <a href="">Sharpeners</a>
                      </li>
                      <li>
                        <a href="">Eyelash Curlers</a>
                      </li>
                      <li>
                        <a href="">Accessories</a>
                      </li>
                      <li>
                        <a href="">Brush Cleaners</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    {/* <h5>VEGAN</h5> */}
                    <ul>
                      <li className="first">
                        <a href="">VEGAN </a>
                      </li>
                      <li>
                        <a href="">Face Brushes</a>
                      </li>
                      <li>
                        <a href="">Eye Brushes</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li
              className="nav-hover"
              onMouseOver={isHOvered}
              onMouseOut={removeHover}
            >
              <Link to={`/about`}>
                <a className="heading" href="">
                  ABOUT
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="line"></div>
      </div>
    </>
  );
};
