import React,{Component} from 'react';
import Dashboard from './../../component/Dashboard';
import EmployeeDetail from './../../component/EmployeeDetail';
import AddEmployee from './../../component/AddEmployee';

class EmployeeList extends Component{
    constructor(props   ){
        super(props);
        this.state = {
            employee : [
                {
                    id:1,
                    name: 'Aayushi',
                    designation: 'Developer',
                    age: 15
                },{
                    id: 2,
                    name: 'Ramesh',
                    designation: 'Developer',
                    age: 15
                },{
                    id: 3,
                    name: 'Ram',
                    designation: 'Developer',
                    age: 15
                },{
                    id: 4,
                    name: 'Shyam',
                    designation: 'Developer',
                    age: 15
                },{
                    id: 5,
                    name: 'Alex',
                    designation: 'Developer',
                    age: 15
                },{
                    id: 6,
                    name: 'Steeve',
                    designation: 'Developer',
                    age: 15
                },{
                    id: 7,
                    name: 'Geeta',
                    designation: 'Developer',
                    age: 15
                },{
                    id: 8,
                    name: 'Ankita',
                    designation: 'Developer',
                    age: 15
                },{
                    id: 9,
                    name: 'John',
                    designation: 'Developer',
                    age: 15
                },{
                    id: 10,
                    name: 'Bob',
                    designation: 'Developer',
                    age: 15
                },{
                    id: 11,
                    name: 'Mischel',
                    designation: 'Developer',
                    age: 15
                },
            ],
            name: '',
            designation: '',
            age: '',
            showDetails:false,
            employeeData:'',
            showList:true,
            addContactForm:false,
            search:''
        }
    }
    handleDelete = (index) => {
        let employeeList = [...this.state.employee];
        employeeList.splice(index, 1);
        this.setState({ employee: employeeList });
    }
    handleClick(element){
        this.setState({
            showDetails:true,
            employeeData:element,
            showList:false
        })
    }
    handleBack = () => {
        this.setState({
            showDetails:false,
            employeeData:'',
            showList:true,
            addContactForm:false
        })
    }
    handleAdd = () => {
        this.setState({
          addContactForm: true,
          showDetails:false,
          showList:false
        });
    }
    handleInputs = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    handleSearch = (e) => {
        let result = [...this.state.employee];
        result = result.filter(function (item) {
          return (item.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1);
        });
        this.setState({
          search: e.target.value,
          employee: result
        });
    }
    handelSubmit = (e) => {
        e.preventDefault();
        console.log('handleAdd')
        const {name, designation, age } = this.state
        let newList = [...this.state.employee];
        newList.push({
            name,
            designation,
            age
        });
        this.setState({ 
            employee: newList, 
            addContactForm: false, 
            showList:true,
            name: '', 
            designation: '',
            age: '',
            search: '',
        });
    }
    handleMultipleDelete = (checked) => {
        let obj = Object.keys(checked)
            .filter(function (k) { return checked[k] })
            .map(Number);
        console.log(obj);
        const employee = this.state.employee;
        obj.map((element) => {
            employee.splice(element, 1);
        });
        console.log(employee);
        console.log("employee after delete");
    }
    render(){

        return(
            <div>
                <h2 className="text-center">Employee Information</h2>
                {
                    this.state.showList ? 
                        <Dashboard 
                            employee={this.state.employee} 
                            handleClick={this.handleClick.bind(this)} 
                            handleDelete={this.handleDelete.bind(this)} 
                            handleAdd={this.handleAdd}
                            handleMultipleDelete={this.handleMultipleDelete}
                            handleSearch={this.handleSearch}
                        /> 
                    : ('')
                }
                {
                    this.state.showDetails ? 
                        <EmployeeDetail employee={this.state.employeeData} handleBack={this.handleBack}/>
                    : ''
                }
                {
                    this.state.addContactForm ? 
                        <AddEmployee 
                            handleInputs = {this.handleInputs}
                            handelSubmit = {this.handelSubmit}
                        />
                    : ''
                }
            </div>
        )
    }
}

export default EmployeeList;