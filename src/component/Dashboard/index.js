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
            })
            ;
    }
    render() {
        const data = this.props.employee.map((element, index) => {
            return <tr key={index}>
                <td onClick={(e) => this.props.handleClick(element)}>{element.name}</td>
                <td onClick={(e) => this.props.handleDelete(index)}>Delete</td>
            </tr>
        })
        return (
            <div>
                <button type="button" className="btn btn-primary" onClick={(e) => this.props.handleAdd(e)}>Add contact</button>
                <button type="button" className="btn btn-primary" onClick={this.printDocument}>Export Pdf</button>
                <table id="divToPrint" className={"table-bordered responsive table table-striped table-hover"}>
                    <tr>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                    <tbody>
                        {data}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Dashboard;