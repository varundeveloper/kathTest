import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom"

export function Navbar(){
    return (
        <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
            <Container>
            <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
            </Container>
</NavbarBs>
    )
}