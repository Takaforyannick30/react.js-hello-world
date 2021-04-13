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
                <Cars msg="cars are cools" model="45644" ride={this.props.cars}/>
            </div>
        );
    }
}

Parent.defaultProps = {
  cars: ['BMW', 'MERC', 'TOYOTA', 'TESLA']
}

class Cars extends Component{
    render(){
        console.log(this.props)
        return(
            <div>
              <p> I am from cars component</p>
              <p>{this.props.msg}</p>
              <p>{this.props.model}</p>
              <p>{this.props.ride.map((item, i) => {
                  return " "+item;
              })}</p>


              
              

            </div>
        );
    }
}


export default Header;