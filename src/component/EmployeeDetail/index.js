import React,{ Component } from 'react';
import axios from 'axios';

class EmployeeDetail extends Component {
  constructor(props){
    super(props);
    this.state = {
      user:''
    }
  }
  componentDidMount(){
    axios.get(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`).then(response => {
      console.log(response.data);
      this.setState({user:response.data});
    }).catch(error => {
      console.log(error);
    })
  }
  render(){
    console.log(this.state.user);
    return (
      <div>
        <br/>
        {this.state.user ? 
          <div>
            {/* <p onClick={props.handleBack}>Back</p> */}
            <h2>Employee details</h2>
            <p>Name: {this.state.user.name}</p>
            <p>Website: {this.state.user.website}</p>
            <p>Email: {this.state.user.email}</p>
          </div>
          : null
        }
      </div>
    );
  }
}

export default EmployeeDetail;