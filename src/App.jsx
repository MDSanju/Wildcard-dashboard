import './assets/libs/boxicons-2.1.1/css/boxicons.min.css'
import './scss/App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Blank from './pages/Blank'
import Dashboard from './pages/Dashboard'
import MainLayout from './layout/MainLayout'
import Users from "./pages/Users";
import Posts from "./pages/Posts";
import Albums from "./pages/Albums";
import User from "./pages/User";
import UserPosts from "./pages/UserPosts";
import UserAlbums from "./pages/UserAlbums";
import PostDetail from "./pages/PostDetail";
import AlbumDetail from "./pages/AlbumDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="posts" element={<Posts />} />
          <Route path="albums" element={<Albums />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/userPosts/:postsUserId" element={<UserPosts />} />
          <Route path="/userAlbums/:albumsUserId" element={<UserAlbums />} />
          <Route path="/postDetail/:postDetailId" element={<PostDetail />} />
          <Route path="/albumDetail/:albumDetailId" element={<AlbumDetail />} />
          <Route path="settings" element={<Blank />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
