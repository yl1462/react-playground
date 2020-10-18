import React from 'react';
import Split from './composition/Split';
import './App.css';
// import Tooltip from './composition/Tooltip';
// import HelloWorld from './state-drills/HelloWorld'
// import Bomb from './state-drills/Boom'
import RouletteGun from './state-drills/RouletteGun'

// make 2 tooltips here and another inside the App directly
// const firstTooltip = (
//   <Tooltip message='tooltip message'>
//    ipsum
//   </Tooltip>
// )
// const secondTooltip = (
//   <Tooltip message='another tooltip message'>
//     officiis
//   </Tooltip>
// )

function App() {
  return (
    <main className='App'>
      <RouletteGun />
      {/* <HelloWorld /> */}
      {/* <Bomb /> */}
      {/* <Split className='left' flexBasis='2'>
        This is the content for the left `Split`. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?
      </Split>
      <Split className='right'>
        This is the content for the right `Split`. Inventore aliquid cupiditate suscipit repellat. Quaerat quis officiis quam fuga. Aliquid quo possimus id soluta aspernatur.
      </Split> */}
    </main>
  );
}

export default App;