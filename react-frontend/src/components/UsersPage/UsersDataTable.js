
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';


const UsersDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.SKU}</p>
    const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.name}</p>
    const inputTemplate2 = (rowData, { rowIndex }) => <InputText value={rowData.age}  />
    const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.gender}</p>
    const inputTemplate4 = (rowData, { rowIndex }) => <InputText value={rowData.height}  />
    const inputTemplate5 = (rowData, { rowIndex }) => <InputText value={rowData.weight}  />
    const pTemplate6 = (rowData, { rowIndex }) => <p >{rowData.exercise}</p>
    const inputTemplate7 = (rowData, { rowIndex }) => <InputText value={rowData.duration}  />
    const pTemplate8 = (rowData, { rowIndex }) => <p >{rowData.calories}</p>

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10}>
            <Column field="SKU" header="SKU" body={pTemplate0} sortable style={{ minWidth: "8rem" }} />
            <Column field="name" header="Name" body={pTemplate1} sortable style={{ minWidth: "8rem" }} />
            <Column field="age" header="Age" body={inputTemplate2} sortable style={{ minWidth: "8rem" }} />
            <Column field="gender" header="Gender" body={pTemplate3} sortable style={{ minWidth: "8rem" }} />
            <Column field="height" header="Height" body={inputTemplate4} sortable style={{ minWidth: "8rem" }} />
            <Column field="weight" header="Weight" body={inputTemplate5} sortable style={{ minWidth: "8rem" }} />
            <Column field="exercise" header="Exercise" body={pTemplate6} sortable style={{ minWidth: "8rem" }} />
            <Column field="duration" header="Duration" body={inputTemplate7} sortable style={{ minWidth: "8rem" }} />
            <Column field="calories" header="Calories" body={pTemplate8} style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default UsersDataTable;