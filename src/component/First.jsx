import { Box, Stack } from '@mui/material'
import React from 'react'

const First = () => {

    const people = [
        { id: '1', name: 'John', age: '16' },
        { id: 2, name: 'Doe', age: '10' },
        { id: 3, name: 'Dane', age: '20' }
    ]

    const ItemA = people.map((person) => (
        <li key={person.id}>{person.name}</li>

    ))

    


    return (
        <Box>
            <ul>
                {ItemA}
            </ul>


            <Stack>

                {people.map((person) => (
                    <li key={person.id}>
                        {person.age >= 15 ? 'you are eligbile' : (<span style={{ color: 'red' }}>{person.name}</span>)}
                    </li>
                ))}
            </Stack>

        </Box>
    )
}

export default First