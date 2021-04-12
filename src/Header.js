import React, {Component} from 'react';


class Header extends Component {
    sayhello(name){
        return "hello" + name
    }
    render() {
      const myName = "Tikelo"
      return(
        <div className="App">
            <h2>Just some sample data:{this.sayhello(myName)}</h2>
       
        </div>
      );
    }
}

export default Header;