import React, { useState } from 'react'

export default function Form() {

    const [addData, setAddData] = useState({
        title: "",    
        body:  "",
    });

    const handleInputChange = (e) =>{
      const name = e.target.name;
      const value = e.target.value;

      setAddData((prev) => {

        return {
     ... prev,
      [name]: value,}
      })
    }

    // form submision

    const handleFormSubmit = () => {
      e.preventDefault();
      addPostData();

    }
  return (
   <>
    <form onSubmit={handleFormSubmit}>
  <div >
    <label htmlFor="title"></label>
    <input type="text"  
    id="title"
     name='title'
      placeholder='Add Title'

      value={addData.title}
      onChange = {handleInputChange}
      />
  </div>
  <div >
    <label htmlFor='body'></label>
    <input type="text"
     autoComplete='off' 
     id="body" 
     name='body'
     placeholder="Add Post"

     value={addData.body}
     onChange = {handleInputChange}
   
     />
  </div>
  <div>
    <button type="submit">Add</button>
  </div>
</form>
</>
  )
  
}
