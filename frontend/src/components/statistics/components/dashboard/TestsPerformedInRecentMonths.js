import 'chart.js/auto'
import React, { useEffect, useState } from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Box, Card, CardContent, CardHeader, Divider, Icon, Typography, useTheme } from '@mui/material';
import FunctionsIcon from '@mui/icons-material/Functions';
import TerminalIcon from '@mui/icons-material/Terminal';
import { useKeycloak } from '@react-keycloak/web';
import { userApi } from '../../../../services/userApi';
import BatteryCharging20Icon from '@mui/icons-material/BatteryCharging20';
import BatteryCharging30Icon from '@mui/icons-material/BatteryCharging30';
import BatteryCharging50Icon from '@mui/icons-material/BatteryCharging50';
import BatteryCharging90Icon from '@mui/icons-material/BatteryCharging90';

export const TestsPerformedInRecentMonths = (props) => {
  const theme = useTheme();
  const { initialized, keycloak } = useKeycloak();
  const [error, setError] = useState(false);
  const [testsInRecentPeriod, setTestsInRecentPeriod] = useState([]);

  useEffect(async () => {
    if (keycloak && initialized) {
      try {
        const response1 = await userApi.getTestsInTheLastPeriodByClass(keycloak?.token);

        if (response1?.status === 200) {
          setTestsInRecentPeriod(response1.data)
        }
      } catch (error) {
        setError(true);
      }
    }
  }, [keycloak, initialized])

  console.log("QQQQQ")
  console.log(testsInRecentPeriod)
  console.log("RRRRR")

  const data = {
    datasets: [
      {
        data: testsInRecentPeriod?.map((testInRecentPeriod, i) => (
          testInRecentPeriod.noSolvedTests
        )),
        backgroundColor: ['#3F51B5', '#E53935', '#FB8C00', '#006400'],
        borderWidth: 8,
        borderColor: '#FFFFFF',
        hoverBorderColor: '#FFFFFF'
      }
    ],
    labels: ['IX', 'X', 'XI', 'XII']
  };

  const options = {
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: false
    },
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
      backgroundColor: theme.palette.background.paper,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: 'index',
      titleFontColor: theme.palette.text.primary
    }
  };

  const courses = [
    {
      title: 'Clasa a IX-a',
      value: testsInRecentPeriod[0]?.noSolvedTests,
      icon: BatteryCharging20Icon,
      color: '#3F51B5'
    },
    {
      title: 'Clasa a X-a',
      value: testsInRecentPeriod[1]?.noSolvedTests,
      icon: BatteryCharging30Icon,
      color: '#E53935'
    },
    {
      title: 'Clasa a XI-a',
      value: testsInRecentPeriod[2]?.noSolvedTests,
      icon: BatteryCharging50Icon,
      color: '#FB8C00'
    },
    {
      title: 'Clasa a XII-a',
      value: testsInRecentPeriod[3]?.noSolvedTests,
      icon: BatteryCharging90Icon,
      color: '#006400'
    }
  ];

  return (
    <Card {...props}>
      <CardHeader title="Teste lucrare in functie de clasa" />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 300,
            position: 'relative'
          }}
        >
          <Doughnut
            data={data}
            options={options}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 2
          }}
        >
          {courses?.map(({
            color,
            icon: Icon,
            title,
            value
          }) => (
            <Box
              key={title}
              sx={{
                p: 1,
                textAlign: 'center'
              }}
            >
              <Icon color="action" />
              <Typography
                color="textPrimary"
                variant="body1"
              >
                {title}
              </Typography>
              <Typography
                style={{ color }}
                variant="h5"
              >
                {value}
                %
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};
