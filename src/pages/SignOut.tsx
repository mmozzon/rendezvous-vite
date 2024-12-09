// SignOut.tsx
import React, { useEffect, useRef }from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOutUser } from "../store/usersSlice";
import { useLocation } from "react-router-dom";
import { RootState } from "../store/store";
import { useNavigate } from 'react-router-dom';

const SignOut: React.FC = () => {

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate(); 

  const hasExecuted = useRef(false); // Référence pour vérifier si l'effet a déjà été exécuté
  const signedin_useremail = location.state;

  const users = useSelector((state: RootState) =>
    state.usersredux.users.map((user) => ({
      ...user,
    }))
  );

  // Recherche de l'utilisateur correspondant
  const signedinuser = users.find(
    (user) => user.email === signedin_useremail && user.isLoggedIn == true
  );

  useEffect(() => {
    if (!hasExecuted.current && signedinuser) {  // Si l'effet n'a pas été exécuté, exécutez-le
      dispatch(signOutUser(signedinuser));
      alert("Signed out successfully!");
      navigate('/'); // Redirection vers la page d'accueil
      hasExecuted.current = true; // Marquer l'effet comme exécuté
    }
  }, [dispatch, signedinuser, navigate]); // Déclencher l'effet si ces valeurs changent
  
  return null;
  
};

export default SignOut;
