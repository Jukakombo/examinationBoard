import React, { useState } from "react";
import "./index.css";
function HeroSliderOne() {
  // const history = useHistory();
  const [showError, setShowError] = useState(false);
  const userCode = () => {
    //
  };

  const secretCodes = [
    9078654312, 9078654310, 9078654311, 9078654313, 90786543124,
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    secretCodes.filter((query) => query.includes(userCode));
    // if (query === userCode) {
    //   // history.push("/index-number");
    //   setShowError(true);
    // } else {
    //   // show error message to students
    //   setShowError(false);
    // }
  };
  return (
    <div
      className="form"
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#03175E",
        minHeight: "100vh",
        minWidth: "100wv",
        color: "white",
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="form"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <label for="scratchNumber" style={{ fontSize: "1.5rem" }}>
          Please enter your Secret Code!
        </label>
        <input
          style={{
            padding: "10px",
            width: "600px",
            borderRadius: "5px",
            fontSize: "1.5rem",
            outline: "none",
            border: "none,",
          }}
          // onChange={userCode}
          // value={userCode}
          type="tel"
          required
          pattern="[0-9]{10}"
          maxLength="10"
          id="scratchNumber"
          placeholder="Enter the 10 digits format (0-9)Secret Number"
        />
        <button
          style={{
            fontSize: "1.5rem",
            border: "none,",
            borderRadius: "5px",
            marginTop: "10px",
            padding: "10px",
            backgroundColor: "#E2614A",
            outline: "none",
          }}
        >
          Submit
        </button>
        {showError && (
          <div className="errorhandler">
            Please make sure you have entered the correct valid scratch card
          </div>
        )}
      </form>
    </div>
  );
}

export default HeroSliderOne;
