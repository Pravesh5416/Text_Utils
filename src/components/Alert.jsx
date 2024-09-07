// import React from "react";
import PropTypes from "prop-types";

function Alert(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <div>
      {props.alert && (
        <div className={`alert alert-${props.alert.type}`} role="alert">
          <strong>{capitalize(props.alert.type)}</strong> {props.alert.msg}
        </div>
      )}
    </div>
  );
}

Alert.propTypes = {
  alert: PropTypes.shape({
    type: PropTypes.string.isRequired,
    msg: PropTypes.string.isRequired,
  }),
};

export default Alert;
