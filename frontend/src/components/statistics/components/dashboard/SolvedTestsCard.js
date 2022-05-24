import React, { useEffect, useState } from 'react'
import { Avatar, Card, CardContent, Grid, Typography } from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { useKeycloak } from '@react-keycloak/web';
import { userApi } from '../../../../services/userApi';

export const SolvedTestsCard = (props) => {
  const { initialized, keycloak } = useKeycloak();
  const [error, setError] = useState(false);
  const [solvedTests, setSolvedTests] = useState([]);

  useEffect(async () => {
    if (keycloak && initialized) {
      try {
        const response1 = await userApi.getSolvedTestsByUser(keycloak?.token);

        if (response1?.status === 200) {
          setSolvedTests(response1.data)
        }
      } catch (error) {
        setError(true);
      }
    }
  }, [keycloak, initialized])


  return (
    < Card {...props}>
      <CardContent>
        <Grid
          container
          spacing={3}
          sx={{ justifyContent: 'space-between' }}
        >
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="overline"
            >
              Teste reusite
            </Typography>
            <Typography
              color="textPrimary"
              variant="h4"
            >
              {solvedTests?.length}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: 'primary.main',
                height: 56,
                width: 56
              }}
            >
              <ThumbUpAltIcon />
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card >
  )
}
