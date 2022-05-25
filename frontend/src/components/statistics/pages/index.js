import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
import { AttepmtedTestsCard } from '../components/dashboard/AttepmtedTestsCard';
import { StudentRanking } from '../components/dashboard/StudentRanking';
import { LastTestsSolved } from '../components/dashboard/LastTestsSolved';
import { ChaptersWithMostMistakesInTests } from '../components/dashboard/ChaptersWithMostMistakesInTests';
import { MyProgressCard } from '../components/dashboard/MyProgressCard';
import { FeedbacksFromMentorCard } from '../components/dashboard/FeedbacksFromMentorCard';
import { SolvedTestsCard } from '../components/dashboard/SolvedTestsCard';
import { TestsPerformedInRecentMonths } from '../components/dashboard/TestsPerformedInRecentMonths';

const Dashboard = () => {
  return (
    <>
      <Head>
        <title>
          Dashboard | Material Kit
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth={false}>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              lg={3}
              sm={6}
              xl={3}
              xs={12}
            >
              <AttepmtedTestsCard />
            </Grid>
            <Grid
              item
              xl={3}
              lg={3}
              sm={6}
              xs={12}
            >
              <SolvedTestsCard sx={{ height: '100%' }} />
            </Grid>
            <Grid
              item
              xl={3}
              lg={3}
              sm={6}
              xs={12}
            >
              <FeedbacksFromMentorCard />
            </Grid>
            <Grid
              item
              xl={3}
              lg={3}
              sm={6}
              xs={12}
            >
              <MyProgressCard />
            </Grid>

            <Grid
              item
              lg={8}
              md={12}
              xl={9}
              xs={12}
            >
              <ChaptersWithMostMistakesInTests />
            </Grid>
            <Grid
              item
              lg={4}
              md={6}
              xl={3}
              xs={12}
            >
              <TestsPerformedInRecentMonths sx={{ height: '100%' }} />
            </Grid>

            <Grid
              item
              lg={4}
              md={6}
              xl={3}
              xs={12}
            >
              <LastTestsSolved sx={{ height: '100%' }} />
            </Grid>
            <Grid
              item
              lg={8}
              md={12}
              xl={9}
              xs={12}
            >
              <StudentRanking />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default Dashboard;
