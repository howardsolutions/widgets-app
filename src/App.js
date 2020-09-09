import React, { useState } from "react";
import Accordion from ".//components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from './components/Translate';
import Route from './components/Route';
import Header from "./components/header";

const items = [
  {
    title: "What is React?",
    content: "React is a front-end Framework of JS",
  },

  {
    title: "Why we use React",
    content: "React is favourite JS framework among Engineer",
  },

  {
    title: "How do you use React",
    content: "You use React by creating components",
  },
];

const options = [
  {
    label: 'The Color Red',
    value: 'red'
  },

  {
    label: 'The Color Green',
    value: 'green'
  },

  {
    label: 'The Shade of Blue',
    value: 'blue'
  }
];


export default () => {
  // selecte and setSelected state for dropdown component
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
    <Header />
     <Route path = "/">
        <Accordion items = {items} />
      </Route>

      <Route path = "/list"> 
        <Search />
      </Route>

      <Route path = "/dropdown">
        <Dropdown 
        label = "Select a color"
        options = {options}  
        selected = {selected}
        onSelectedChange = {setSelected}
         />
      </Route>

      <Route path = '/translate'> 
        <Translate />
      </Route>

    </div>
  );
};
