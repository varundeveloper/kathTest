import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Store } from "./pages/Store"
import { Navbar } from "./components/Navbar"
function App() {
  return (
    <Container className="mb-4">
       <Navbar />
        <Routes>
          <Route path="/store" element={<Store />} />
        </Routes>
    </Container>
  )
}

export default App
