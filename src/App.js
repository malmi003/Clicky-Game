import React from "react";
import ImageCard from "./components/ImageCard";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import boats from "./boats.json";
import "./App.css";

class App extends React.Component {
 state = {
   boats : boats
 }

render = () => (
 <Wrapper>
   <Header />
   
 </Wrapper>
);
}

export default App;
