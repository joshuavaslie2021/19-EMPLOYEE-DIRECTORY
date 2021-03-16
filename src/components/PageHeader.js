import React from 'react';
import Query from './Query'

export default function PageHeader({ handleQueryChange }) {
    return (
      <>
        <nav className="PageHeader">
          <div className="container d-flex justify-content-center">
            <div className="headerbar-brand ms-auto fas fa-users">
              <span className="headeremp"> Employee Directory </span>
              <br></br>
              
              
            </div>
          </div>
        </nav>
        <Query handleQueryChange={handleQueryChange} />
      </>
    );
  }