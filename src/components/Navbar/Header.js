import { Link } from "gatsby"
import React, { useState, useEffect, useRef } from "react"
import logo  from '../../images/header/logo.png';
import {  Navbar, Nav, Container,  NavItem } from 'react-bootstrap';
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import style from './Header.module.css';
import {  Person } from '@material-ui/icons';
import cx from 'classnames';
export const Header = () => {
  const [navBackground, setNavBackground] = useState(false);
  const navRef = useRef();
  navRef.current = navBackground
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50
      if (navRef.current !== show) {
        setNavBackground(show)
      }
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])
    return (
        <header id="header"  className={cx(style.bg, navBackground? style.uponscroll: style.defaultscroll)} >
    <Container >
    <Navbar className={style.bg} expand="lg">
      <Navbar.Brand className={style.navbrand}>
       <Link to="/home"> <img src={logo} className={style.logo} alt="logo" /></Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarResponsive" />
      <NavbarCollapse id="navbarResponsive">
        <Nav as="ul"  className={cx("mr-auto", style.ulelements)}>
          <Nav.Item as="li" >
            <Link to="/" className={cx("nav-link", style.lielements)} activeClassName="active">Home</Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="/page" className={cx("nav-link", style.lielements)} activeClassName="active">Courses</Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="/page" className={cx("nav-link", style.lielements)}activeClassName="active">Pages</Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="/page" className={cx("nav-link", style.lielements)} activeClassName="active">ShortCodes</Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="/page" className={cx("nav-link", style.lielements)} activeClassName="active">Blog</Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="/page" className={cx("nav-link", style.lielements)} activeClassName="active">Gallery</Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="/page" className={cx("nav-link", style.lielements)} activeClassName="active">Shop</Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="/page" className={cx("nav-link", style.lielements)} activeClassName="active">Content</Link>
          </Nav.Item>
        </Nav>
        <Nav as="ul" className={cx(style.login, style.ulelements)}>
        <NavItem as="li">
        <Link  to="/page" className={cx("nav-link", style.lielements)} activeClassName="active"><Person />  <span className={style.loginreg}>Login | Register</span></Link>
        </NavItem>
    </Nav>
      </NavbarCollapse>
    </Navbar>
    </Container>
  </header>
    )
}
export default Header;