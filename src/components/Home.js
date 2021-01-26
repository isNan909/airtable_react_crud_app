import { useEffect, useState } from 'react';
import '../stylesheets/Home.css';
import base from '../api/base';

import Employee from './Employee';

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
      <h2 className="app-heading">
        Airtable and React Employee CRUD Application
      </h2>
      {employees.map((e) => (
        <Employee key={e.id} employee={e} />
      ))}
    </div>
  );
}

export default Home;
