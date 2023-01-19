import axios from "axios";
import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";

const columns = [
    {
        name : 'ID',
        selector : row => row.id,
        sortable : true
    },
    {
        name : 'Name',
        selector : row => row.name,
        sortable : true
    },
    {
        name : 'Age',
        selector : row => row.age,
        sortable : true
    },
];

const laravelController = "users";

function Employee() { 

    const [data, setData] = useState([]);
    const [id, setId] = useState(0);
    const [employeeName, setEmployeeName] = useState('');
    const [age, setAge] = useState(0);
    const [selectedRows, setSelectedRows] = useState([]);

    useEffect(() => {
        index();
    }, []);

    async function index() {
        axios.get(process.env.REACT_APP_API + laravelController)
            .then((response) => {
                setData(response.data)
            })
    }

    async function store() {

        const payload = {
            name : employeeName,
            age : age
        }

        axios.post(process.env.REACT_APP_API + laravelController, payload)
            .then((response) => {

                if (response.status === 201) 
                {
                    alert("Successfully saved")
                    index();
                } else 
                {
                    alert("Not saved")
                }
            })
    }

    async function update(id) {
        const payload = {
            name : employeeName,
            age : age
        }

        axios.put(process.env.REACT_APP_API + laravelController + "/" + id, payload)
            .then((response) => {
                if (response.status === 200) 
                {
                    alert("Successfully updated")
                    index();
                } else 
                {
                    alert("Not saved")
                }
            })
    }

    async function destroy(id) {
        axios.delete(process.env.REACT_APP_API + laravelController + "/" + id)
            .then((response) => {
                if (response.status === 200) 
                {
                    index();
                }
            })
    }



    const handleEmployeeName = (element) => {
        setEmployeeName(element.target.value);
    }

    const handleAge = (element) => {
        setAge(element.target.value);
    }

    const handleSave = () => {
        store();
    }

    const handleRowSelected = ({selectedRows}) => {
        setSelectedRows(selectedRows)

        if (selectedRows.length === 1) {
            setId(selectedRows[0].id);
            setEmployeeName(selectedRows[0].name)
            setAge(selectedRows[0].age)
        }
    }

    const handleUpdate = () => {
        update(id)
    }

    const handleDelete = () => {
        for (let i = 0; i<selectedRows.length; i++) {
            destroy(selectedRows[i].id)
        }
    }

    return (
        <div>
            <div className="row">
                <div className="col-4 p-4">
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" value={employeeName} onChange={handleEmployeeName} className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Age</label>
                        <input type="number" value={age} onChange={handleAge} className="form-control" />
                    </div>
                    <button type="button" onClick={handleSave} className="btn btn-primary">SAVE</button>
                    <button type="button" onClick={handleUpdate} className="btn btn-success">UPDATE</button>
                    <button type="button" onClick={handleDelete} className="btn btn-danger">DELETE</button>
                </div>
                <div className="col-8">
                    <DataTable 
                        title="Employee List"
                        columns={columns}
                        data={data}
                        selectableRows
                        onSelectedRowsChange={handleRowSelected}
                    />
                </div>

            </div>
        </div>
    );
};

export default Employee;