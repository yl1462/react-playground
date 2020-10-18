import React from 'react'

export default class Bomb extends React.Component {
  state = {
    count: 0,
    boom: ''
  }

  interval = null

  componentDidMount() {
    this.interval = setInterval(() => {
      
      this.setState({count: this.state.count + 1})
    }, 1000)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      if (this.state.count >= 8) {
        clearInterval(this.interval)
        this.setState({boom: 'BOOM!!!!'})
      } 
    }
  }


  render() {
    


    return (
      <div>
        {!this.state.boom && <p>{this.state.count % 2 === 0 ? 'tick' : 'tock'}</p>}
        <p>{this.state.boom}</p>
      </div>
    )
  }
}