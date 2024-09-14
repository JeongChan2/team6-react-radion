import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; // 부트스트랩 CSS
import "bootstrap/dist/js/bootstrap.bundle.min"; // 부트스트랩 JS + Popper.js
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import HomePage from "./pages/Homepage/HomePage";
import AppLayout from "./layout/AppLayout";
import LoginPage from "./pages/LoginPage/LoginPage";
import AlbumDetailPage from "./pages/AlbumDetailPage/AlbumDetailPage";
import TrackDetailPage from "./pages/TrackDetailPage/TrackDetailPage";
import MusicPlayer from "./common/MusicPlayer/MusicPlayer";
import { UserContextProvider } from "./context/UserContext";
// import PrivateRoute from "./route/PrivateRoute";
import PrivateRoute from "./route/PrivateRoute";
import PlayListPage from "./pages/PlayListPage/PlayListPage.jsx"
import TrackListPage from "./pages/TrackListPage/TrackListPage.jsx";
import ArtistDetailPage from "./pages/ArtistDetailPage/ArtistDetailPage.jsx";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<HomePage />} />{" "}
            {/* <Route path="music" element={<MusicPlayer/>}/> */}
            <Route path="music" element={<PlayListPage/>}/>
            <Route path="list" element={<TrackListPage/>}/>
            <Route
              path="login"
              element={!isAuthenticated ? <LoginPage /> : <Navigate to="/" />}
            />
            <Route path="/playlist" element={<MusicPlayer />} />
            <Route path="albums">
              <Route path=":id" element={<AlbumDetailPage />} />
            </Route>
            <Route path="tracks">
              <Route path=":id" element={<TrackDetailPage />} />
            </Route>
            <Route path="artists">
              <Route path=":id" element={<ArtistDetailPage />} />
            </Route>
          </Route>
          {/* 오류 화면 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </UserContextProvider> 
    </div>
  );
}

export default App;
