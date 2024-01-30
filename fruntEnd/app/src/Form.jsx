import style from "./Form.module.css";
import { useState } from "react";

function Form() {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [street, setstreet] = useState("");
  const [address, setaddress] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");

  function handler(event) {
    event.preventDefault();
    fetch("http://localhost:8080/customer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: fname,
        last_name: lname,
        street: street,
        address: address,
        city: city,
        state: state,
        email: email,
        phone: phone,
      }),
    });
  }
  return (
    <>
      <form style={{ display: "block" }} onSubmit={handler}>
        <input
          className={style.d}
          type="text"
          defaultValue={"first_name"}
          onChange={(e) => setfname(e.target.value)}
        ></input>
        <input
          className={style.d}
          type="text"
          defaultValue={"last_name"}
          onChange={(e) => setlname(e.target.value)}
        ></input>
        <input
          className={style.d}
          type="text"
          defaultValue={"street"}
          onChange={(e) => setstreet(e.target.value)}
        ></input>
        <input
          className={style.d}
          type="text"
          defaultValue={"address"}
          onChange={(e) => setaddress(e.target.value)}
        ></input>
        <input
          className={style.d}
          type="text"
          defaultValue={" city"}
          onChange={(e) => setcity(e.target.value)}
        ></input>
        <input
          className={style.d}
          type="text"
          defaultValue={"state"}
          onChange={(e) => setstate(e.target.value)}
        ></input>
        <input
          className={style.d}
          type="text"
          defaultValue={"email"}
          onChange={(e) => setemail(e.target.value)}
        ></input>
        <input
          className={style.d}
          type="text"
          defaultValue={"phone"}
          onChange={(e) => setphone(e.target.value)}
        ></input>
        <button className={style.d} style={{ color: "gray" }}>
          btn
        </button>
      </form>
    </>
  );
}
export default Form;
