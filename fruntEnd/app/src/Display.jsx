import { useEffect, useState } from "react";

function Display() {
  const [state, setState] = useState([]);
  useEffect(function () {
    fetch("http://localhost:8080/customers")
      .then((e) => e.json())
      .then((response) => setState(response));
  }, []);
  return (
    <>
      {state.map((x) => {
        return (
          <>
            {" "}
            <div className="dis">{x.firstName}</div>
            <div className="dis">{x.lastName}</div>
            <div className="dis">{x.city}</div>
            <div className="dis">{x.street}</div>
            <div className="dis">{x.address}</div>
            <div className="dis">{x.state}</div>
            <div className="dis">{x.email}</div>
            <div className="dis">{x.phone}</div>
          </>
        );
      })}
    </>
  );
}
export default Display;
