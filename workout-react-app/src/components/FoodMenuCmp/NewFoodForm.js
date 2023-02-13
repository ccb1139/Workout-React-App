import React, { useState, useEffect } from "react";
import { FormControl, Form } from "react-bootstrap";

function NewFoodForm({Items, addNewFoodInCat, ind}) {
  const [value, setValue] = useState("");


  const handleSubmit = (event) => {
    // {"name":"Orange","category":"Fruits","_index":2,"selected":false}
    event.preventDefault();
    const len = Items.length;
    const foodItm = {
        name: value,
        category: Items[ind]["category"],
        _index: len,
        selected: false,
    }
    addNewFoodInCat(foodItm, ind);

  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };


  return (
    <Form onSubmit={handleSubmit}>
      <FormControl
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onKeyPress={handleKeyPress}
      />
    </Form>
  )
}

export default NewFoodForm