import {Component} from 'react'

import logo from './logo.svg';
import './App.css';

import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

// functional component method
const App = ()=>{
  const [searchField,setSearchField] = useState(''); // [value, setValue]

  const onSearchChange = (event)=> {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  }

  const [monsters,setMonsters] = useState([]); // [value, setValue]

  useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users') // promise
    .then((response) => response.json())
    .then((users) => setMonsters(users));
  },[]);

  const [filteredMonsters,setFilteredMonsters] = useState(monsters); // [value, setValue]
  useEffect(()=>{
    const newFilteredMonsters = monsters.filter((monster)=>{
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters)
  },[monsters,searchField]);

  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox
      className = "monster-search-box"
      onChangeHandler={onSearchChange}
      placeholder="Search Monsters"/>
      <CardList
      monsters={filteredMonsters}
      />
    </div>
  );
}


// // class method
// // https://jsonplaceholder.typicode.com/users
// class App extends Component {

//   constructor(){
//     super();

//     // this is what the initial values of the components
//     this.state = {
//       monsters:[],
//       searchField:""
//     }
//   }

//   componentDidMount(){
//   fetch('https://jsonplaceholder.typicode.com/users') // promise
//     .then((response)=>response.json())
//     .then((users)=>this.setState(
//       ()=>{
//         return{monsters:users};
//       }
//     ))
//   }

//   onSearchChange = (event)=> {
//     const searchField = event.target.value.toLowerCase();
//     this.setState(()=>{
//       return{searchField};
//     });
//   }

//   render(){
//     const{monsters,searchField} = this.state;
//     const {onSearchChange} = this;

//     const filteredMonsters = monsters.filter((monster)=>{
//       return monster.name.toLowerCase().includes(searchField);
//     });


//     return (
//       <div className="App">
//         <h1 className='app-title'>Monsters Rolodex</h1>
//         <SearchBox
//         className = "monster-search-box"
//         onChangeHandler={onSearchChange}
//         placeholder="Search Monsters"/>
//         <CardList
//         monsters={filteredMonsters}
//         />
//       </div>
//     );
//   }
// }

export default App;
