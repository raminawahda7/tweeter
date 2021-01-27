import React, { useState } from 'react'
import { Nav, NavbarContainer, NavUser, NavMenu, UserName, UserImg, NavItem, NavLinks, NavLogo, Img, NavLogoH } from './navbarelements'
import { IconContext } from 'react-icons/lib'
import logo from './logo.svg';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Link } from 'react-router-dom';
import '../../App.css'
const Navbar = ({ toggle }) => {
    const [anchorEl, setAnchorEl] = useState(false);
    const open = Boolean(anchorEl);

    const handleMenu = () => {
        setAnchorEl(!anchorEl);
    };

    const handleClose = () => {
        setAnchorEl(anchorEl);
    };

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to='home'>
                            <Img src={logo} />
                            <NavLogoH>Tweeter</NavLogoH>
                        </NavLogo>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to='home' smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"

                                >Home</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='explore' smooth={true} duration={500} spy={true}
                                    exact="true">Explore</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='bookmarks' smooth={true} duration={500} spy={true}
                                    exact="true" >Bookmarks</NavLinks>
                            </NavItem>

                        </NavMenu>
                        <NavUser onClick={handleMenu} aria-controls="menu-appbar">
                            <UserImg src='https://cdnb.artstation.com/p/assets/images/images/015/193/525/20190113230710/smaller_square/kevin-schneider-miles-morales-print.jpg?1547442431' />
                            <UserName>Qamar Tweet</UserName>
                            <Menu className="profilemenu"
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                getContentAnchorEl={null}
                                open={open}
                                onClose={handleClose}>
                                <MenuItem onClick={handleClose} >
                                    <Link to="home">Profile</Link>
                                </MenuItem>
                                <MenuItem onClick={handleClose} >My account</MenuItem>
                            </Menu>
                        </NavUser>

                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar