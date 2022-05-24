import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import CapitolCard from './CapitolCard'
import { useKeycloak } from '@react-keycloak/web';
import { userApi } from '../../services/userApi';

import '../../styles/materiale.css'

const GridCapitole = ({ courseName, clasa }) => {
  const { initialized, keycloak } = useKeycloak();
  const [chapters, setChapters] = useState([]);

  useEffect(async () => {
    if (keycloak && initialized) {
      try {
        const response = await userApi.getChapters(keycloak.token, courseName, clasa);
        setChapters(response.data)
      } catch (error) {
        console.log(error);
      }
    }
  }, [initialized, keycloak, clasa]);

  const handleLearnMore = (link) => {

  }

  return (
    <div className='chapter-selection'>
      <Container sige="lg">
        <Grid container spacing={3}>
          {chapters.map(chapter => (
            <Grid item xs={12} md={6} lg={4} key={chapter.id}>
              <CapitolCard courseName={courseName} chapter={chapter} handleLearnMore={handleLearnMore} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  )
}

export default GridCapitole;