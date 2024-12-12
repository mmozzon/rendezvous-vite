import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../store/usersSlice";
//import { RootState } from "../store/store";

const SignUp: React.FC = () => {

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    isLoggedIn: false,
    firstname: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    isLoggedIn: false,
    firstname: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Fonction de validation
  const validate = () => {
    const newErrors = {
      isLoggedIn: false,
      firstname: "",
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
    let isValid = true;

    if (!formData.firstname.trim()) {
      newErrors.firstname = "Firstname is required";
      isValid = false;
    }

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Gestion de la soumission du formulaire
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      dispatch(registerUser(formData)); // Envoie des données à Redux
      alert("Registration successful!");
    }
  };

  // Gestion des changements dans les champs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex justify-center gap-6 px-2 whitespace-nowrap flex-grow">
      <form onSubmit={handleSubmit} noValidate className="flex flex-col space-y-4">

            {/* Prénom */}
        <div className="flex items-center space-x-4">
          <label htmlFor="firstname">Firstname</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            placeholder="Enter your firstname"
          />
          {errors.firstname && <p style={{ color: "red" }}>{errors.firstname}</p>}
        </div>

        {/* Nom */}
        <div className="flex items-center space-x-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>

        {/* Email */}
        <div className="flex items-center space-x-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        {/* Mot de passe */}
        <div className="flex items-center space-x-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </div>

        {/* Confirmation du mot de passe */}
        <div className="flex items-center space-x-4">
          <label className="block text-gray-700">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
          />
          {errors.confirmPassword && (
            <p style={{ color: "red" }}>{errors.confirmPassword}</p>
          )}
        </div>

        <button type="submit" className="text-sm bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
