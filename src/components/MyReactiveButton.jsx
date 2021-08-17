import React from "react"
import ReactiveButton from "reactive-button";


export default function MyReactiveButton ({ text, type, handleClick, buttonsColorMap, isInProgress, selectedType }) {
  return (
    <ReactiveButton
      onClick={() => handleClick(type)}
      color={buttonsColorMap.get(type)}
      disabled={isInProgress.current}
      idleText={text}
      outline={selectedType !== type}
    />
  );
};
