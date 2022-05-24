import React, { useEffect, useState } from 'react'
import { Avatar, Box, Card, CardContent, Grid, LinearProgress, Typography } from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';
import { useKeycloak } from '@react-keycloak/web';
import { userApi } from '../../../../services/userApi';

export const MyProgressCard = (props) => {
  const { initialized, keycloak } = useKeycloak();
  const [error, setError] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(async () => {
    if (keycloak && initialized) {
      try {
        const response1 = await userApi.getProgressByUser(keycloak?.token);

        if (response1?.status === 200) {
          setProgress(response1.data)
        }
      } catch (error) {
        setError(true);
      }
    }
  }, [keycloak, initialized])

  return (
    <Card
      sx={{ height: '100%' }}
      {...props}
    >
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
              Progresul tau
            </Typography>
            <Typography
              color="textPrimary"
              variant="h4"
            >
              {progress}%
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: 'warning.main',
                height: 56,
                width: 56
              }}
            >
              <BarChartIcon />
            </Avatar>
          </Grid>
        </Grid>
        <Box sx={{ pt: 3 }}>
          <LinearProgress
            value={progress}
            variant="determinate"
          />
        </Box>
      </CardContent>
    </Card>
  )
}