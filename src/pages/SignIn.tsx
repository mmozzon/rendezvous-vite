// SignIn.tsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { signInUser } from "../store/usersSlice";

const SignIn: React.FC = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const users = useSelector((state: RootState) =>
    state.usersredux.users.map((user) => ({
      ...user,
    }))
  );

  const dispatch = useDispatch();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();

    // Recherche de l'utilisateur correspondant
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    
    if (user) {
      dispatch(signInUser(user)); // Mise à jour de l'utilisateur connecté dans Redux
      alert("Signed in successfully!");
    } else {
      alert("Invalid email or password. Please try again."); // Message d'erreur
    }

  };

  return (
    <div className="flex justify-center gap-6 px-2 whitespace-nowrap flex-grow">
      <form onSubmit={handleSignIn} className="flex flex-col space-y-4">
        <div className="flex items-center space-x-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center space-x-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="text-sm bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
