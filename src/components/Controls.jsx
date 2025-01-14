import React from "react";
import ReactiveButton from "reactive-button";
import styled from "@emotion/styled";
import { FaRandom } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";
import { BsPlay } from "react-icons/bs";
import { IoEnterOutline } from "react-icons/io5";
import { IoExitOutline } from "react-icons/io5";
import { MdBlock } from "react-icons/md";
import { CgTrashEmpty } from "react-icons/cg";

import { cellType, wallType, entryType, exitType } from "../common/config";
import { randomMazeGenerator } from "../common/helper";
import MyReactiveButton from "./MyReactiveButton";

const buttonsColorMap = new Map([
  [wallType, "red"],
  [entryType, "blue"],
  [exitType, "green"],
]);

const Row = styled.div`
  margin: 10px 0;
`;

const WebButtons = styled.div`
  width: 90%;
  margin: auto;
  display: none;

  .web-icons {
    display: flex;
    justify-content: center;
    flex-direction: column;
    justify-content: space-between;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;

    button {
      padding: 6px 12px;
    }
  }
`;

const MobileButtons = styled.div`
  display: flex;
  justify-content: center;

  & > span {
    min-width: 0;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const Section = styled.div`
  margin-bottom: 10px;
  & > span {
    min-width: 0;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    flex: 1 1 0px;
  }
`;

export function Controls({
  rows,
  cols,
  entry,
  exit,
  setGrid,
  startSearch,
  clickType,
  setClickType,
  selectedAlgorithm,
  setAlgorithm,
  isInProgress,
  resetGrid,
}) {
  function randomGrid() {
    isInProgress.current = false;
    const [grid, newEntry, newExit] = randomMazeGenerator(rows, cols);
    entry.current = newEntry;
    exit.current = newExit;
    setGrid(grid);
  }

  const isDisabled = isInProgress.current;

  const myReactiveButtonProps = {
    handleClick: setClickType,
    buttonsColorMap,
    isInProgress,
    selectedType: clickType
  }

  const myFunctionButtonProps = {
    handleClick: setAlgorithm,
    buttonsColorMap,
    isInProgress,
    selectedType: selectedAlgorithm,
  }

  return (
    <Row>
      <WebButtons>
        <Section>
          <MyReactiveButton text="Entry" type={entryType} {...myReactiveButtonProps} />
          <MyReactiveButton text="Exit" type={exitType} {...myReactiveButtonProps} />
          <MyReactiveButton text="Wall" type={wallType} {...myReactiveButtonProps} />
          <MyReactiveButton text="Clear" type={cellType} {...myReactiveButtonProps} />
        </Section>
        <Section>
          <MyReactiveButton text="BFS" type={"bfs"} {...myFunctionButtonProps} />
          <MyReactiveButton text="A*" type={"a_star"} {...myFunctionButtonProps} />
        </Section>
        <Section>
          <ReactiveButton onClick={resetGrid} idleText="Reset" outline />
          <ReactiveButton onClick={randomGrid} idleText="Random Maze" outline />
        </Section>
      </WebButtons>
      <Row>
        <WebButtons>
          <Section style={{justifyContent: "center"}}>
            <ReactiveButton onClick={startSearch} disabled={isDisabled} idleText="Search Path" />
          </Section>
        </WebButtons>
      </Row>

      <Row>
        <MobileButtons>
          <Section>
            <MyReactiveButton text={<IoEnterOutline />} type={entryType} {...myReactiveButtonProps} />
            <MyReactiveButton text={<IoExitOutline />} type={exitType} {...myReactiveButtonProps} />
            <MyReactiveButton text={<MdBlock />} type={wallType} {...myReactiveButtonProps} />
            <MyReactiveButton text={<CgTrashEmpty />} type={cellType} {...myReactiveButtonProps} />
          </Section>
          <Section>
            <ReactiveButton onClick={resetGrid} idleText={<GrPowerReset />} outline />
            <ReactiveButton onClick={randomGrid} idleText={<FaRandom />} outline />
          </Section>
        </MobileButtons>
      </Row>
      <Row>
        <MobileButtons>
          <Section style={{paddingRight: "20px"}}>
            <MyReactiveButton text="BFS" type={"bfs"} {...myFunctionButtonProps} />
            <MyReactiveButton text="A*" type={"a_star"} {...myFunctionButtonProps} />
          </Section>
          <Section>
            <ReactiveButton onClick={startSearch} disabled={isDisabled} idleText={<BsPlay />} />
          </Section>
        </MobileButtons>
      </Row>
    </Row>
  );
}
