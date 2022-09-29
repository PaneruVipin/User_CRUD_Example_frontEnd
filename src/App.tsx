import { Route, Routes, useNavigate } from "react-router-dom"
import UserPage from "./components/UserPage"

function App() {
 
  return <Routes>
    <Route index element={<UserPage/>}></Route>
  </Routes>
}

export default App
