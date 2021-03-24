import {useState, useEffect} from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLaptopCode} from "@fortawesome/free-solid-svg-icons/faLaptopCode";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import {faTimes} from "@fortawesome/free-solid-svg-icons/faTimes";
import {faBars} from "@fortawesome/free-solid-svg-icons/faBars";



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

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    return (
        <Nav>
                <div className="navbar-container">
                    <Link href='/' passHref className="navbar-logo" >
                        <StyledLink> <FontAwesomeIcon icon={faTerminal} />DLAROSA.IO</StyledLink>
                    </Link>
                </div>
                <div className="nav-menu">
                    <Link href='/' className="nav-links" passHref>
                        <StyledLink>HOME</StyledLink>
                    </Link>

                    <Link href='/about' className="nav-links" passHref>
                        <StyledLink> <FontAwesomeIcon icon={faUser}/> ABOUT</StyledLink>
                    </Link>

                    <Link href='/projects' className="nav-links" passHref>
                        <StyledLink> <FontAwesomeIcon icon={faLaptopCode}/> PROJECTS</StyledLink>
                    </Link>

                    <Link href='/contact' className="nav-links" passHref>
                        <StyledLink> <FontAwesomeIcon icon={faPaperPlane} /> CONTACT</StyledLink>
                    </Link>
                    {/*<Link href='/' className="menu-icon" passHref onClick={handleClick}>*/}
                    {/*    <i className={click ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />} />*/}
                    {/*</Link>*/}
                </div>
        </Nav>
    );
};

export default NavBar;
