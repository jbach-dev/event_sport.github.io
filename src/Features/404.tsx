import React from "react";
import "./404.css";

const Error = () => {
  return (
    <div className="container">
      <img src="./image/image_sport.jpg" alt="Norway" className="image" />
      <div className="text-block">
        <h1>404</h1>
        <h2>UH OH ! You are lost.</h2>
        <p>
          The page you are looking for does not exist. How you got here is a
          mystery. But you can click the button below to go back to the
          homepage.
        </p>
      </div>
    </div>
  );
};

export default Error;
