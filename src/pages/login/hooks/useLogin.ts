import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const navigate = useNavigate();
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleTogglePassword = () => setShowPassword((prev) => !prev);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!username || !password) {
      setError("Username and password are required.");
      return;
    }

    // Mock API call simulation
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // Ensure we treat 'admin' 'admin' as valid just to mock something, or just pass automatically
      navigate("/dashboard", { replace: true });
    }, 1000);
  };

  return {
    username,
    setUsername,
    password,
    setPassword,
    showPassword,
    handleTogglePassword,
    loading,
    error,
    handleSubmit
  };
};
