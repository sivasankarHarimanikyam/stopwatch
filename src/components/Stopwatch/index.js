// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: 0,
      isRunning: false,
    }
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      const {isRunning} = this.state
      if (isRunning) {
        this.setState(prevState => ({time: prevState.time + 1}))
      }
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  onTimeRunner = () => {
    const {time} = this.state
    const minutes = Math.floor((time % 3600) / 60)
    const filterMinute = minutes > 9 ? minutes : `0${minutes}`
    const seconds = Math.floor(time % 60)
    const filterSecond = seconds > 9 ? seconds : `0${seconds}`
    return `${filterMinute}:${filterSecond}`
  }

  onStart = () => {
    this.setState({isRunning: true})
  }

  onStop = () => {
    this.setState({isRunning: false})
  }

  onReset = () => {
    this.setState({time: 0})
  }

  render() {
    return (
      <div className="bg-container">
        <div>
          <h1>Stopwatch</h1>
          <div className="sub-container">
            <div className="timer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p>Timer</p>
            </div>
            <h1 className="paragraph">{this.onTimeRunner()}</h1>
            <div>
              <button className="btn btn1" type="button" onClick={this.onStart}>
                Start
              </button>
              <button className="btn btn2" type="button" onClick={this.onStop}>
                Stop
              </button>
              <button className="btn btn3" type="button" onClick={this.onReset}>
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
