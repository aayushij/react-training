import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar, NavDropdown, NavItem, MenuItem } from 'react-bootstrap';
import './MegaMenu.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      image:'graphics-t-shirt'
    }
  }
  handleMouseEnter = (imageName) => {
    this.setState({
      image:imageName
    })
  }
  render() {
    return (
      <Navbar inverse collapse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">Store</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1}>
              <NavLink to='/' activeClassName="active">
              Home
              </NavLink>
            </NavItem>
            <NavItem eventKey={2} href="#">
              <NavDropdown eventKey={3} title="Products" id="basic-nav-dropdown" className="mega-dropdown-menu" >
                <div className="mega-menu container">
                  <div className="mega-menu-list">
                  <div className="col-lg-3">
                    <MenuItem eventKey={3.1} className="menu-heading"><strong>Topwear</strong></MenuItem>
                    <MenuItem 
                      eventKey={3.2} 
                      onMouseEnter={() => this.handleMouseEnter('graphics-t-shirt')}
                    >
                      Graphics T-shirts
                    </MenuItem>
                    <MenuItem 
                      eventKey={3.2} 
                      onMouseEnter={() => this.handleMouseEnter('full-sleeve-t-shirt')}
                    >
                      Full Sleeves T-shirts
                    </MenuItem>
                    <MenuItem 
                      eventKey={3.2} 
                      onMouseEnter={() => this.handleMouseEnter('plain-t-shirt')}
                    >
                      Plain T-shirts
                    </MenuItem>
                    <MenuItem 
                      eventKey={3.2} 
                      onMouseEnter={() => this.handleMouseEnter('hoodies')}
                    >
                      Hoddies
                    </MenuItem>
                    <MenuItem 
                      eventKey={3.2} 
                      onMouseEnter={() => this.handleMouseEnter('shirts')}
                    >
                      Shirts
                    </MenuItem>
                  </div>
                  <div className="col-lg-3">  
                    <MenuItem eventKey={3.1} className="menu-heading"><strong>Bottomwear</strong></MenuItem>
                    <MenuItem 
                      eventKey={3.2} 
                      onMouseEnter={() => this.handleMouseEnter('joggers')}
                    >
                      Joggers
                    </MenuItem>
                    <MenuItem 
                      eventKey={3.2} 
                      onMouseEnter={() => this.handleMouseEnter('pants')}
                    >
                      Pants
                    </MenuItem>
                    <MenuItem 
                      eventKey={3.2} 
                      onMouseEnter={() => this.handleMouseEnter('shorts')}
                    >
                    Shorts
                    </MenuItem>
                  </div>
                  <div className="col-lg-3">
                    <MenuItem eventKey={3.1} className="menu-heading"><strong>Footwear</strong></MenuItem>
                    <MenuItem 
                      eventKey={3.2} 
                      onMouseEnter={() => this.handleMouseEnter('shoes')}
                    >
                      Shoes
                    </MenuItem>
                    <MenuItem 
                      eventKey={3.2} 
                      onMouseEnter={() => this.handleMouseEnter('slippers')}
                    >
                      Slippers
                    </MenuItem>
                  </div>
                  </div>
                  <div className="col-lg-3">
                    <img src={`/assets/images/${this.state.image}.jpg`} alt="" className="product-image"/>
                  </div>
                </div>
              </NavDropdown>
            </NavItem>
            <NavDropdown eventKey={3} title="Profile" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>View Profile</MenuItem>
              <MenuItem eventKey={3.2}>Change Password</MenuItem>
              <MenuItem eventKey={3.2}>Logout</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default App;
