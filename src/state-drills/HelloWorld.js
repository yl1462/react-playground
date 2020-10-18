import React from 'react'

export default class HelloWorld extends React.Component {
  state = {
    who: 'world'
  }


  handleClick = (who) => {
    this.setState({
      who
    })
  }

  render(){
    


    return (
      <div>
        <p>Hello, {this.state.who}</p>
        <button onClick={()=> this.handleClick('world')}>world</button>
        <button onClick={()=> this.handleClick('friend!')}>friend</button>
        <button onClick={()=> this.handleClick('react')}>React</button>
      </div>
    )
  }
}