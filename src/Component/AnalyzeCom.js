import { useState, useEffect } from "react";
import "./AnalyzeCom.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
function AnalyzeCom({ border }) {
  const [textValue, setTextValue] = useState("");

  //UpperCase work ......
  const upperCaseHandle = (e) => {
    if (textValue === "") {
      alert("please type anything first !!");
    } else {
      const UpperCase = textValue.toUpperCase();
      setTextValue(UpperCase);
    }
  };
  //LowerCase work here....
  const lowerCaseHandle = (e) => {
    if (textValue === "") {
      alert("please type anything first !!");
    } else {
      const LowerCase = textValue.toLowerCase();
      setTextValue(LowerCase);
    }
  };

  //clearText work here....
  const clearTextHandle = () => {
    setTextValue("");
  };

  //removeExtraSpace work here....
  const removeExtraSpace = () => {
    if (textValue === "") {
      alert("please type anything first !!");
    } else {
      const arr = textValue.split(" ");
      const str = arr.join("");

      setTextValue(str);
    }
  };

  const handleText = (e) => {
    setTextValue(e.target.value);
  };

  useEffect(() => {
    setTextValue(textValue);
  }, [textValue]);
  return (
    <div
      className="analyze-h1"
      style={{
        border: ` 2px solid ${border ? "black" : "white"}`
      }}
    >
      <h1
        className=" px-4 text-center"
        style={{
          backgroundColor: `${border ? "orange" : "pink"}`
        }}
      >
        Enter the text to analyze below
      </h1>
      <textarea rows="13" cols="163" value={textValue} onChange={handleText} />
      <div className="buttons">
        <button
          type="button"
          onClick={upperCaseHandle}
          className="btn btn-primary m-1"
        >
          Convert to Uppercase
        </button>
        <button
          type="button"
          onClick={lowerCaseHandle}
          className="btn btn-primary  m-1"
        >
          Convert to Lowercase
        </button>
        <button
          type="button"
          onClick={clearTextHandle}
          className="btn btn-primary  m-1"
        >
          Clear Text
        </button>
        <CopyToClipboard text={textValue}>
          <button
            type="button"
            onClick={(text) => alert("You copied the text")}
            className="btn btn-primary  m-1"
          >
            Copy Text
          </button>
        </CopyToClipboard>

        <button
          type="button"
          onClick={removeExtraSpace}
          className="btn btn-primary  m-1"
        >
          Remove Extra Spaces
        </button>
      </div>
      <div className="text-summury">
        <h1
          className=" px-4 text-center"
          style={{
            backgroundColor: `${border ? "orange" : "pink"}`
          }}
        >
          Your Text Summmuary
        </h1>
        <h5>
          {textValue.split(" ").length} words and {textValue.length} characters
        </h5>
        <h5>{0.008 * textValue.split(" ").length} Minutes read </h5>
      </div>
      <div className="preview">
        <h1
          className=" px-4 text-center"
          style={{
            backgroundColor: `${border ? "orange" : "pink"}`
          }}
        >
          Preview
        </h1>
        <p> Enter something in the textbox above to preview it here</p>
        <hr />
        <h3> {textValue}</h3>
      </div>
    </div>
  );
}
export default AnalyzeCom;
