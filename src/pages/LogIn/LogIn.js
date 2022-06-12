import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./LogIn.css";
import Modal from "../../components/Modal";


function LogIn(props) {    
    // const { addLoggedUser } = addLoggedUser;
    const [user, setUser] = useState(
        {
            username: "",
            password: ""
        }
    ); 

    const [isModalShow, setModalShow] = useState(false);
    const navigate = useNavigate();

    const onChangeHandler = (event) => {
        // console.log(event.target);
        const { name, value } = event.target;
        // console.log({ name, value });
        setUser({
            ...user, 
            [name]:value
        });
    }
    
    const onLogin = (e) => { 
        e.preventDefault();
        /* store the user from the form to localstorage. 
            Note: localstorage save only one object with one key
            If want to save more value in localstorage, need to create new key
        */
        localStorage.setItem("user", JSON.stringify(user));        
        // get the user from localStorage
        /* const result = localStorage.getItem("user");
        console.log(JSON.parse(result)); */
        props.addLoggedUser(user);
        setModalShow(true);
        setTimeout(() => { 
            // navigate("/");            
            navigate(-1);
        }, 1000);        
    }

    return (
        <div className="container mt-5 mb-5 logIn-form">
            <div className="d-flex flex row g-0 justify-content-center">
                <div className={isModalShow ? "col-md-6 mt-3 mb-3 hide" : "col-md-6 mt-3 mb-3"}>
                    <div className="card card1 p-3">
                        <div className="d-flex flex-column text-center">
                            <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
                                <img src="https://i.imgur.com/kFFNY1q.png" height={50} width={50} />
                            </div>                            
                            <p className="login mt-3">Welcome to Log in!</p>
                            <p>Please log in to continue</p>
                        </div>
                        <div className="input-field d-flex flex-column mt-3">
                            <span>Username</span>
                            <input type="text" className="form-control" name="username" value={user.username} onChange={onChangeHandler} placeholder="ngocle"></input>
                            <span className="mt-3">Password</span>
                            <input type="password" className="form-control" name="password" value={user.password} onChange={onChangeHandler} placeholder="Enter Your Password"></input>
                            <button className="mt-4 btn btn-dark d-flex justify-content-center align-items-center" onClick={onLogin}>Login</button>
                            {/* <div className="mt-3 text1"> <span className="mt-3 forget">Forget Password?</span> </div> */}
                            <div className="text2 mt-4 d-flex flex-row align-items-center">
                                <span>Don't have an account? </span><Link className="register" to="/signin">Register here</Link>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal isShow={ isModalShow} />
        </div>

    )
}

export default LogIn