import React from 'react';

class Calculator extends React.Component{
  constructor(props){
    super(props);
    //your code here
    this.state = {
      result: "",
      num1: "",
      num2: ""
    };
  }

  //your code here
  setNum1(e){
    this.setState({num1: e.currentTarget.value});
  }

  setNum2(e){
    this.setState({num2: e.currentTarget.value});
  }

  add(e){
    const {num1, num2, result} = this.state;
    e.preventDefault();
    this.setState({result: parseFloat(num1) + parseFloat(num2)});
    this.setState({num1: ""});
    this.setState({num2: ""});
  }
  subtract(e){
    const {num1, num2, result} = this.state;
    e.preventDefault();
    this.setState({result: parseFloat(num1) - parseFloat(num2)});
    this.setState({num1: ""});
    this.setState({num2: ""});
  }
  multiply(e){
    const {num1, num2, result} = this.state;
    e.preventDefault();
    this.setState({result: parseFloat(num1) * parseFloat(num2)});
    this.setState({num1: ""});
    this.setState({num2: ""});
  }
  divide(e){
    const {num1, num2, result} = this.state;
    e.preventDefault();
    this.setState({result: parseFloat(num1) / parseFloat(num2)});
    this.setState({num1: ""});
    this.setState({num2: ""});
  }

  render(){
    const {num1, num2, result} = this.state;
    return (
      <div>
        <h1>{result}</h1>
        <form>
          <input type="number" onChange={this.setNum1.bind(this)} value={num1}></input>
          <input type="number" onChange={this.setNum2.bind(this)} value={num2}></input>
        </form>
        <button onClick={this.add.bind(this)}>+</button>
        <button onClick={this.subtract.bind(this)}>-</button>
        <button onClick={this.multiply.bind(this)}>*</button>
        <button onClick={this.divide.bind(this)}>/</button>
      </div>
    );
  }
}

export default Calculator;
