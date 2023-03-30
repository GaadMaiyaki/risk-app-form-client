import { getClientName } from "./../../utils";

const withClientName = <T extends Record<string, any>>(
  Component: React.FC<T>
) => {
  const ModifiedComponent = (props: T) => {
    return <Component {...props} clientName={getClientName() ?? "Welcome"} />;
  };

  const hocComponentName =
    Component.displayName || Component.name || "Component";

  ModifiedComponent.displayName = hocComponentName;

  return ModifiedComponent;
};

export default withClientName;
