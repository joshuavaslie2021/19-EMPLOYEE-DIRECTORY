import React from 'react';
import Query from './Query'

export default function PageHeader({ handleQueryChange }) {
    return (
      <>
        <nav className="PageHeader">
          <div className="container d-flex justify-content-center">
            <div className="headerbar-brand ms-auto fas fa-users">
              <span className="navemp"> Employee Directory </span>
              <br></br>
              <span className="headersub">
                Click to filter by Column or use the Query to
                narrow your results.
              </span>
            </div>
          </div>
        </nav>
        <Query handleQueryChange={handleQueryChange} />
      </>
    );
  }