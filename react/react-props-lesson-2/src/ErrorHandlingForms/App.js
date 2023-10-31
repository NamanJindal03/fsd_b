import React, { useState } from "react";
import './style.css'

export default function App() {
  // const [formName, setFormName] = useState("");
  // const [formEmail, setFormEmail] = useState("");
  // const [formColorDropdown, setColorDropdown] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    color: "red",
  });
  const [formErrData, setFormErrData] = useState({
    name: "",
    email: "",
    color: "",
  })

  function handleFormData(e) {
    //setFormData()
    const { name, value } = e.target;
    setFormErrData((prevData)=>({
        ...prevData,
        [name]: ''
    }))
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  function formValidation(){
    let isError = false;
    //here I will be validating my form
    for(let field in formData){
        if(formData[field] === ""){
            formErrData[field] = `${field} is a required value`;
            isError = true;
        }
    }
    return isError;
  }
  function submitForm(e) {
    e.preventDefault();
    console.log(formData);
    //handled api call, I need to show the blanks again ->
    if(!formValidation()){
        return;
    }
    console.log("api call submitted");
    setFormData({
      name: "",
      email: "",
      color: "red",
    });
  }
  return (
    <form action="" onSubmit={submitForm} style={{display:"flex", flexDirection: "column", rowGap: "20px"}}>
      <div className="flex">
        <input
          type="text"
          name="name"
          onChange={handleFormData}
          value={formData.name}
        />
        {formErrData.name && <div>{formErrData.name}</div>}
      </div>

      <div className="flex">
        <input
          type="text"
          name="email"
          onChange={handleFormData}
          value={formData.email}
        />
        {formErrData.email && <div>{formErrData.email}</div>}
      </div>

      <div className="flex">
        <select name="color" value={formData.color} onChange={handleFormData}>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
        </select>
        {formErrData.color && <div>{formErrData.color}</div>}

      </div>

      <button>submit form</button>
    </form>
  );
}
