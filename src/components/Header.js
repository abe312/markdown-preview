import React from 'react';
import { Navbar } from 'react-bootstrap';
const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="./logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          {'Markdown Previewer by               '}
          <a
            href="https://abhineet.me"
            target="_blank"
            class="text-light text-right"
          >
            @abe312
          </a>
        </Navbar.Brand>
      </Navbar>
      <br />
      <br />
    </>
  );
};

export default Header;
