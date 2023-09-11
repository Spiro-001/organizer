import React, { HTMLProps, ReactNode } from "react";

interface TextProps {
  className?: HTMLProps<HTMLElement>["className"];
  children: ReactNode;
}

const Text = ({ className, children }: TextProps) => {
  return <span className={className}>{children}</span>;
};

export default Text;
