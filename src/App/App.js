import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import FlexH from "./components/layout/FlexH/FlexH";
import FlexW from "./components/layout/FlexW/FlexW";
import MemeSvgViewer from "./components/ui/MemeSvgViewer/MemeSvgViewer";
import Navbar from "./components/ui/Navbar/Navbar";
import MemeForm from "./components/ui/MemeForm/MemeForm";
import { REST_ADR, REST_RESSOURCES } from "./config/config";

const appInitialState = {
  meme: {
    text: "le react c'est cool",
    x: 20,
    y: 20,
    fontSize: 20,
    fontWeight: 700,
    color: "#E2E",
    imageId: 0,
    underline: true,
    italic: false,
    name: "mon 1er meme",
  },
  images: [],
  memes: [],
};

let isLoaded = false;

function App(props) {
  const [state, setstate] = useState(appInitialState);
  
  useEffect(() => {
    if(isLoaded){return}
    isLoaded=true;
    const promiseMemes = fetch(`${REST_ADR}${REST_RESSOURCES.MEMES}`, {
      headers: { Accept: "application/json" },
      method: "GET",
    }).then((f) => {
      console.log(f);
      return f.json();
    });
    const promiseImage = fetch(`${REST_ADR}${REST_RESSOURCES.IMAGES}`)
    .then((f) => {
        console.log(f);
        return f.json();
      });
    Promise.all([promiseImage, promiseMemes]).then((tab_promiseObject)=>{
      setstate({
        ...state,
        images: tab_promiseObject[0],
        memes: tab_promiseObject[1],
      });
    });
  }, []);
  return (
    <div className="App" style={{ height: "90vh" }}>
      <Navbar />
      <FlexH>
        <FlexW>
          <MemeSvgViewer
            meme={state.meme}
            image={state.images.find((img) => img.id === state.meme.imageId)}
          />

          <MemeForm
            meme={state.meme}
            image={state.images}
            onFormChange={(newMeme) => {
              setstate({ ...state, meme: newMeme });
            }}
          />
        </FlexW>
      </FlexH>

      <div>Footer</div>
    </div>
  );
}

App.propTypes = {};

export default App;
