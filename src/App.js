import logo from './logo.svg';
import './App.css';
import { Box, Typography } from '@mui/material';

const lists =[
  {title:'cabbage', id:'1'},
  {title:'apple', id:'2'},
  {title:'orange', id:'3'}
]



function App() {

  const listItems = lists.map(product=>
    <li key={product.id}>
      {product.title}
      
    </li>)

  
  return (
    <div className="App">
      <ul>
        {listItems}
      </ul>
     
     
     
    </div>
  );
}

export default App;
