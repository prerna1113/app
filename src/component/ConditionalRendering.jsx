import React from 'react';
import { Box, Typography } from '@mui/material';


function Item({name,isPacked}){
    return(
        <li>{name}{isPacked && '✔'}</li>
    )
}

const ConditionalRendering = () => {
  return (
   <section>
    <Typography variant ="h4">
        Packing List

    </Typography>
   
    <ul>
        <Item 
        isPacked={true}
        name="Space Suit"
        />

        <Item
        isPacked={true}
        name="Photo of Tan"
        />

        <Item
        isPacked={true}
        name="Helmet with golden leaf"
        />
    </ul>
   </section>
  )
}

export default ConditionalRendering