
import React from "react";
import { Link } from "react-router-dom";
// nodejs library that concatenates strings
import classnames from "classnames";

// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container, DropdownToggle, DropdownMenu, DropdownItem,
  Dropdown,
  Button,
} from "reactstrap";

function ExamplesNavbar(props) {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);
  const [isOpen, updateIsOpen] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar
      className={classnames("fixed-top", navbarColor)}
      color-on-scroll="300"
      expand="lg"
    >
      <Container>
        <div className="navbar-translate">

          <NavbarBrand
            md="4"
            to="/index"
            target="_blank"
            title="Coded by Creative Tim"
            tag={Link}
          >
            <a href="#/asdasd" onClick={(e) => e.preventDefault()}>
              <img
                width={75}
                height={75}
                alt="..."
                src={
                  require("./../../assets/img/logo.png")
                    .default
                }
              />
            </a>
          </NavbarBrand>


        </div>
        <Collapse
          className="justify-content-between"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              {/* <NavLink style={{ fontSize: 16 }} to="/index" tag={Link}>
                <i className="nc-icon nc-layout-11" /> ??????????
              </NavLink> */}
              <Dropdown
                {...props}
                className="comboRtl show"
                onMouseOver={() => updateIsOpen(true)}
                onFocus={() => updateIsOpen(true)}
                onMouseLeave={() => updateIsOpen(false)}
                onBlur={() => updateIsOpen(false)}
                toggle={() => updateIsOpen(!isOpen)}
                isOpen={isOpen}
              >
                <DropdownToggle caret>
                  ??????????
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem header>?????????? ????????</DropdownItem>
                  <DropdownItem> ?????????? ????????????</DropdownItem>
                  {/* <DropdownItem divider /> */}
                  <DropdownItem>????????????</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavItem>
            <NavItem>
              {/* <NavLink style={{ fontSize: 16 }}
                href="https://demos.creative-tim.com/paper-kit-react/#/documentation?ref=pkr-examples-navbar"
                target="_blank"
              >
                <i className="nc-icon nc-book-bookmark" /> ??????????
              </NavLink> */}
            </NavItem>
            <NavItem>
              <NavLink style={{ fontSize: 16 }} to="/index" tag={Link}>
                <i className="nc-icon nc-layout-11" /> ??????????
              </NavLink>
            </NavItem> <NavItem>
              <NavLink style={{ fontSize: 16 }} to="/index" tag={Link}>
                <i className="nc-icon nc-layout-11" /> ???????????? ????
              </NavLink>
            </NavItem> <NavItem>
              <NavLink style={{ fontSize: 16 }} to="/index" tag={Link}>
                <i className="nc-icon nc-layout-11" /> ???????? ???? ????
              </NavLink>
            </NavItem>


          </Nav>
        </Collapse>
        <div style={{ display: "flex" }} className="navbar-translate">


          <NavItem>
            <Button
              style={{ fontSize: 16 }}
              className="btn-round"
              color="danger"
              href="https://www.creative-tim.com/product/paper-kit-pro-react?ref=pkr-examples-navbar"
              target="_blank"
            >
              <i className="nc-icon nc-spaceship"></i> ?????? ??????
            </Button>
          </NavItem>
          <NavItem>
            <NavLink style={{ fontSize: 16 }} to="/index" tag={Link}>
              <i className="nc-icon nc-layout-11" />????????
            </NavLink>
          </NavItem>
        </div>
      </Container>
    </Navbar>
  );
}

export default ExamplesNavbar;
