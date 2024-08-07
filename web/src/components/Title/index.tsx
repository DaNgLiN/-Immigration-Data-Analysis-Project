import React from "react";

const Title = ({ children }: { children: string }) => {
  return <h1 className="my-5 text-center">{children}</h1>;
};

export default Title;
