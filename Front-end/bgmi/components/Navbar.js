import Link from "next/link";
import { useState, useEffect } from 'react';
import Image from "next/image";
import Head from 'next/head'


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const shouldBeScrolled = currentScrollY > 300;
      setIsScrolled(shouldBeScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const mobileSize = 767;
      const currentWidth = window.innerWidth;
      const shouldBeMobile = currentWidth <= mobileSize;
      setIsMobile(shouldBeMobile);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navbarClassName = `navbar ${isScrolled ? 'scrolled' : ''}`;
  const blogNavbarClassName = `blog_navbar ${isScrolled ? 'scrolled' : ''}`;

  const toggleButton = isMobile ? (
    <button className="navbar_toggle" onClick={() => setIsOpen(!isOpen)}>
                      <a><i className="material-icons">menu</i></a>

    </button>
  ) : null;

  const links = isMobile ? (
    <ul className={`navbar_menu ${isOpen ? 'is-active' : ''}`}>
      <li>
        <Link className="navbar_link" href="/">Home</Link>
      </li>
      <li>
        <Link className="navbar_link" href="/about">About</Link>
      </li>
      <li>
        <Link className="navbar_link" href="/blog" >Blog</Link>
      </li>
      <li>
        <Link className="navbar_link" href="/contact" >Contact</Link>
      </li>
    </ul>
  ) : (
    <ul className="navbar_links">
      <li>
        <Link className="navbar_link" href="/">Home</Link>
      </li>
      <li>
        <Link className="navbar_link" href="/about">About</Link>
      </li>
      <li>
        <Link className="navbar_link" href="/blog" >Blog</Link>
      </li>
      <li>
        <Link className="navbar_link" href="/contact" >Contact</Link>
      </li>
    </ul>
  );

  return (
    <div className={blogNavbarClassName}>
       <Head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>
      <div className="logo">
        <Link href="/" >
          <Image 
            src='/Logo.webp'
            alt="My Image"
            width={150}
            height={100}
          />
        </Link>
        <Link href='/' style={{ textDecoration:"none"}}>
          <h1 className="navbar_heading">Name Generator</h1>
        </Link>
      </div>
      <div className={navbarClassName}>
        <nav>
          {toggleButton}
          {links}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
