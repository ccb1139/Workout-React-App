import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

function FridgeSearchBar({search, setSearch}) {

  function clearSearch() {
    setSearch("");
  }
  

  return (
    <InputGroup className="pt-1" size="sm">
        
        <Form.Control
          placeholder="Search"
          aria-label="Search"

          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button variant="outline-secondary" id="button-addon1" onClick={clearSearch}>
          Clear
        </Button>
      </InputGroup>
  )
}

export default FridgeSearchBar