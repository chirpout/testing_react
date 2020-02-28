import Link from 'next/link';
import {
    Button,
    Navbar,
    NavbarBrand,
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from 'reactstrap';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
      <Navbar light expand="md">
          <NavbarBrand href="/">ChirpOut</NavbarBrand>
              <Nav className="mr-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>LEARN MORE</DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>
                            Workplace Verification
                        </DropdownItem>
                        <DropdownItem>
                            Privacy Guarantee
                        </DropdownItem>
                        <DropdownItem>
                            Terms of Use
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
              <Button outline href="/login">LOG IN</Button>
      </Navbar>
      <hr />
  </div>
);

export default Header;
