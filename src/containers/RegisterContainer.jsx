import React from "react";
import { useState } from "react";
import RegisterForm from "../components/RegisterForm";
import wishlisterLogo from "../assets/wishlisterlogo.svg";
import "./RegisterContainer.css";
import { useAuth } from "../hooks/AuthProvider";
import { useNavigate } from "react-router-dom";

const RegisterContainer = () => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();

  const registerUser = async () => {
    try {
      const response = await fetch(
        // "http://localhost:8080/api/register/new",
        "https://wishlister-h2tf.onrender.com/api/register/new",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
            name: name,
            dateOfBirth: dob,
          }),
        }
      );

      const res = await response.json();
      console.log("Registration response:", res); // Debug response

      if (res) {
        auth.setUser(res);
        navigate("/wishlists");
        alert("Registration successful");
        console.log("User after setting:", auth.user); // Debug user state
      } else {
        throw new Error("Invalid response format");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = () => {
    console.log("Name:", name);
    console.log("Date of Birth:", dob);
    console.log("Email:", email);
    // TODO Call API endpoint to register user
    registerUser();
  };

  return (
    <div className="register-container">
      <img src={wishlisterLogo} alt="wishlister logo" />
      <RegisterForm
        name={name}
        onNameChange={setName}
        dob={dob}
        onDobChange={setDob}
        email={email}
        onEmailChange={setEmail}
        password={password}
        onPasswordChange={setPassword}
        confirmPassword={confirmPassword}
        onConfirmPasswordChange={setConfirmPassword}
        registerUser={registerUser}
      />
    </div>
  );
};

export default RegisterContainer;
