import { useEffect, useState } from 'react';
import '../stylesheets/Home.css';
import base from '../api/base';

import Employee from './Employee';
import Addemployee from './Addemployee';

function Home() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    base('employees')
      .select({ view: 'Grid view' })
      .eachPage((records, fetchNextPage) => {
        setEmployees(records);
        fetchNextPage();
      });
  }, []);

  return (
    <div className="Home">
      <h3 className="app-heading mb-5 mt-4 fw-bolder">
        Airtable and React Employee CRUD Application
      </h3>
      <div className="row">
        {employees.length > 0 ? (
          <>
            {employees.map((e) => (
              <Employee key={e.id} employee={e} />
            ))}
          </>
        ) : (
          <div className="spinner-border mx-auto text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
      </div>
      <div>
        <Addemployee />
      </div>
    </div>
  );
}

export default Home;
