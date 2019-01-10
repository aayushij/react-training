import React,{Component} from 'react';

class InputComponent extends Component{
    render(){
        return(
            <div>
                <input name="name" value={this.props.name} onChange={this.props.handleInput} />
            </div>
        )
    }

}
export default InputComponent;