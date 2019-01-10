import React,{Component} from 'react'
class App extends Component{
    constructor(props){
        super(props)
        this.state={
            employee:[
                {
                    name:"Archana",
                    gender:"female",
                    role:"developer"
                },
                {
                    name:"Aayushi",
                    gender:"female",
                    role:"developer"
                },
                {
                    name:"Arpita",
                    gender:"female",
                    role:"developer"
                }
            ]
        }
    }
    render(){
        const data = () => {
          return this.state.employee.map((element, index) => {
            return <tr key={index}>
              <td>{element.name}</td>
              <td>{element.role}</td>
              <td>{element.gender}</td>
            </tr>
          })
        }
        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data()}
                    </tbody>
                </table>
            </div>
        )
    }

}
export default App;