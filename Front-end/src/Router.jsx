import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Layout from "./layouts/Layout"
import Profile from "./pages/profile/Profile"
import Error from "./pages/error/Error"
import Homepage from "./pages/homepage/Homepage"

const AppRouter = () => {
    return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
          <Route path="user/:id" element={<Profile />} />
          <Route path="error" element={<Error />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
    )
}

export default AppRouter