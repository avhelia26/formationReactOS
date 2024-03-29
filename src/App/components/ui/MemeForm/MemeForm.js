import React from "react";
import Button from "../../Button/Button";
import styles from "./MemeForm.module.scss";
import PropTypes from "prop-types";

const MemeForm = (props) => {
  return (
    <>
      <div data-testid="MemeForm" className={styles.MemeForm}>
        <form>
          <h1>Titre</h1>
          <input
            type="text"
            id="f_titre"
            placeholder="saisir titre"
            value={props.meme.name}
            onChange={(evt)=>{

            }}
          />
          <hr />
          <h2>Image</h2>
          <select>
            <option value="-1">Aucune</option>
          </select>
          <hr />
          <h2>text</h2>
          <input type="text" value={props.meme.text} 
            onChange={(evt)=>{
              console.log(evt.target.value)
              props.onFormChange({...props.meme, text:evt.target.value})
            }}
          />
          <div className={styles.half}>
            <div>
              <label htmlFor="f_x">x:</label>
              <br />
              <input
                type="number"
                className={styles.smallInput}
                value={props.meme.x}
                onChange={(evt)=>{
                  console.log(evt.target.value)
                  props.onFormChange({...props.meme, x:evt.target.value})
                }}
              />
            </div>
            <div>
              <label htmlFor="f_y">y:</label>
              <br />
              <input
                type="number"
                className={styles.smallInput}
                value={props.meme.y}
                onChange={(evt)=>{
                  console.log(evt.target.value)
                  props.onFormChange({...props.meme, y:evt.target.value})
                }}
              />
            </div>
          </div>
          <hr />
          
          <label htmlFor="f_color">Couleur</label>
          <input type="color" id="f_color" value={props.meme.color} 
            onChange={(evt)=>{
                  console.log(evt.target.value)
                  props.onFormChange({...props.meme, color:evt.target.value})
            }}
          />

          <div className={styles.half}>
            <div>
              <label htmlFor="f_sz">font-size:</label>
              <br />
              <input
                type="number"
                className={styles.smallInput}
                value={props.meme.fontSize}
                onChange={(evt)=>{
                  console.log(evt.target.value)
                  props.onFormChange({...props.meme, fontSize:evt.target.value})
                }}
              />
            </div>

            <div>
              <label htmlFor="f_fw">font-weight:</label>
              <br />
              <input
                type="number"
                className={styles.smallInput}
                min="100"
                step="100"
                max="900"
                value={props.meme.fontWeight}
                onChange={(evt)=>{
                  console.log(evt.target.value)
                  props.onFormChange({...props.meme, fontWeight:evt.target.value})
                }}
              />
            </div>
          </div>

          <div className={styles.half}>
            <div>
              <label htmlFor="f_underline">underline:</label>
              <br />
              <input
                id="f_underline"
                type="checkbox"
                checked={props.meme.underline}
                onChange={(evt)=>{
                  console.log(evt.target.value)
                  props.onFormChange({...props.meme, underline:evt.target.checked})
                }}
              />
            </div>
            <div>
              <label htmlFor="f_italic">italic:</label>
              <br />
              <input id="f_italic" type="checkbox" 
                checked={props.meme.italic}
                onChange={(evt)=>{
                  console.log(evt.target.value)
                  props.onFormChange({...props.meme, italic:evt.target.checked})
                }}
               />
            </div>
          </div>
          <div className={styles.half}>
            <Button type="submit" bgColor="skyblue">
              Enregistrer
            </Button>
            <Button type="reset" bgColor="tomato">
              Reset
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

MemeForm.protoTypes = {
  meme: PropTypes.object.isRequired,
  images: PropTypes.object.isRequired,
  onFormChange: PropTypes.func.isRequired
};
export default MemeForm;
