import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Layout from "./layouts/Layout"
import Profile from "./pages/profile/Profile"
import ComponentLayout from "./pages/profile/layouts/componentLayout/ComponentLayout"
import ProfileLayout from "./pages/profile/layouts/profileLayout/ProfileLayout"
import AverageSessions from "./pages/profile/components/AverageSessions"
import Activities from "./pages/profile/components/Activities"
import Performances from "./pages/profile/components/Performances"
import KeyData from "./pages/profile/components/KeyData"
import Score from "./pages/profile/components/Score"
import Error from "./pages/error/Error"
import Homepage from "./pages/homepage/Homepage"
import Settings from "./pages/settings/Settings"

const AppRouter = () => {
    return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />

          <Route path="user/:id" element={<ProfileLayout />}>
            <Route index element={<Profile />} />
            <Route path="*" element={<ComponentLayout />}>
              <Route path="average-sessions" element={<AverageSessions />} />
              <Route path="activities" element={<Activities />} />
              <Route path="performances" element={<Performances />} />
              <Route path="key-data" element={<KeyData />} />
              <Route path="score" element={<Score />} />
              <Route path="*" element={<Error />} />
            </Route>
          </Route>

          <Route path="settings" element={<Settings />} />
          <Route path="error" element={<Error />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
    )
}

export default AppRouter