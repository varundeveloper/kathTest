import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Store } from "./pages/Store"

function App() {
  return (
    <Container className="mb-4">
        <Routes>
          <Route path="/store" element={<Store />} />
        </Routes>
    </Container>
  )
}

export default App
