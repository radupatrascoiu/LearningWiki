import React, { useEffect, useState } from 'react'
import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import FeedbackIcon from '@mui/icons-material/Feedback';
import { useKeycloak } from '@react-keycloak/web';
import { userApi } from '../../../../services/userApi';

export const FeedbacksFromMentorCard = (props) => {
  const { initialized, keycloak } = useKeycloak();
  const [error, setError] = useState(false);
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(async () => {
    if (keycloak && initialized) {
      try {
        const response1 = await userApi.getFeedbacksByUser(keycloak?.token);

        if (response1?.status === 200) {
          setFeedbacks(response1.data)
        }
      } catch (error) {
        setError(true);
      }
    }
  }, [keycloak, initialized])

  return (
    <Card {...props}>
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
              Feedback-uri de la mentor
            </Typography>
            <Typography
              color="textPrimary"
              variant="h4"
            >
              {feedbacks.length}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: 'success.main',
                height: 56,
                width: 56
              }}
            >
              <FeedbackIcon />
            </Avatar>
          </Grid>
        </Grid>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            pt: 2
          }}
        >
          <ArrowUpwardIcon color="success" />
          <Typography
            variant="body2"
            sx={{
              mr: 1
            }}
          >
            16%
          </Typography>
          <Typography
            color="textSecondary"
            variant="caption"
          >
            Decat in luna trecuta
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}
