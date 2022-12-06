import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
  const [admin, setAdmin] = useState(false);
  const [user, setUser] = useState({});
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [success, setSuccess] = useState(false);

  const auth = getAuth();

  // create an  user with email and password
  const registerUser = (email, password, name, navigate) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setError("");
        const newUser = { email, displayName: name };
        setUser(newUser);
        //  setIsLogin(true);
        saveUser(email, name, "POST");
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {
            setError(error.message);
          });
        // setSuccess(true)
        navigate("/dashboard");
      })

      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // login with Email And Password
  const loginUser = (email, password, location, navigate) => {
    console.log(email, password, location, navigate);
    setIsLoading(true);
    console.log("before login");
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        localStorage.setItem("admin", true);
        const destination = location?.state?.from || "/";
        navigate(destination);
        const user = result.user;
        console.log(user);
        setUser(user);
        setSuccess(true);
        //    setIsLogin(true)
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  //observe user Presence
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, [auth]);

  useEffect(() => {
    fetch(`http://localhost:5000/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data.admin);
        sessionStorage.setItem("admin",data.admin)
      });
    // .catch((error) => {
    //     setError(error.message);
    // })
  }, [user?.email]);

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const saveUser = (email, name, method) => {
    const user = { email, name };
    console.log(user);
    fetch("http://localhost:5000/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  return {
    user,
    error,
    registerUser,
    loginUser,
    setError,
    success,
    logOut,
    isLoading,
    admin,
    setSuccess,
    setIsLoading,
  };
};

export default useFirebase;
