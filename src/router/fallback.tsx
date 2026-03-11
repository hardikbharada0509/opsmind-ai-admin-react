import { Navigate } from "react-router-dom";

/**
 * Handles all unknown routes by redirecting to the default login page.
 */
const FallbackRedirect = () => {
  return <Navigate to="/login" replace />;
};

export default FallbackRedirect;
