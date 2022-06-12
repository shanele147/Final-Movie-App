const Auth = { 
    auth: () => { 
        const user = localStorage.getItem("user");
        // console.log(JSON.parse(user));
        return JSON.parse(user);
    }   
}
export default Auth;