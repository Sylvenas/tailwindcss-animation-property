import React, { Component } from "react";
import {
  root,
  styles,
  PVaule,
  durationOpts,
  delayOpts,
  animationIterationCountOpts,
  animationFillModeOpts,
  animationDirectionOpts,
  animationTimeFunctionOpts,
  animationPlayStateOpts,
} from "./data";
import AllClass from "./data/AllClass";
import Select from "react-select";

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isPlaying: false,
      magicClass: null,
      animationDuration: "1s",
      animationDelay: "0s",
      animationIterationCount: 1,
      animationFillMode: "",
      animationDirection: "",
      animationTimeFunction: "",
      animationPlayState: "",
    };
    this.handleBtnClick = this.handleBtnClick.bind(this);
  }
  handleBtnClick(e) {
    if (this.state.isPlaying) {
      return;
    }
    var cssName = e.target.innerText;
    this.setState({
      isPlaying: true,
      magicClass: "magic-" + cssName,
    });
  }

  handleAnimationEnd = () => {
    this.setState({
      isPlaying: false,
      magicClass: null,
    });
  };
  handleChange = (property) => (selectedOpt) => {
    this.setState({
      [property]: selectedOpt,
    });
  };

  render() {
    const {
      animationDuration,
      animationDelay,
      animationIterationCount,
      animationFillMode,
      animationDirection,
      animationTimeFunction,
      animationPlayState,
    } = this.state;
    return (
      <div>
        <div style={root.opts}>
          <Select
            placeholder="animationDuration"
            options={durationOpts}
            value={animationDuration}
            onChange={this.handleChange("animationDuration")}
          />
          <Select
            placeholder="animationDelay"
            options={delayOpts}
            value={animationDelay}
            onChange={this.handleChange("animationDelay")}
          />
          <Select
            placeholder="animationIterationCount"
            options={animationIterationCountOpts}
            value={animationIterationCount}
            onChange={this.handleChange("animationIterationCount")}
          />
          <Select
            placeholder="animationFillMode"
            options={animationFillModeOpts}
            value={animationFillMode}
            onChange={this.handleChange("animationFillMode")}
          />
          <Select
            placeholder="animationDirection"
            options={animationDirectionOpts}
            value={animationDirection}
            onChange={this.handleChange("animationDirection")}
          />
          <Select
            placeholder="animationTimeFunction"
            options={animationTimeFunctionOpts}
            value={animationTimeFunction}
            onChange={this.handleChange("animationTimeFunction")}
          />
          <Select
            placeholder="animationPlayState"
            options={animationPlayStateOpts}
            value={animationPlayState}
            onChange={this.handleChange("animationPlayState")}
          />
        </div>
        <div style={root.placeholder}>
          <div
            style={root.magicAni}
            className={`
            ${this.state.magicClass} 
            ${animationDuration.value} 
            ${animationDelay.value} 
            ${animationIterationCount.value} 
            ${animationFillMode.value}
            ${animationDirection.value}
            ${animationTimeFunction.value}
            ${animationPlayState.value}
            `}
            onAnimationEnd={this.handleAnimationEnd}
          >
            <h2 className="h-full flex items-center justify-center">
              React
              <br />
              Magic
            </h2>
          </div>
        </div>
        <div style={root.cssOptions}>
          <h1 style={root.title}>React-Magic</h1>
          <div style={root.chunk} className="group">
            <h2 style={root.h2}>React-Magic Effects</h2>
            {PVaule[0].map((name) => {
              return (
                <p
                  key={name}
                  style={styles.btnDefault}
                  onClick={this.handleBtnClick}
                  className={`btnHover`}
                >
                  {name}
                </p>
              );
            })}
          </div>
          <div style={root.chunk}>
            <h2 style={root.h2}>React-Magic Bling</h2>
            {PVaule[1].map((name) => {
              return (
                <p
                  key={name}
                  style={styles.btnDefault}
                  onClick={this.handleBtnClick}
                  className="btnHover"
                >
                  {name}
                </p>
              );
            })}
          </div>
          <div style={root.chunk}>
            <h2 style={root.h2}>React-Magic Static Effects</h2>
            {PVaule[2].map((name) => {
              return (
                <p
                  key={name}
                  style={styles.btnDefault}
                  onClick={this.handleBtnClick}
                  className="btnHover"
                >
                  {name}
                </p>
              );
            })}
          </div>
          <div style={root.chunk}>
            <h2 style={root.h2}>React-Magic Static Effects Out</h2>
            {PVaule[3].map((name) => {
              return (
                <p
                  key={name}
                  style={styles.btnDefault}
                  onClick={this.handleBtnClick}
                  className="btnHover"
                >
                  {name}
                </p>
              );
            })}
          </div>
          <div style={root.chunk}>
            <h2 style={root.h2}>React-Magic Perspective</h2>
            {PVaule[4].map((name) => {
              return (
                <p
                  key={name}
                  style={styles.btnDefault}
                  onClick={this.handleBtnClick}
                  className="btnHover"
                >
                  {name}
                </p>
              );
            })}
          </div>
          <div style={root.chunk}>
            <h2 style={root.h2}>React-Magic Rotate</h2>
            {PVaule[5].map((name) => {
              return (
                <p
                  key={name}
                  style={styles.btnDefault}
                  onClick={this.handleBtnClick}
                  className="btnHover"
                >
                  {name}
                </p>
              );
            })}
          </div>
          <div style={root.chunk}>
            <h2 style={root.h2}>React-Magic Slide</h2>
            {PVaule[6].map((name) => {
              return (
                <p
                  key={name}
                  style={styles.btnDefault}
                  onClick={this.handleBtnClick}
                  className="btnHover"
                >
                  {name}
                </p>
              );
            })}
          </div>
          <div style={root.chunk}>
            <h2 style={root.h2}>React-Magic Math</h2>
            {PVaule[7].map((name) => {
              return (
                <p
                  key={name}
                  style={styles.btnDefault}
                  onClick={this.handleBtnClick}
                  className="btnHover"
                >
                  {name}
                </p>
              );
            })}
          </div>
          <div style={root.chunk}>
            <h2 style={root.h2}>React-Magic Tin</h2>
            {PVaule[8].map((name) => {
              return (
                <p
                  key={name}
                  style={styles.btnDefault}
                  onClick={this.handleBtnClick}
                  className="btnHover"
                >
                  {name}
                </p>
              );
            })}
          </div>
          <div style={root.chunk}>
            <h2 style={root.h2}>React-Magic Bomb</h2>
            {PVaule[9].map((name) => {
              return (
                <p
                  key={name}
                  style={styles.btnDefault}
                  onClick={this.handleBtnClick}
                  className="btnHover"
                >
                  {name}
                </p>
              );
            })}
          </div>
          <div style={root.chunk}>
            <h2 style={root.h2}>React-Magic Boing</h2>
            {PVaule[10].map((name) => {
              return (
                <p
                  key={name}
                  style={styles.btnDefault}
                  onClick={this.handleBtnClick}
                  className="btnHover"
                >
                  {name}
                </p>
              );
            })}
          </div>
          <div style={root.chunk}>
            <h2 style={root.h2}>React-Magic Space</h2>
            {PVaule[11].map((name) => {
              return (
                <p
                  key={name}
                  style={styles.btnDefault}
                  onClick={this.handleBtnClick}
                  className="btnHover"
                >
                  {name}
                </p>
              );
            })}
          </div>
        </div>
        <AllClass />
      </div>
    );
  }
}

export default App;
