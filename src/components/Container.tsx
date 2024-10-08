import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<Readonly<ContainerProps>> = ({ children, className }) => {
  return <div className={`container mx-auto px-6 lg:px-4 ${className ? className : ''}`}>{children}</div>;
};
