import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, 
         Nav, 
         NavItem, 
         NavDropdown, 
         MenuItem,
         FormGroup,
         FormControl,
         Button } from 'react-bootstrap';


const NavBar = (props) => (
    <Navbar fluid inverse fixedTop>
      <Navbar.Header>
          <LinkContainer to="/">
            <Navbar.Brand>
            ConnectHub.us
            </Navbar.Brand>
          </LinkContainer>
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Form pullLeft>
            <FormGroup>
              <FormControl type="text" placeholder="Search" />
            </FormGroup>
            {' '}
            <Button className="fa fa-search" type="submit"></Button>
          </Navbar.Form>
          <Nav pullRight>
            <LinkContainer to="/profile/pboserman#">
              <NavItem eventKey={1}>Profile</NavItem>
            </LinkContainer>
            <LinkContainer to="/#">
              <NavItem eventKey={2}>Home</NavItem>
            </LinkContainer>
            <NavDropdown eventKey={3} 
              title={<i className="fa fa-globe" aria-hidden="true"></i>} 
              id="notifications-nav-dropdown" 
              noCaret>
              <MenuItem eventKey={3.1}>This</MenuItem>
              <MenuItem eventKey={3.2}>is the</MenuItem>
              <MenuItem eventKey={3.3}>notifications dropdown</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>For notifications</MenuItem>
            </NavDropdown>
            <NavDropdown eventKey={4}
              title=""
              id="settings-nav-dropdown">
              <LinkContainer to="/about">
                <MenuItem eventKey={4.1}>About{' '}<i className="fa fa-question right" aria-hidden="true"></i></MenuItem>
              </LinkContainer>
              <LinkContainer to="/settings">
                <MenuItem eventKey={4.2}>Settings{' '}<i className="fa fa-cog right" aria-hidden="true"></i></MenuItem>
              </LinkContainer>
              <MenuItem divider />
              <MenuItem eventKey={4.3} href="/logout">Logout{' '}<i className="fa fa-sign-out right" aria-hidden="true"></i></MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default NavBar;