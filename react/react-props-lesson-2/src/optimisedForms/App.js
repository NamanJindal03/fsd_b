import React, {useState} from 'react'

export default function App() {
    // const [formName, setFormName] = useState("");
    // const [formEmail, setFormEmail] = useState("");
    // const [formColorDropdown, setColorDropdown] = useState("");
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        color: 'red'
    });
  
    function handleFormData(e) {
        //setFormData()
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }
    function submitForm(e){
        e.preventDefault();
        console.log(formData); 
        //handled api call, I need to show the blanks again -> 
        console.log('api call submitted')
        setFormData({
            name: '',
            email: '',
            color: 'red'
        })
    }
    return (
      <form action="" onSubmit={submitForm}>
        <input
          type="text"
          name="name"
          onChange={handleFormData}
          value={formData.name}
        />
  
        <input
          type="text"
          name="email"
          onChange={handleFormData}
          value={formData.email}
        />
        <select 
            name="color"
            value={formData.color} 
            onChange={handleFormData}
        >
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
        </select>
        <button >submit form</button>
      </form>
    );
}
