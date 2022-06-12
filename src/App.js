import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

import HomePage from "./pages/HomePage";
import MovieDetail from "./pages/MovieDetail";
import NotFoundPage from "./pages/NotFoundPage";
import MovieCategory from "./pages/MovieCategory";
import LogIn from "./pages/LogIn/LogIn";
import SignIn from "./pages/SignIn/Signin";
import WishList from "./pages/WishList";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Header from "./components/Header/Header";
// import Auth from "./services/Auth";
import "./App.css";
import Search from "./pages/Search";


function App() {
  const [isLoggedin, setLoggedin] = useState(false);
  const loggedUser = JSON.parse(localStorage.getItem("user"));
  const [currentUser, setCurrentUser] = useState(loggedUser);
  

  const addLoggedUser = (user) => { 
    setCurrentUser(user);
  }

  const onLogout = () => {
    localStorage.removeItem("user");
    setCurrentUser(null);
    setLoggedin(false);
  }

  useEffect(() => {     
    if (currentUser) {
      setLoggedin(true);
    }
  }, [currentUser]);  
  
  return (
    <Router>
      <Header isLoggedin={isLoggedin} onLogout={onLogout} />
      <Routes> 
        <Route path="/login" element={<LogIn addLoggedUser={addLoggedUser}/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/" element={<HomePage />} />
        <Route path="/:movieCategory" element={<MovieCategory />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
        <Route path="/wishlist" element={<PrivateRoute component={WishList} isLoggedin={isLoggedin}/>} />
        <Route path="/search" element={<Search />} />
        <Route path="/search/:id" element={<MovieDetail />} />
        {/* * đại diện cho tất cả các page không phải trang homepage hoặc movie detail */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
