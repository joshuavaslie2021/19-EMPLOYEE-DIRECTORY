import React from "react";

function Query({ handleQueryChange }) {
  return (
    <div className="Query d-flex justify-content-center">
      <form className="form-inline">
        <input
          className="form-control"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={handleQueryChange}
        />
      </form>
    </div>
  );
}

export default Query;