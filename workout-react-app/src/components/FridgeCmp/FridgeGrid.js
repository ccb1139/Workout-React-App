import React from 'react'
import { AgGridReact } from "ag-grid-react";
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css';


function FridgeGrid(_fridge, _setFridge) {
    console.log(_fridge)
  return (
    <div>
        <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
            <AgGridReact
                rowData={_fridge?? []}
                columnDefs={[
                    { headerName: "Food Name", field: "foodName", editable: true },
                    { headerName: "Expiration Date", field: "expirationDate", editable: true },
                    { headerName: "Food Category", field: "foodCategoryName", editable: true },
                ]}
                // onGridReady={params => {
                //     params.api.sizeColumnsToFit();
                // }}
                // onCellValueChanged={params => {
                //     const updatedFoods = [...fridge];
                //     updatedFoods[params.rowIndex] = params.data;
                //     setFridge(updatedFoods);
                // }}
            />


        </div>  
    </div>
  )
}

export default FridgeGrid