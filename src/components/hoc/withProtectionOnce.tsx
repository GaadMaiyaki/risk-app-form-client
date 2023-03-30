import { Navigate } from "react-router-dom";

import LocalStorageService from "../../services/local-storage";

const withProtectionOnce = <T extends {}>(Component: React.FC<T>) => {
  const isAuth = LocalStorageService.get(process.env.REACT_APP_USER as string);

  return (props: T) => {
    if (isAuth) return <Navigate to="/form" replace />;

    const ModifiedComponent = Component;

    const hocComponentName =
      Component.displayName || Component.name || "Component";

    ModifiedComponent.displayName = hocComponentName;

    return <ModifiedComponent {...props} />;
  };
};

export default withProtectionOnce;
