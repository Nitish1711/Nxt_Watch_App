import './App.css'
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import VideoItemDetails from './components/VideoItemDetails'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => {
  return (
    <Routes>
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      ></Route>

      <Route path="/login" element={<Login />}></Route>
      <Route
        path="/trending"
        element={
          <ProtectedRoute>
            <Trending />
          </ProtectedRoute>
        }
      ></Route>
      <Route
        path="/gaming"
        element={
          <ProtectedRoute>
            <Gaming />
          </ProtectedRoute>
        }
      ></Route>
      <Route
        path="/saved-videos"
        element={
          <ProtectedRoute>
            <SavedVideos />
          </ProtectedRoute>
        }
      ></Route>
      <Route
        path="/videos/:id"
        element={
          <ProtectedRoute>
            <VideoItemDetails />
          </ProtectedRoute>
        }
      ></Route>
      <Route
        path="*"
        element={
          <ProtectedRoute>
            <NotFound />
          </ProtectedRoute>
        }
      ></Route>
    </Routes>
  )
}

export default App
