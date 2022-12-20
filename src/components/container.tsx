import React from "react";

type ContainerProps = {
  className?: string;
};
const Container = ({
  children,
  className,
}: React.PropsWithChildren<ContainerProps>) => {
  return (
    <div className={`container mx-auto px-4 sm:px-6 lg:px-8  ${className}`}>
      {children}
    </div>
  );
};

export default Container;
