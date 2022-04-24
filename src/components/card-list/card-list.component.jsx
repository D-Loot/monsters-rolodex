// import {Component} from 'react';
import Card from '../card/card.component';
import './card-list.styles.css';
// https://robohash.org/1?set=set2&size=180x180

// Cunctional Component
const CardList = ({monsters}) => (
  <div className='card-list'>
    {monsters.map((monster) => {
      return <Card monster={monster}/>;
    })}
  </div>
);


// // CLass Component
// import {Component} from 'react';
// class CardList extends Component {
//   render(){
//     const {monsters} = this.props;
//     return(
//       <div className='card-list'>
//         {monsters.map((monster) => {
//           return (
//             <Card monster={monster}/>
//         )})}
//       </div>
//     )
//   }
// }

export default CardList;