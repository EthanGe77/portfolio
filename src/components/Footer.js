import React from "react";

export const Footer = () => {
  return (
    <footer>
      <p className="copyright">
        Copyright &copy; {new Date().getFullYear()} All rights reserved
      </p>
    </footer>
  );
};
