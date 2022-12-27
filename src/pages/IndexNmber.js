import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts";

const IndexNmber = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Voopo | Index Number</title>
        <meta
          name="description"
          content="Any student is allow to check is result using their index number"
        />
      </MetaTags>
      <LayoutOne>
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
            className="form"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <label for="scratchNumber" style={{ fontSize: "1.5rem" }}>
              Please enter your index number
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
              type="tel"
              required
              pattern="[0-9]{4}"
              maxLength="4"
              id="scratchNumber"
              placeholder="Enter your index Number 4 digits"
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
              Check my Result
            </button>
          </form>
        </div>
        <>
          {/* result table start */}
          <div id="result" className="table_result">
            <table>
              <thead>
                <th>Family Name:</th>
                <th>Given Name:</th>
                <th>Section:</th>
                <th>Percentage:</th>
                <th>Download</th>
              </thead>
              <td>Jukakombo</td>
              <td>Alison Magid Jula</td>
              <td>Science</td>
              <td>70%</td>
              <a href="https://www.result.com" download>
                <td>Download</td>
              </a>
            </table>
          </div>
          {/* result table start */}
        </>
      </LayoutOne>
    </Fragment>
  );
};

export default IndexNmber;
