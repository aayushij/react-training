import React from 'react';

const AddEmployee = (props) => {
    return <div>
        <form onSubmit={props.handelSubmit}>
            <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" placeholder="Enter name" value={props.name} onChange={ props.handleInputs} name="name" />
            </div>
            <div className="form-group">
                <label>Designation</label>
                <input type="text" className="form-control" placeholder="Enter designation" value={props.designation} onChange={props.handleInputs} name="designation" />
            </div>
            <div className="form-group">
                <label>Age</label>
                <input type="text" className="form-control" placeholder="Enter age" value={props.age} onChange={props.handleInputs} name="age" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
}

export default AddEmployee;