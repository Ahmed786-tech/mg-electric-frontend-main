import React, { useRef, useState, useEffect } from "react";
import Logo from "../../assets/svgs/logo.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import IsolationMode1 from "@/assets/images/IsolationMode1.png";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const closeTimeoutRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsSticky(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isSticky) {
      document.body.style.paddingTop = '140px';
    } else {
      document.body.style.paddingTop = '0';
    }

    return () => {
      document.body.style.paddingTop = '0';
    };
  }, [isSticky]);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const goToHome = () => {
    navigate("/");
  };

  return (
    <>
      <style>
        {`
          .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1rem 1rem;
            background-color: white;
            width: 1240px;
            height: 122px;
            flex-shrink: 0;
            border-radius: 20px;
            background: #FFF;
            box-shadow: 0px 7px 4px 0px rgba(16, 89, 147, 0.70);
          }
          
          .logo-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            
          }

          .nav {
            flex: 1;
            display: flex;
            justify-content: center;
            font-size: 1.1rem;
          }
          
.nav-list {
  display: flex;
  flex-wrap: nowrap;
  gap: 3rem;
  list-style: none;
  white-space: nowrap;
}

          
          .nav-item {
            color: black;
            position: relative;
          }
          
          .nav-link {
            display: flex;
            height: 28px;
            justify-content: center;
            align-items: center;
            flex-shrink: 0;
            font-weight:400;
          }
          
          .nav-link:hover {
            color: #01B8FF;
            text-decoration: underline;
          }
          
          .dropdown {
            position: absolute;
            left: 0;
            margin-top: 0.5rem;
            width: 24rem;
            background-color: white;
            border: 1px solid #e5e7eb;
            border-radius: 20px;
            background: #FFF;
            box-shadow: 0px 7px 4px 0px rgba(16, 89, 147, 0.70);
            padding: 1rem 0;
          }
          
          .dropdown-item {
            display: block;
            width: fit-content;
            margin-top: -0.85rem;
            padding: 20px 2rem;
            width: 100%;
            border-radius: 50px;
            color: #374151;
            text-decoration: none;
          }
          
          .dropdown-item:hover {
            background-color: #eff6ff;
          }
          
          .contact-button {
            color: black;
            font-weight: 600;
            padding: 0.5rem 1.5rem;
            border-radius: 50px;
            border: none;
            cursor: pointer;
            background: linear-gradient(180deg, #01B8FF 0%, #3E99BC 100%);
          }
          
          .contact-button:hover {
            opacity: 0.9;
          }
          
          .contact-button-text {
            color: #000;
          }
          
          .header-wrapper {
            padding-top: 2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: all 0.3s ease;
          }
          
          .header-wrapper.sticky {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1000;
            padding-top: 1rem;
            padding-bottom: 1rem;
            background: transparent;
            backdrop-filter: none;
            box-shadow: none;
          }
          
          .hamburger {
            display: none;
            flex-direction: column;
            cursor: pointer;
          }
          
          .hamburger div {
            width: 25px;
            height: 3px;
            background-color: black;
            margin: 2px 0;
            transition: 0.4s;
          }
          
          .drawer {
            position: fixed;
            top: 0;
            left: -100%;
            width: 80%;
            height: 100vh;
            background-color: white;
            transition: 0.3s;
            z-index: 1000;
            padding: 2rem;
            box-shadow: 2px 0 5px rgba(0,0,0,0.2);
          }
          
          .drawer.open {
            left: 0;
          }
          
          .drawer-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.5);
            display: none;
            z-index: 999;
          }
          
          .drawer-overlay.open {
            display: block;
          }
          
          .drawer-close {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
          }
          
          .drawer .nav-link-with-arrow {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
          }
          
          .drawer .arrow {
            margin-left: 8px;
            transition: transform 0.3s;
          }
          
          .drawer .arrow.open {
            transform: rotate(180deg);
          }
          
          @media (max-width: 1024px) {
            .header {
              width: 90%;
            }
          }
          
          @media (max-width: 768px) {
            .header-wrapper.sticky {
              padding-top: 0.5rem;
              padding-bottom: 0.5rem;
            }
            
            .header {
              width: 95%;
              height: auto;
            }
            
            .logo-container {
              margin-right: 0;
            }
            
            .logo {
              height: 2rem;
            }
            
            h1 {
              font-size: 0.80rem;
            }
            
            .nav {
              display: none;
            }
            
            .contact-button {
              display: none;
            }
            
            .hamburger {
              display: flex;
            }
            
            .drawer .nav-list {
              flex-direction: column;
              gap: 1.5rem;
              padding: 0;
            }
            
            .drawer .nav-link {
              width: 100%;
              justify-content: flex-start;
            }
            
            .drawer .dropdown {
              position: static;
              width: 100%;
              box-shadow: none;
              border: none;
              margin-top: 0.5rem;
            }
            
            .drawer .dropdown-item {
              padding: 1rem;
              border-radius: 0;
            }
            
            .drawer .contact-button {
              display: block;
              margin-top: 2rem;
            }
          }
        `}
      </style>
      <div
        className={`header-wrapper font-lato ${isSticky ? 'sticky' : ''}`}
        style={{
          backgroundImage: isSticky ? 'none' : `url(${IsolationMode1})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
          backgroundSize: "200px",
        }}
      >
        <header className="header z-30">
          <div className=" flex items-center justify-between w-full">
            <div className="">
              <img
                onClick={goToHome}
                src={Logo}
                alt="Logo"
                className="logo h-[109px] cursor-pointer"
              />
            </div>

            <nav className="nav">
              <ul className="nav-list">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">
                    About us
                  </Link>
                </li>
                <li
                  className="nav-item"
                  onMouseEnter={() => {
                    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
                    setIsDropdownOpen(true);
                  }}
                  onMouseLeave={() => {
                    closeTimeoutRef.current = setTimeout(() => {
                      setIsDropdownOpen(false);
                    }, 200); // Adjust delay here if needed
                  }}
                >
                  <Link to="/services" className="nav-link" onClick={() => setIsDropdownOpen(false)}>
                    Services
                  </Link>
                  {isDropdownOpen && (
                    <ul className="dropdown z-50"
                      onMouseEnter={() => {
                        if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
                      }}
                      onMouseLeave={() => {
                        closeTimeoutRef.current = setTimeout(() => {
                          setIsDropdownOpen(false);
                        }, 200);
                      }}>
                      <li>
                        <Link
                          to="/services/electrical-installations"
                          className="dropdown-item"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          Electrical Installations & Upgrades
                        </Link>
                      </li>
                      {/* <li>
                      <Link to="/services/web" className="dropdown-item">Electrical Testing & Inspections</Link>
                    </li> */}
                      <li>
                        <Link
                          to="/services/emergency-lighting"
                          className="dropdown-item"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          Emergency Lighting & Power Solutions
                        </Link>
                      </li>
                      {/* <li>
                      <Link to="/services/web" className="dropdown-item">Backup Power Systems</Link>
                    </li>
                    <li>
                      <Link to="/services/web" className="dropdown-item">Fire Alarms & Safety Systems</Link>
                    </li>
                    <li>
                      <Link to="/services/web" className="dropdown-item">Data Cabling & Networking</Link>
                    </li>
                    <li>
                      <Link to="/services/web" className="dropdown-item">Maintenance & Reactive Repairs</Link>
                    </li> */}
                    </ul>
                  )}
                </li>
                <li className="nav-item">
                  <Link to="/portfolio" className="nav-link">
                    Recent Projects
                  </Link>
                </li>
              </ul>
            </nav>

            <Link to="/contact">
              <button className="contact-button w-[187px] h-[61px]">
                <span className="contact-button-text">Contact Us</span>
              </button>
            </Link>

            <div className="hamburger" onClick={toggleDrawer}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </header>
        <div
          className={`drawer-overlay ${isDrawerOpen ? "open" : ""}`}
          onClick={toggleDrawer}
        ></div>
        <div className={`drawer ${isDrawerOpen ? "open" : ""}`}>
          <button className="drawer-close" onClick={toggleDrawer}>
            ×
          </button>
          <nav>
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/" className="nav-link" onClick={toggleDrawer}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link" onClick={toggleDrawer}>
                  About us
                </Link>
              </li>
              <li
                className="nav-item"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <div className="nav-link-with-arrow">
                  <Link
                    to="/services"
                    className="nav-link"
                    onClick={toggleDrawer}
                  >
                    Services
                  </Link>
                  <span className={`arrow ${isDropdownOpen ? "open" : ""}`}>
                    ▼
                  </span>
                </div>
                {isDropdownOpen && (
                  <ul className="dropdown">
                    <li>
                      <Link
                        to="/services/electrical-installations"
                        className="dropdown-item text-wrap"
                        onClick={toggleDrawer}
                      >
                        Electrical Installations & Upgrades
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/emergency-lighting"
                        className="dropdown-item text-wrap"
                        onClick={toggleDrawer}
                      >
                        Emergency Lighting & Power Solutions
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="nav-item">
                <Link to="/portfolio" className="nav-link" onClick={toggleDrawer}>
                  Recent Projects
                </Link>
              </li>
            </ul>
          </nav>
          <Link to="/contact" onClick={toggleDrawer}>
            <button className="contact-button">
              <span className="contact-button-text">Contact Us</span>
            </button>
          </Link>
        </div>
      </div>


    </>
  );
};

export default Header;
