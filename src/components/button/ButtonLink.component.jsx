import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const ButtonLink = ({
  onClick,
  children,
  type = "button",
  className = "",
  disabled = false,
  href,
}) => {
  if (href) {
    return (
      <a href={href} className={`btn ${className}`} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={`btn ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

ButtonLink.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  href: PropTypes.string,
};

export default ButtonLink;
