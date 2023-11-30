import React from "react"

class Profil extends React.Component{
    constructor(){
        super()
        this.state ={
            Person : {
                fullName : "Mohamed Boudhir",
                bio : "Student",
                imgSrc : "https://gomycodelearndev.blob.core.windows.net/profiles/a0255c6c-3081-493c-b459-ff451967b656-133427009892463391.jpg",
                profession : "MERN Dev",
            },
            count : 0
        }
    }

    componentDidMount(){
        setInterval(()=> this.setState({count : this.state.count +1}), 1000);
    }

    render(){
        return(
            <div>
                <h2>Profil Component</h2>
                <h1>{this.state.count}</h1>
                <h3>{this.state.Person.fullName}</h3>
                <h4>{this.state.Person.bio}</h4>
                <img src={this.state.Person.imgSrc} alt="Not Found"/>
                <h5>{this.state.Person.profession}</h5>
            </div>
        )
        }
}

export default Profil