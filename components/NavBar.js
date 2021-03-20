import {useState, useEffect} from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLaptopCode} from "@fortawesome/free-solid-svg-icons/faLaptopCode";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";

const Nav = styled.nav`
  height: 80px;
  background: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
`;

const StyledLink = styled.a`
  padding: 0rem 2rem;
`;

function NavBar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <Nav>
            <div className="navbar">
                <div className="navbar-container">
                    <Link href='/' passHref className="navbar-logo" onClick={closeMobileMenu}>
                        <StyledLink> <FontAwesomeIcon icon={faTerminal} />DLAROSA.IO</StyledLink>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link href='/' className="nav-links" passHref onClick={closeMobileMenu}>
                                <StyledLink>HOME</StyledLink>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href='/about' className="nav-links" passHref onClick={closeMobileMenu}>
                                <StyledLink> <FontAwesomeIcon icon={faUser}/> ABOUT</StyledLink>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href='/projects' className="nav-links" passHref onClick={closeMobileMenu}>
                                <StyledLink> <FontAwesomeIcon icon={faLaptopCode}/> PROJECTS</StyledLink>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href='/contact' className="nav-links" passHref onClick={closeMobileMenu}>
                                <StyledLink> <FontAwesomeIcon icon={faPaperPlane} /> CONTACT</StyledLink>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </Nav>
    );
};

export default NavBar;
