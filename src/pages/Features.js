import DataTable from 'react-data-table-component';
import React, { useState } from 'react';

const columns = [
    {
        name: 'Title',
        selector: row => row.title,
        sortable: true,
    },
    {
        name: 'Year',
        selector: row => row.year,
        sortable: true,
    },
];

function Features() { 

    const [id, setId] = useState(0);
    const [title, setTitle] = useState('');
    const [year, setYear] = useState(0);
    const [data, setData] = useState([{
        id: 1,
        title: 'Beetlejuice',
        year: '1988',
    }]);

    const handleChangeTitleInput = (element) => {
        setTitle(element.target.value);//title = $("#id").val()
    }

    const handleChangeYearInput = (element) => {
        setYear(element.target.value);
    }

    const handleSubmitClick = () => {
        setId(data.length + 1);

        setData(oldData => [{
            id : id,
            title : title,
            year : year
        }, ...oldData]);
    }

    return (
        <div>
            <div className='row'>
                <div className='col-4 p-4'>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                        <input onChange={handleChangeTitleInput} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Year</label>
                        <input type="number" onChange={handleChangeYearInput} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="button" onClick={handleSubmitClick} className="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div className='col-8 p-4'>
                    <DataTable
                        title="Feature List"
                        columns={columns}
                        data={data}
                        pagination
                        striped
                        highlightOnHover
                        dense
                    />
                </div>
            </div>

        </div>
    );
};

export default Features;