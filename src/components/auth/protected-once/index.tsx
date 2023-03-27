import { Navigate } from "react-router-dom";

const ProtectedOnce = ({
  isAuthenticated,
  children,
}: {
  isAuthenticated: boolean;
  children: JSX.Element;
}) => {
  if (isAuthenticated) {
    return <Navigate to="/form" replace />;
  }

  return children;
};

export default ProtectedOnce;
