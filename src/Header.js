import React, {Component} from 'react';


class Header extends Component {

    constructor(props){
        super(props);
        this.yourname = "Tike"
        this.state = {};
    }


    sayhello(name){
        return "hello" + name
    }
    render() {
      const myName = "Tikelo"
      return(
        <div className="App">
            <h2>Just some sample data:{this.yourname}</h2>
            <Parent />
       
        </div>
        
      );
    }
}

class Parent extends Component {
    render() {
        return(
            <div>
                <h1>I am the parent</h1>
                <Cars />
            </div>
        );
    }
}

class Cars extends Component{
    render(){
        return(
            <div>
                I am from cars component
            </div>
        );
    }
}


export default Header;