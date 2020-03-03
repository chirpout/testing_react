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

const Header = () => (
  <div>
      <Navbar light expand="md">
        <Link href="/" passHref>
          <NavbarBrand component="a">ChirpOut</NavbarBrand>
        </Link>
              <Nav className="ml-auto" navbar>
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
              <Link href="/login" passHref>
                <Button outline component="a">LOG IN</Button>
              </Link>
      </Navbar>
      <hr />
  </div>
);

export default Header;
