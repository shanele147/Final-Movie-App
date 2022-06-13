import { useState, useEffect } from "react";
<<<<<<< HEAD
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
=======
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
>>>>>>> 1a52970503ca082c9a64979c439b3b84bbfab033

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
<<<<<<< HEAD
import Search from "./pages/SearchResult";
=======
import Search from "./pages/Search";

>>>>>>> 1a52970503ca082c9a64979c439b3b84bbfab033

function App() {
  const [isLoggedin, setLoggedin] = useState(false);
  const loggedUser = JSON.parse(localStorage.getItem("user"));
<<<<<<< HEAD
  // const newAdded = JSON.parse(localStorage.getItem("favorite"));
  // console.log(newAdded);
  const [currentUser, setCurrentUser] = useState(loggedUser);
  const [wishList, setWishlist] = useState([]);
  const listAdded = [];
  const uniques = [];

  const [searchValue, setSearchValue] = useState("");
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const addLoggedUser = (user) => {
    setCurrentUser(user);
  };
=======
  const [currentUser, setCurrentUser] = useState(loggedUser);
  

  const addLoggedUser = (user) => { 
    setCurrentUser(user);
  }
>>>>>>> 1a52970503ca082c9a64979c439b3b84bbfab033

  const onLogout = () => {
    localStorage.removeItem("user");
    setCurrentUser(null);
    setLoggedin(false);
<<<<<<< HEAD
  };

  const onGetWishList = (newId, posterPath) => {
    const newAdded = JSON.parse(localStorage.getItem("favorite"));
    // check if new item is existed in the list
    let addIndex = wishList.findIndex((item) => item.id === newAdded.id);
    console.log(addIndex);
    if (addIndex === -1) {
      setWishlist([...wishList, newAdded]);
    }
    console.log(wishList);
  };

  useEffect(() => {
    if (currentUser) {
      setLoggedin(true);
    }
  }, [currentUser]);

  useEffect(() => {
    onGetWishList();
  }, []);

  return (
    <Router>
      <Header isLoggedin={isLoggedin} onLogout={onLogout} />
      <Routes>
        <Route
          path="/login"
          element={<LogIn addLoggedUser={addLoggedUser} />}
        />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<HomePage onGetWishList={onGetWishList} />} />
        <Route
          path="/:movieCategory"
          element={<MovieCategory onGetWishList={onGetWishList} />}
        />
        <Route path="/movies/:id" element={<MovieDetail />} />
        {/* Private route */}
        <Route
          path="/wishlist"
          element={
            <PrivateRoute
              component={WishList}
              isLoggedin={isLoggedin}
              wishList={wishList}
            />
          }
        />
        <Route path="/search" element={<Search />} />
        <Route path="/search/:query" element={<Search />} />
        <Route path="/search/:id/:title" element={<MovieDetail />} />
=======
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
>>>>>>> 1a52970503ca082c9a64979c439b3b84bbfab033
        {/* * đại diện cho tất cả các page không phải trang homepage hoặc movie detail */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
