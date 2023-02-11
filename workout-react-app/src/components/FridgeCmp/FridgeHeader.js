import React, { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

function FridgeHeader({ fridge, setFridge, setView }) {
  const [refereceFridge, setReferenceFridge] = useState([]);
  const [viewType, setViewType] = useState("1");
  const [sortType, setSortType] = useState("0");
  const today = new Date();

  useEffect(() => {
    // console.log(viewType)
    setView(viewType);
  }, [viewType]);

  useEffect(() => {
    if (sortType === "1") {
      setFridge(
        [...fridge].sort((a, b) => {
          const aDate = new Date(a.expirationDate);
          const bDate = new Date(b.expirationDate);

          // const diffA = Math.abs(today - aDate);
          // const diffB = Math.abs(today - bDate);

          const diffA = (today - aDate);
          const diffB = (today - bDate);

          return diffB - diffA;
        })
      );
    } else {
      setFridge([...refereceFridge]);
    }
  }, [sortType]);

  function sortFoods(event) {
    if (refereceFridge.length === 0) {
      setReferenceFridge([...fridge]);
    }
    const tmpSrt = event.target.getAttribute("value");

    if(sortType === "0") { setSortType("1"); }
    else if (sortType === "1") { setSortType("0"); }
  }

  return (
    <div className="row px-3">
      <div className="col-6">
        <h2>My Fridge</h2>
        <p>Today's Date: {today.toISOString().substring(0, 10)}</p>
        <p>Number of Food Items: {fridge?.length} </p>
      </div>
      <div className="col-6">
        <div className="d-flex align-items-end flex-column mt-2">
          <div className=" col ">
            <ButtonGroup className="">
              <ToggleButton
                id="radio1"
                type="radio"
                variant="secondary"
                name="radio"
                value="1"
                checked={viewType === "1"}
                onChange={(e) => setViewType(e.currentTarget.value)}
                size="sm"
              >
                List View
              </ToggleButton>
              <ToggleButton
                id="radio2"
                type="radio"
                variant="secondary"
                name="radio"
                value="2"
                checked={viewType === "2"}
                onChange={(e) => setViewType(e.currentTarget.value)}
                size="sm"
              >
                Category View
              </ToggleButton>
            </ButtonGroup>
            
          </div>
          <div className="col">
          <ToggleButton 
              className=""
              id="expDateSort"
              type="checkbox"
              variant="secondary"
              checked={sortType === "1"}
              value="1"
              onChange={sortFoods}
              size="sm"
            >
              Sort By Expiration Date
            </ToggleButton>
          </div>
 

          
        </div>
      </div>
    </div>
  );
}

export default FridgeHeader;
