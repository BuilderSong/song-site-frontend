import { useEffect, useState } from "react";
import { validateUser } from "../controllers/users";
import Home from "../pages/Home";

const Auth = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const Validate = () => {
    validateUser()
      .then(response => setIsLoggedIn(true))
      .catch(error => console.log("no authenticated user logged in"))
  }

  useEffect(Validate, [])

  return (
    isLoggedIn ? children : <Home />
  )
};

export default Auth;