import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import CapitolCard from './CapitolCard'
import { useKeycloak } from '@react-keycloak/web';
import { userApi } from '../../services/userApi';

import '../../styles/materiale.css'

const GridCapitole = ({ clasa }) => {
  const { initialized, keycloak } = useKeycloak();
  const [chapters, setChapters] = useState([]);

  // Load data on mount 
  useEffect(async () => {
    if (keycloak && initialized) {
      try {
        const response = await userApi.getChapters(keycloak.token, "matematica", clasa);
        // console.log(response.data)
        // const chaptersProjection = await response.data["data"]
        // console.log(chaptersProjection)
        setChapters(response.data)
      } catch (error) {
        console.log(error);
      }
    }
  }, [initialized, keycloak, clasa]);


  //   const handleDelete = async (id) => {
  //     await fetch('http://localhost:8000/notes/' + id, {
  //       method: 'DELETE'
  //     })
  //     const newNotes = notes.filter(note => note.id != id)
  //     setNotes(newNotes)
  //   }

  const handleLearnMore = (link) => {

  }

  console.log(chapters)

  return (
    <div className='chapter-selection'>
      <Container sige="lg">
        <Grid container spacing={3}>
          {chapters.map(chapter => (
            <Grid item xs={12} md={6} lg={4} key={chapter.id}>
              <CapitolCard chapter={chapter} handleLearnMore={handleLearnMore} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  )
}

export default GridCapitole;