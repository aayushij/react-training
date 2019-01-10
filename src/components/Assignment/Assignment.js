import React,{Component} from 'react';
import Validation from './Validation';
import CharComponent from './CharComponent';

class Assignment extends Component{
    constructor(props){
        super(props)
        this.state = {
            name:""
        }
    }
    handelChange = (event) => {
        let name = event.target.value;
        console.log(name);
        this.setState({name})
    }
    handelDelete = (index) => {
        console.log(index);
        console.log("index");
        let name = this.state.name;
        name = name.split('');
        name.splice(index, 1);
        name = name.join('');
        this.setState({name});
    }
    render(){
        return(
            <div>
                <p>Please Enter your name</p>
                Name: <input 
                    type="text" 
                    name="name" 
                    value = {this.state.name} 
                    onChange = {this.handelChange} 
                />
                {this.state.name.length > 0 ?
                    <div>
                        <Validation 
                            nameLength = {this.state.name.length} 
                        />
                        <CharComponent 
                            name = {this.state.name.split('')} 
                            handelDelete = {this.handelDelete} 
                        />
                    </div>
                    : null
                }
            </div>
        )
    }
}
export default Assignment;