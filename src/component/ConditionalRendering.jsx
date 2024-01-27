import React from 'react'
import { Box, List, ListItem, Typography } from '@mui/material'

function Item({name,ispacked}){
    return(
        <li className='Item'>{name}{ispacked && '✔'}</li>
    )
}


const ConditionalRendering = () => {
  return (
<section>
    <Typography variant ="h4" gutterBottom>
Packing List
    </Typography>
    <ul>
        <Item
        ispacked={true}
        name="Space Suit"
        />

<Item
        ispacked={false}
        name="Photo of Tam"
        />

<Item
        ispacked={true}
        name="Helmet with a golden leaf"
        />
    </ul>
</section>
  )
}

export default ConditionalRendering