import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import CapitolCard from './CapitolCard'
import { useKeycloak } from '@react-keycloak/web';
import { userApi } from '../../services/userApi';

import '../../styles/materiale.css'
import { CircularProgress } from '@mui/material';

const GridCapitole = ({ courseName, clasa }) => {
  const { initialized, keycloak } = useKeycloak();
  const [chapters, setChapters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
    if (keycloak && initialized) {
      setIsLoading(true)
      try {
        const response = await userApi.getChapters(keycloak.token, courseName, clasa);
        setChapters(response.data)
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false)
      }
    }
  }, [initialized, keycloak, clasa]);

  const handleLearnMore = (link) => {

  }

  return (
    <div className='chapter-selection'>
      {!isLoading && <Container sige="lg">
        <Grid container spacing={3}>
          {chapters.map(chapter => (
            <Grid item xs={12} md={6} lg={4} key={chapter.id}>
              <CapitolCard courseName={courseName} chapter={chapter} handleLearnMore={handleLearnMore} />
            </Grid>
          ))}
        </Grid>
      </Container>
      }

      {isLoading && <CircularProgress />}
    </div>
  )
}

export default GridCapitole;