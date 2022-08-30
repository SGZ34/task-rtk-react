import { Navbar } from "../components";

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="vh-100 d-flex justify-content-center align-items-center">
          {children}
        </div>
      </div>
    </>
  );
};
