// import React, { useState } from 'react';
// import { NavLink as reactLink } from 'react-router-dom';
// import {
//     Nav,
//     NavItem,
//     Dropdown,
//     DropdownItem,
//     DropdownToggle,
//     DropdownMenu,
//     NavLink,
//     Navbar,
//     Container,
// } from 'reactstrap';

// function CustomNavBar(props) {
//     const [dropdownOpen, setDropdownOpen] = useState(false);

//     const toggle = () => setDropdownOpen(!dropdownOpen);

//     return (
//         <Navbar bg="dark" variant="dark">
//             <Container>
//             <Nav tabs className='navbar-dark'>
//                 <NavItem className='navbar-dark'>
//                     <NavLink tag={reactLink} to="/" active>
//                     MyBlogs
//                 </NavLink>
//             </NavItem>
            
//             <NavItem>
//                     <NavLink tag={reactLink} to="/login" >Signin</NavLink>
//             </NavItem>
//             <NavItem>
//                     <NavLink tag={reactLink} to="/signup">Signout</NavLink>
//             </NavItem>
//             <NavItem>
//                 <NavLink disabled href="#">
//                     Disabled Link
//                 </NavLink>
//             </NavItem>

//             <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
//                 <DropdownToggle nav caret>
//                     Others
//                 </DropdownToggle>
//                 <DropdownMenu>
//                     <DropdownItem header>Header</DropdownItem>
//                     <DropdownItem disabled>Action</DropdownItem>
//                     <DropdownItem>Another Action</DropdownItem>
//                     <DropdownItem divider />
//                     <DropdownItem>Another Action</DropdownItem>
//                 </DropdownMenu>
//             </Dropdown>
//         </Nav>
//             </Container>
//         </Navbar>
//     );
// }

// export default CustomNavBar;

// import React, { useState } from 'react';
// import {
//     Collapse,
//     Navbar,
//     NavbarToggler,
//     NavbarBrand,
//     Nav,
//     NavItem,
//     NavLink,
//     UncontrolledDropdown,
//     DropdownToggle,
//     DropdownMenu,
//     DropdownItem,
//     NavbarText,
// } from 'reactstrap';

// function CustomNavBar(args) {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggle = () => setIsOpen(!isOpen);

//     return (
//         <div>
//             <Navbar {...args}>
//                 <NavbarBrand href="/">reactstrap</NavbarBrand>
//                 <NavbarToggler onClick={toggle} />
//                 <Collapse isOpen={isOpen} navbar>
//                     <Nav className="me-auto" navbar>
//                         <NavItem>
//                             <NavLink href="/components/">Components</NavLink>
//                         </NavItem>
//                         <NavItem>
//                             <NavLink href="https://github.com/reactstrap/reactstrap">
//                                 GitHub
//                             </NavLink>
//                         </NavItem>
//                         <UncontrolledDropdown nav inNavbar>
//                             <DropdownToggle nav caret>
//                                 Options
//                             </DropdownToggle>
//                             <DropdownMenu right>
//                                 <DropdownItem>Option 1</DropdownItem>
//                                 <DropdownItem>Option 2</DropdownItem>
//                                 <DropdownItem divider />
//                                 <DropdownItem>Reset</DropdownItem>
//                             </DropdownMenu>
//                         </UncontrolledDropdown>
//                     </Nav>
//                     <NavbarText>Simple Text</NavbarText>
//                 </Collapse>
//             </Navbar>
//         </div>
//     );
// }

// export default CustomNavBar;
import { NavLink as reactLink } from 'react-router-dom';
import React, { useState } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink,ButtonDropdown,DropdownToggle,DropdownMenu,DropdownItem } from 'reactstrap';

const CustomNavbar = () => {
  const navbarStyle = {
    backgroundColor: '#3f51b5', // Change this to your preferred background color
  };

  const brandStyle = {
    color: '#fff', // Change this to your preferred text color
    fontWeight: 'bold',
    fontSize: '24px',
  };

  const linkStyle = {
    color: '#fff', // Change this to your preferred text color
    fontSize: '18px',
    margin: '0 10px',
    textTransform: 'uppercase',
    transition: 'all 0.3s ease',
  };

  const linkHoverStyle = {
    color: '#f44336', // Change this to your preferred hover color
  };

  const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

  return (

    
    <Navbar style={navbarStyle} dark expand="md">
      <NavbarBrand style={brandStyle} href="/">MyBlogs</NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink style={linkStyle} tag={reactLink} to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink style={linkStyle} tag={reactLink} to="/signup">Signup</NavLink>
        </NavItem>
              <NavItem className='bg-red'>
                  <NavLink style={linkStyle} tag={reactLink} to="/login">Login</NavLink>
              </NavItem>
              <ButtonDropdown isOpen={isOpen} toggle={toggle}>
                  <DropdownToggle onClick={toggle} className="bg-primary" caret>
                      More
                  </DropdownToggle>
                  <DropdownMenu>
                      <DropdownItem header>Information
                      </DropdownItem>
                      <DropdownItem tag={reactLink} to="/services">Services</DropdownItem>
                      <DropdownItem tag={reactLink} to="/about">About us</DropdownItem>


                  </DropdownMenu>
              </ButtonDropdown>
       
        
        
      </Nav>
    </Navbar>
  );
};

export default CustomNavbar;
