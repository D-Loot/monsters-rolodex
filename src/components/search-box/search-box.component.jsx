import './search-box.styles.css';

// Functional Component
const SearchBox = ({className,placeholder,onChangeHandler}) =>(
    <input
        className={'search-box ${this.props.className}'}
        type="search"
        // 'this.props...' can be input when calling the component
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
  )

// // Class Component
// import {Component} from 'react';
// class SearchBox extends Component {
//   render(){
//     return(  <input
//         className='search-box ${this.props.className}'
//         type="search"
//         // 'this.props...' can be input when calling the component
//         placeholder={this.props.placeholder}
//         onChange={this.props.onChangeHandler}
//       />
//     )
//   }
// }

export default SearchBox;