import React, { useRef } from 'react';

function Addemployee() {
  const nameRef = useRef();
  const positionRef = useRef();
  const emailRef = useRef();
  const numberRef = useRef();
  const startedRef = useRef();

  const addEmployee = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const position = positionRef.current.value;
    const email = emailRef.current.value;
    const number = numberRef.current.value;
    const started = startedRef.current.value;
    console.log({ name, position, email, number, started });
  };
  return (
    <div className="mt-5 card p-5 form-add">
      <h4 className="mb-5">Add Employees</h4>
      <form>
        <div className="mb-3">
          <label
            htmlFor="exampleInputEmail1"
            className="form-label text-start d-block"
          >
            Employee Name
          </label>
          <input
            type="name"
            className="form-control"
            id="exampleInputName"
            aria-describedby="nameHelp"
            ref={nameRef}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleInputPassword1"
            className="form-label text-start d-block"
          >
            Title of Position
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleTitle"
            ref={positionRef}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleInputEmail1"
            className="form-label text-start d-block"
          >
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            ref={emailRef}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleInputPassword1"
            className="form-label text-start d-block"
          >
            Phone Number
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputNumber"
            ref={numberRef}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleInputPassword1"
            className="form-label text-start d-block"
          >
            Started Date
          </label>
          <input
            type="date"
            className="form-control"
            id="exampleDate"
            ref={startedRef}
          />
        </div>
        <button
          type="submit"
          onClick={addEmployee}
          className="mt-4 btn btn-primary d-block"
        >
          Add New Employees
        </button>
      </form>
    </div>
  );
}

export default Addemployee;
