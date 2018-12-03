import React from "react";

const Footer = ({ requestLimit }) => {
  return (
    <footer>
      <div>total: {requestLimit.remaining}</div>
      <div>core: {requestLimit.core}</div>
      <div>search: {requestLimit.search}</div>
    </footer>
  );
};

export default Footer;
