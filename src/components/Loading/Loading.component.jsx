import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const Loading = ({ isLoading, children }) => {
  return (
    <div>
      {isLoading ? <div className="loading">Loading...</div> : children}
    </div>
  );
};

Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default Loading;
