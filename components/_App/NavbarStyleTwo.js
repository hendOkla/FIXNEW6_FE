import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import * as Icon from "react-feather";
import { useSelector } from "react-redux";

const NavbarStyleTwo = () => {
  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  // console.log(router.asPath)

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  const cart = useSelector((state) => state.cart);
  const [menu, setMenu] = React.useState(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  React.useEffect(() => {
    let elementId = document.getElementById("header");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <header id="header" className="headroom navbar-style-two">
        <div className="startp-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link href="/it-startup" className="navbar-brand">
                <img src="/images/logo.png" alt="logo" />
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <Link
                      href="/"
                      onClick={toggleNavbar}
                      className={`nav-link ${
                        currentPath == "/" && "active"
                      }`}
                    >
                      Home <Icon.ChevronDown />
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/" && "active"
                          }`}
                        >
                          IT Startup
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/it-startup-2/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/it-startup-2/" && "active"
                          }`}
                        >
                          IT Startup Two
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/iot/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/iot/" && "active"
                          }`}
                        >
                          IOT
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/hosting/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/hosting/" && "active"
                          }`}
                        >
                          Hosting
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/machine-learning/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/machine-learning/" && "active"
                          }`}
                        >
                          Machine Learning
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/machine-learning-2/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/machine-learning-2/" && "active"
                          }`}
                        >
                          Machine Learning 2
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/bigdata-analytics/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/bigdata-analytics/" && "active"
                          }`}
                        >
                          Bigdata Analytics
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/digital-agency/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/digital-agency/" && "active"
                          }`}
                        >
                          Digital Agency
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/digital-agency-portfolio/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/digital-agency-portfolio/" &&
                            "active"
                          }`}
                        >
                          Digital Agency Portfolio
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/pc-repair/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/pc-repair/" && "active"
                          }`}
                        >
                          PC Repair
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/about-1/"
                      onClick={toggleNavbar}
                      className={`nav-link ${
                        currentPath == "/about-1/" && "active"
                      }`}
                    >
                      About <Icon.ChevronDown />
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/about-1/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/about-1/" && "active"
                          }`}
                        >
                          About Style 1
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/about-2/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/about-2/" && "active"
                          }`}
                        >
                          About Style 2
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/about-3/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/about-3/" && "active"
                          }`}
                        >
                          About Style 3
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="nav-link"
                    >
                      Pages <Icon.ChevronDown />
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/features/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/features/" && "active"
                          }`}
                        >
                          Features <Icon.ChevronDown />
                        </Link>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link
                              href="/features/"
                              onClick={toggleNavbar}
                              className={`nav-link ${
                                currentPath == "/features/" && "active"
                              }`}
                            >
                              Features
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/feature-details/"
                              onClick={toggleNavbar}
                              className={`nav-link ${
                                currentPath == "/feature-details/" && "active"
                              }`}
                            >
                              Features Details
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/services-1/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/services-1/" && "active"
                          }`}
                        >
                          Services <Icon.ChevronDown />
                        </Link>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link
                              href="/services-1/"
                              onClick={toggleNavbar}
                              className={`nav-link ${
                                currentPath == "/services-1/" && "active"
                              }`}
                            >
                              Services Style 1
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/services-2/"
                              onClick={toggleNavbar}
                              className={`nav-link ${
                                currentPath == "/services-2/" && "active"
                              }`}
                            >
                              Services Style 2
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/services-3/"
                              onClick={toggleNavbar}
                              className={`nav-link ${
                                currentPath == "/services-3/" && "active"
                              }`}
                            >
                              Services Style 3
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/services-4/"
                              onClick={toggleNavbar}
                              className={`nav-link ${
                                currentPath == "/services-4/" && "active"
                              }`}
                            >
                              Services Style 4
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/services-5/"
                              onClick={toggleNavbar}
                              className={`nav-link ${
                                currentPath == "/services-5/" && "active"
                              }`}
                            >
                              Services Style 5
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/service-details/"
                              onClick={toggleNavbar}
                              className={`nav-link ${
                                currentPath == "/service-details/" && "active"
                              }`}
                            >
                              Services Details
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/feedback/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/feedback/" && "active"
                          }`}
                        >
                          Feedback
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/projects-1/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/projects-1/" && "active"
                          }`}
                        >
                          Projects <Icon.ChevronDown />
                        </Link>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link
                              href="/projects-1/"
                              onClick={toggleNavbar}
                              className={`nav-link ${
                                currentPath == "/projects-1/" && "active"
                              }`}
                            >
                              Project Style 1
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/projects-2/"
                              onClick={toggleNavbar}
                              className={`nav-link ${
                                currentPath == "/projects-2/" && "active"
                              }`}
                            >
                              Project Style 2
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/project-details/"
                              onClick={toggleNavbar}
                              className={`nav-link ${
                                currentPath == "/project-details/" && "active"
                              }`}
                            >
                              Project Details
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/team/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/team/" && "active"
                          }`}
                        >
                          Team
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/pricing/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/pricing/" && "active"
                          }`}
                        >
                          Pricing
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/login/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/login/" && "active"
                          }`}
                        >
                          User <Icon.ChevronDown />
                        </Link>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link
                              href="/login/"
                              onClick={toggleNavbar}
                              className={`nav-link ${
                                currentPath == "/login/" && "active"
                              }`}
                            >
                              Login
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/sign-up/"
                              onClick={toggleNavbar}
                              className={`nav-link ${
                                currentPath == "/sign-up/" && "active"
                              }`}
                            >
                              Sign Up
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/forgot-password/"
                              onClick={toggleNavbar}
                              className={`nav-link ${
                                currentPath == "/forgot-password/" && "active"
                              }`}
                            >
                              Forgot Password
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/faq/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/faq/" && "active"
                          }`}
                        >
                          FAQ's
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/coming-soon/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/coming-soon/" && "active"
                          }`}
                        >
                          Coming Soon
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/404/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/404/" && "active"
                          }`}
                        >
                          404 Error Page
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/shop/"
                      onClick={toggleNavbar}
                      className={`nav-link ${
                        currentPath == "/shop/" && "active"
                      }`}
                    >
                      Shop <Icon.ChevronDown />
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/shop/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/shop/" && "active"
                          }`}
                        >
                          Shop
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/checkout/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/checkout/" && "active"
                          }`}
                        >
                          Checkout
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/blog-1/"
                      onClick={toggleNavbar}
                      className={`nav-link ${
                        currentPath == "/blog-1/" && "active"
                      }`}
                    >
                      Blog <Icon.ChevronDown />
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/blog-1/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/blog-1/" && "active"
                          }`}
                        >
                          Blog Grid
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/blog-2/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/blog-2/" && "active"
                          }`}
                        >
                          Blog Right Sidebar
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/blog-3/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/blog-3/" && "active"
                          }`}
                        >
                          Blog Grid 2
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/blog-4/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/blog-4/" && "active"
                          }`}
                        >
                          Blog Right Sidebar 2
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/blog-5/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/blog-5/" && "active"
                          }`}
                        >
                          Blog Grid 3
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/blog-6/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/blog-6/" && "active"
                          }`}
                        >
                          Blog Right Sidebar 3
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/blog-details/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/blog-details/" && "active"
                          }`}
                        >
                          Blog Details
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/contact/"
                      onClick={toggleNavbar}
                      className={`nav-link ${
                        currentPath == "/contact/" && "active"
                      }`}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Others option */}
              <div className="others-option">
                <Link href="/cart/" className="cart-wrapper-btn">
                  <Icon.ShoppingCart />
                  <span>{cart.length}</span>
                </Link>

                <Link href="/contact/" className="btn btn-light">
                  Support
                </Link>

                <Link href="/login/" className="btn btn-primary">
                  Login
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavbarStyleTwo;
