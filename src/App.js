import logo from './logo.svg';
import './App.css';
import { Box, Typography } from '@mui/material';

const lists =[
  {title:'cabbage', id:'1', isFruit:false},
  {title:'apple', id:'2',isFruit:true},
  {title:'orange', id:'3',isFruit:true}
]



function App() {

  const listItems = lists.map(product=>
    <li
     key={product.id}
    style={{color:product.isFruit ? 'red' : 'green'}}
      >
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
