import { Box } from '@mui/material'
import React from 'react'
const people = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
    accomplishment: 'spaceflight calculations',
    imageId: 'MK3eW3A'
  }, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
    accomplishment: 'discovery of Arctic ozone hole',
    imageId: 'mynHUSa'
  }, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
    accomplishment: 'electromagnetism theory',
    imageId: 'bE7W1ji'
  }, {
    id: 3,
    name: 'Percy Lavon Julian',
    profession: 'chemist',
    accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
    imageId: 'IOjWm71'
  }, {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
    accomplishment: 'white dwarf star mass calculations',
    imageId: 'lrWQx8l'
}];

const RenderingList = () => {

    const listItems = people.map((person)=>(
        <li key = {person.id}>
            <b>{' '+ person.name +' '}</b>
            <p>{person.profession} known for {person.accomplishment}</p>
        </li>

    )


    )
   



    
  return (
    <Box>
        <h1>List of Scientists</h1>
        <ul>{listItems}</ul>
       
    
    </Box>
  )
}

export default RenderingList