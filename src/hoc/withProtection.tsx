import { Navigate } from "react-router-dom";

import LocalStorageService from "../services/local-storage";

const withProtection = <T extends {}>(Component: React.FC<T>) => {
  return (props: T) => {
    const isAuth = LocalStorageService.get(
      process.env.REACT_APP_USER as string
    );

    if (!isAuth) return <Navigate to="/" replace />;

    const ModifiedComponent = Component;

    const hocComponentName =
      Component.displayName || Component.name || "Component";

    ModifiedComponent.displayName = hocComponentName;

    return <ModifiedComponent {...props} />;
  };
};

export default withProtection;
