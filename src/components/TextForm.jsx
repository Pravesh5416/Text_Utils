import PropTypes from "prop-types";

function TextForm(props) {
  const handleOnChange = (event) => {
    props.setText(event.target.value);
  };

  return (
    <>
      <div
        className={`container mb-3 my-5`}
        style={{ color: props.mode === "dark" ? "white" : "#042743"}}
      >
        <label htmlFor="myBox" className="form-label">
          <h1>{props.heading}</h1>
        </label>
        <textarea
          value={props.text}
          className="form-control w-full md:w-3/4 lg:w-1/2"
          id="myBox"
          rows="8"
          style={{
            backgroundColor: props.mode === "dark" ? "grey" : "#fff",
            color: props.mode === "dark" ? "#fff" : "#042743",
          }}
          onChange={handleOnChange}
          placeholder="यहाँ पाठ दर्ज करें"
        />
        {props.button.map((item, index) => (
          <button
            key={index}
            onClick={item.behaviour}
            className={"m-2 size-8 text-xl btn btn-primary"}
          >
            {item.buttonName}
          </button>
        ))}

        <div className="container">
          <h1>आपका पाठ सारांश</h1>
          <p>
            {props.text && props.text.trim() !== ""
              ? props.text.trim().split(/\s+/).length
              : 0}{" "}
            शब्द और {(props.text || "").length} अक्षर
          </p>
          <p>
            उपरोक्त सामग्री को पढ़ने में{" "}
            {(0.008 * (props.text || "").split(/\s+/).length).toFixed(2)} मिनट
            लगे।
          </p>
          <h2>पूर्व दर्शन</h2>
          <div
            className="container"
            dangerouslySetInnerHTML={{ __html: props.text.length>0? props.text : "यहां पूर्वावलोकन के लिए कुछ पाठ दर्ज करें"  }}
          />
        </div>
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.string,
  setText: PropTypes.func.isRequired,
  mode: PropTypes.string,
  button: PropTypes.arrayOf(
    PropTypes.shape({
      buttonName: PropTypes.string.isRequired,
      mode: PropTypes.func,
      behaviour: PropTypes.func.isRequired,
    })
  ).isRequired,
};

export default TextForm;
