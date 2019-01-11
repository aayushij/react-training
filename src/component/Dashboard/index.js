import React, { Component } from 'react';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

class Dashboard extends Component {
    printDocument = () => {
        const input = document.getElementById('divToPrint');
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                pdf.addImage(imgData, 'JPEG', 0, 0);
                // pdf.output('dataurlnewwindow');
                pdf.save("download.pdf");
            });
    }
    render() {
        const data = this.props.employee.map((element, index) => {
            return <tr key={index}>
                <td onClick={(e) => this.props.handleClick(element)}>{element.name}</td>
                <td onClick={(e) => this.props.handleDelete(index)} className={"btn btn-danger"}>Delete</td>
            </tr>
        })
        return (
            <div>
                <button type="button" className="btn btn-primary" onClick={(e) => this.props.handleAdd(e)}>Add Employee</button>&nbsp;
                <button type="button" className="btn btn-primary" onClick={this.printDocument}>Export Pdf</button>
                <input 
                    type="text" 
                    placeholder="Search" 
                    name="search" 
                    className="form-control pull-right" 
                    style={{width: '250px', margin: '0 auto', marginBottom: '20px'}} 
                    aria-describedby="search" 
                    value={this.props.search} 
                    onChange={this.props.handleSearch}
                />
                <div className="col-md-6 col-md-offset-3">
                    <table id="divToPrint" className={"table-bordered responsive table table-striped table-hover"}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Dashboard;