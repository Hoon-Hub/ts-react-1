import { Navbar, Nav, Container } from "react-bootstrap"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <Navbar sticky="top"  expand="md">
      <Container>
          <Nav>
            <Link to="/">Calculator</Link>
            <Link to="/2">Main2</Link>
          </Nav>
      </Container>
    </Navbar>
  )
}

export default Header