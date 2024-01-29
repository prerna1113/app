import logo from './logo.svg';
import './App.css';
import { Box, Button, Typography } from '@mui/material';
import { useState } from 'react';
import MyApp from './component/MyApp';
import ConditionalRendering from './component/ConditionalRendering';
import RenderingList from './component/RenderingList';
import First from './component/First';
import StateCon from './component/StateCon';
import Second from './component/Second';

const lists =[
  {title:'cabbage', id:'1', isFruit:false},
  {title:'apple', id:'2',isFruit:true},
  {title:'orange', id:'3',isFruit:true}
]



function App() {

  const [count,setCount] =useState(1);

  const [times,setTimes] = useState(1);

  const increaseQuantity =()=>{
    setCount(count+1);
  }

  const decreaseQuantity =()=>{
    if(count>1){
      setCount(count-1);
    }
  }

  const listItems = lists.map(product=>
    <li
     key={product.id}
    style={{color:product.isFruit && 'red'}}
      >
      {product.title}
      
    </li>)
    

  
  return (
    <div className="App">
      <ul>
        {listItems}
      </ul>

      <Button 
      onClick={increaseQuantity}
      variant='contained'>
        no.of Times Clicked is {count}

      </Button>
      <br></br>

      <Button 
      onClick={decreaseQuantity }
      variant ="contained">
        click 
      </Button>

      <MyApp />

      <ConditionalRendering />
      <RenderingList />

      <First /> 

      <StateCon />

      <Second />

     
     
     
     
    </div>
  );
}

export default App;
