import React, {Component} from 'react';
import { Plataform , Text, View, StyleSheet, StatusBar} from 'react-native';
import Button from './src/components/Button';
import Display from './src/components/Display';


const initialState = {
  displayValue:'0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
}


export default class App extends Component {

  state = {...initialState}

  addDigit = n => {
    
    const clearDisplay = this.state.displayValue === "0"
      || this.state.clearDisplay

    if(n === '.' && !clearDisplay 
    && this.state.displayValue.includes('.')){

      return
    }

    const currentValue = clearDisplay ? '' : this.state.displayValue
    const displayValue = currentValue + n 
    this.setState({displayValue, clearDisplay: false})

    if(n !== '.'){
      const newValue = parseFloat(displayValue)
      const values = [...this.state.values]
      values[this.state.current] = newValue
      this.setState({ values })
    }

  }

  clearMemory = () => {
    this.setState({...initialState})
  }

  setOperation = operation => {
    if(this.state.current === 0) {
      this.setState({ operation, current: 1, clearDisplay: true })
    } else {
      const equals = operation === '='
      const values = [...this.state.values]
      // try {
      //   values[0] = 
          
      // } catch (e) {
      //   values[0] = this.state.values[0]
      // }

      if (this.state.operation === '+') { values[0] = parseFloat(values[0]) + parseFloat(values[1]) }

      if (this.state.operation === '-') { values[0] = parseFloat(values[0]) - parseFloat(values[1]) }

      if (this.state.operation === '*') { values[0] = parseFloat(values[0]) * parseFloat(values[1]) }

      if (this.state.operation === '/') { values[0] = parseFloat(values[0]) / parseFloat(values[1]) }

      values[1] = 0
      this.setState({
        displayValue: `${values[0]}`,
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: true,
        values,
      })
    }
  }

  render(){
    return (
      <View style={Style.Container}>
        <StatusBar backgroundColor='rgba(0,0,0,0.9)' barStyle='light-content'/>
        <Display value={this.state.displayValue} />
        <View style={Style.buttons}>
          <Button label='AC' triple onClick={this.clearMemory}/>
          <Button label='/' operation onClick={this.setOperation}/>
          <Button label='7' onClick={this.addDigit}/>
          <Button label='8' onClick={this.addDigit}/>
          <Button label='9' onClick={this.addDigit}/>
          <Button label='*' operation onClick={this.setOperation}/>
          <Button label='4' onClick={this.addDigit}/>
          <Button label='5' onClick={this.addDigit}/>
          <Button label='6' onClick={this.addDigit}/>
          <Button label='-' operation onClick={this.setOperation}/>
          <Button label='1' onClick={this.addDigit}/>
          <Button label='2' onClick={this.addDigit}/>
          <Button label='3' onClick={this.addDigit}/>
          <Button label='+' operation onClick={this.setOperation}/>
          <Button label='0' double onClick={this.addDigit}/>
          <Button label='.' onClick={this.addDigit}/>
          <Button label='=' operation onClick={this.setOperation}/>
        </View>
      </View>
      
    );
  }
}

const Style = StyleSheet.create({
  Container:{
      flex:1,
  },
  buttons:{
    flexDirection:'row',
    flexWrap:'wrap',
  }
})
