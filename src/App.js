import React, { Component } from "react";
import "./App.css";
import Post from "./Post";

class App extends Component {
  
  render() {
    const logo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe1mXowQOoDhnVexElVo_B017a1E__nKe8Yw&usqp=CAU"
    return (
      <div className="app">
        <div className="app__header">
          <img className="app__headerImage"
          src={logo}
          alt=""/>
        </div>
        <h1>hello - Vũ Nguyễn Hải Đăng - Welcome to IG clone</h1>
        <Post username="haidang029kg1" caption="Wow It works!"/>
        <Post/>
        <Post/>
        <Post/>
      </div>
    );
  }
}

export default App;
