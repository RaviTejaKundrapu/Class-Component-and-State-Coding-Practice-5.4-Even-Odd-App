import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {generatedNumber: 0, result: 'Even'}
  
    resultGot = () => {
    const newNumber = Math.ceil(Math.random() * 100)
    const processing = newNumber % 2 === 0 ? 'Even' : 'Odd'

    this.setState({generatedNumber: newNumber, result: processing}) // general notation 
    //this.setState({generatedNumber: newNumber, result}) short hand notation of result
  }

  render() {
    const {generatedNumber, result} = this.state
    return (
      <div className="app-container">
        <div className="bg-container">
          <h1 className="count">Count {generatedNumber}</h1>
          <p className="result">Count is {result}</p>
          <button className="button" type="button" onClick={this.resultGot}>
            Increment
          </button>
          <p className="note">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
