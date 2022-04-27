import React, { useState } from 'react'
import PropTypes from 'prop-types'
import FlexH from './components/layout/FlexH/FlexH'
import FlexW from './components/layout/FlexW/FlexW'
import MemeSvgViewer from './components/ui/MemeSvgViewer/MemeSvgViewer'
import Navbar from './components/ui/Navbar/Navbar'

const appInitialState = {
  meme: {
    text: "le react c'est cool",
    x:20,
    y:20,
    fontSize: 20,
    fontWeight: 700,
    color:"#ACB0A1",
    imageId:0,
    underline: true,
    italic:false,
    name:"mon 1er meme",
  },
  images: [
    {
      id:0,
      name:'image',
      url:'image2.jpeg',
      w:1200,
      h:900,
    }
  ]
}
function App(props) {
  const [state, setstate] = useState( appInitialState )
  return (
    <div className="App" style={{height:'90vh'}}>
      <Navbar/>
      <FlexH>
        <FlexW>
        <MemeSvgViewer meme={state.meme} image={state.images.find((img)=>img.id===state.meme.imageId)}/>
          <div>Editor</div>
        </FlexW>
      </FlexH>
      
      <div>Footer</div>
    </div>
  )
}

App.propTypes = {}

export default App
