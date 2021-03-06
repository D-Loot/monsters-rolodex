import './card.styles.css';

//functional component
const Card = ({monster}) => {
    const {name, id, email} = monster;
    return(
      <div className='card-container' key={id}>
        <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=100x100`}/>
        <h2>{name}</h2>
        <p>{email}</p>
    </div>
  )
}


// Class Component
// import {Component} from 'react';
// class Card extends Component {
//   render(){
//     const {name, id, email} = this.props.monster;
//     return(
//       <div className='card-container' key={id}>
//         <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=100x100`}/>
//         <h2>{name}</h2>
//         <p>{email}</p>
//     </div>
//   )}
// }

export default Card;
