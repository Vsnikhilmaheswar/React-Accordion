import { useState } from "react";
import data from "./data";
import "./styles.css";
export default function Accoridian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelector, setenableMultiSelector] = useState(false);
  const [multiple, setMultiple] = useState([]);
  function handleSelection(getcurrentID) {
    setSelected(getcurrentID === selected ? null : getcurrentID);
  }
  function handleMultiSelection(getcurrentID) {
    let cpyMultiple = [...multiple];
    const findIndexofCurrentId = cpyMultiple.indexOf(getcurrentID);
    if (findIndexofCurrentId === -1) cpyMultiple.push(getcurrentID);
    else cpyMultiple.splice(findIndexofCurrentId, 1);
    setMultiple(cpyMultiple);
  }
  return (
    <div className="wrapper">
      <button onClick={() => setenableMultiSelector(!enableMultiSelector)}>
        Enable Multi seelction
      </button>
      <div className="accoridian">
        {data && data.length > 0 ? (
          data.map((dataitem) => (
            <div className="item">
              <div
                onClick={
                  enableMultiSelector
                    ? () => handleMultiSelection(dataitem.id)
                    : () => handleSelection(dataitem.id)
                }
                className="title"
              >
                <h3>{dataitem.question}</h3>
                <span>+</span>
              </div>
              {enableMultiSelector
                ? multiple.indexOf(dataitem.id) !== -1 && (
                    <div className="content">{dataitem.answer}</div>
                  )
                : selected === dataitem.id && (
                    <div className="content">{dataitem.answer}</div>
                  )}
              {/* {selected === dataitem.id  || multiple.indexOf(dataitem.id)(
                <div className="content">{dataitem.answer}</div>
              ) : null } */}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}
