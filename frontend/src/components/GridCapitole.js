import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import CapitolCard from '../components/CapitolCard'
import '../styles/materiale.css'

const GridCapitole = ({ clasa }) => {
    const [notes, setNotes] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:8000/notes')
//       .then(res => res.json())
//       .then(data => setNotes(data))
//   }, [])

//   const handleDelete = async (id) => {
//     await fetch('http://localhost:8000/notes/' + id, {
//       method: 'DELETE'
//     })
//     const newNotes = notes.filter(note => note.id != id)
//     setNotes(newNotes)
//   }

    const handleLearnMore = (link) => {

    }

    const cap1 ={
        id: 1,
        link: "http://localhost:3000/courses/matematica/materiale/cap1",
        title: "Multimi si elemente de logica matematica",  
        details: "Capitol introductiv despre multimi"
    };

    const cap2 ={
        id: 2,
        link: "http://localhost:3000/courses/matematica/materiale/cap2",
        title: "Siruri",  
        details: "bla bla" 
    };

    const cap3 ={
        id: 3,
        link: "http://localhost:3000/courses/matematica/materiale/cap3",
        title: "Functii",  
        details: "Lecturi grafice"
    }

    const cap4 ={
        id: 4,
        link: "http://localhost:3000/courses/matematica/materiale/cap4",
        title: "Funtia de gradul 1",  
        details: "hau hau"
    }

    const cap5 ={
        id: 5,
        link: "http://localhost:3000/courses/matematica/materiale/cap4",
        title: "Funtia de gradul 1",  
        details: "hau hau"
    }

    const caps = [cap1, cap2, cap3, cap4, cap5]

  return (clasa === "9" &&
    <div className='chapter-selection'>
      <Container sige="lg">
        <Grid container spacing={3}>
          {caps.map(cap => (
            <Grid item xs={12} md={6} lg={4} key={cap.id}>
              <CapitolCard capitol={cap} handleLearnMore={handleLearnMore} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  )
}

export default GridCapitole;