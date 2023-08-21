import { Suspense } from "react";

const Layout = ({ children, item }: any) => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>{item}</Suspense>
      <h1>Layout</h1>
      {children}
    </div>
  );
};

export default Layout;
