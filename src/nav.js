import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

export default class Nav1 extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
                <Navbar id='mynavbar' className="fixed-top" color="light" light expand="md">
                    <NavbarBrand href="/"><img className='logo' src={require('./Capture1.PNG')} /></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto nav-links" navbar>
                            <NavItem  >
                                <NavLink href="#">About us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://www.docplanner.com/career">Career</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Departments
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem href="https://www.docplanner.com/department?dep=marketing">
                                        Marketing {'&'} PR
                                    </DropdownItem>
                                    <DropdownItem href="https://www.docplanner.com/department?dep=customer">
                                        Customer Success {'&'} Sales
                                    </DropdownItem>
                                    <DropdownItem href="https://www.docplanner.com/department?dep=it">
                                        IT, Product, Design {'&'} UX
                                    </DropdownItem>
                                    <DropdownItem href="https://www.docplanner.com/department?dep=finance">
                                        Finance {'&'} Administration
                                    </DropdownItem>
                                    <DropdownItem href="https://www.docplanner.com/department?dep=hr">
                                        HR {'&'} more
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
        );
    }
}