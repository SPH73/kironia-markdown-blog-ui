import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Dropdown, Image, Menu } from "semantic-ui-react";

const Navbar = () => (
  <div>
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item as="a" header>
          <Image size="mini" src="/logo.png" style={{ marginRight: "1.5em" }} />
          Kironia
        </Menu.Item>
        <NavLink to="/">
          <Menu.Item as="li">Home</Menu.Item>
        </NavLink>
        <NavLink to="/blog">
          <Menu.Item as="li">Blog</Menu.Item>
        </NavLink>
        <NavLink to="/events">
          <Menu.Item as="li">Events</Menu.Item>
        </NavLink>
        <NavLink to="/courses">
          <Menu.Item as="li">Courses</Menu.Item>
        </NavLink>
        <NavLink to="/lifestyle">
          <Menu.Item as="li">Lifestyle</Menu.Item>
        </NavLink>
        <Dropdown text="Shop" pointing className="link item">
          <Dropdown.Menu>
            <Dropdown.Header>Categories</Dropdown.Header>
            <Dropdown.Item>
              <Dropdown text="Nursery">
                <Dropdown.Menu>
                  <Dropdown.Header>Herbs</Dropdown.Header>
                  <Dropdown.Item>Type 1</Dropdown.Item>
                  <Dropdown.Item>Type 2</Dropdown.Item>
                  <Dropdown.Item>Type 3</Dropdown.Item>
                  <Dropdown.Item>Type 4</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Header>Herbal</Dropdown.Header>
                  <Dropdown.Item>Soap</Dropdown.Item>
                  <Dropdown.Item>Tea</Dropdown.Item>
                  <Dropdown.Item>Medicine</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Dropdown.Item>
            <Dropdown.Item>Home & Garden</Dropdown.Item>
            <Dropdown.Item>Health & Beauty</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Order</Dropdown.Header>
            <Dropdown.Item>Status</Dropdown.Item>
            <Dropdown.Item>Cancellations</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Item>Forums</Menu.Item>
        <Menu.Item>Contact Us</Menu.Item>
      </Container>
    </Menu>
  </div>
);

export default Navbar;
