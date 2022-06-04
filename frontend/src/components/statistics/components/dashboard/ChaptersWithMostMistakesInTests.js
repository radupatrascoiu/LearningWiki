import React, { useEffect, useState } from 'react'
import 'chart.js/auto'
import { Bar } from 'react-chartjs-2';
import { Box, Button, Card, CardContent, CardHeader, Divider, useTheme } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { userApi } from '../../../../services/userApi';
import { useKeycloak } from '@react-keycloak/web';
import { capitalizeFirstLetter } from '../../../../utils/util';

export const ChaptersWithMostMistakesInTests = (props) => {
  const theme = useTheme();
  const { initialized, keycloak } = useKeycloak();
  const [error, setError] = useState(false);
  const [chapterMistakes, setChapterMistakes] = useState([]);

  useEffect(async () => {
    if (keycloak && initialized) {
      try {
        const response1 = await userApi.getChaptersWithMostMistakesInSolvedTestsByCourseName(keycloak?.token, props.courseName);

        if (response1?.status === 200) {
          setChapterMistakes(response1.data)
        }
      } catch (error) {
        setError(true);
      }
    }
  }, [keycloak, initialized])

  const data = {
    datasets: [
      {
        backgroundColor: props.courseName === 'matematica' ? '#3F51B5' : '#E53935',
        barPercentage: 0.5,
        barThickness: 12,
        borderRadius: 4,
        categoryPercentage: 0.5,
        data: chapterMistakes?.map((chapterMistake, i) => (
          chapterMistake.noMistakes
        )),
        label: props.courseName,
        maxBarThickness: 10
      }
    ],
    labels: chapterMistakes?.map((chapterMistake, i) => (
      "Cap " + chapterMistake.chapter.number
    ))
  };

  const options = {
    animation: false,
    cornerRadius: 20,
    layout: { padding: 0 },
    legend: { display: false },
    maintainAspectRatio: false,
    responsive: true,
    xAxes: [
      {
        ticks: {
          fontColor: theme.palette.text.secondary
        },
        gridLines: {
          display: false,
          drawBorder: false
        }
      }
    ],
    yAxes: [
      {
        ticks: {
          fontColor: theme.palette.text.secondary,
          beginAtZero: true,
          min: 0
        },
        gridLines: {
          borderDash: [2],
          borderDashOffset: [2],
          color: theme.palette.divider,
          drawBorder: false,
          zeroLineBorderDash: [2],
          zeroLineBorderDashOffset: [2],
          zeroLineColor: theme.palette.divider
        }
      }
    ],
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

  return (
    <Card {...props}>
      <CardHeader
        action={(
          <Button
            endIcon={<ArrowDropDownIcon fontSize="small" />}
            size="small"
          >
            Last 7 days
          </Button>
        )}
        title={"Capitole cu cele mai multe greseli in teste la " + capitalizeFirstLetter(props.courseName)}
      />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 400,
            position: 'relative'
          }}
        >
          <Bar
            data={data}
            options={options}
          />
        </Box>
      </CardContent>
      <Divider />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2
        }}
      >
        <Button
          color="primary"
          endIcon={<ArrowRightIcon fontSize="small" />}
          size="small"
        >
          Overview
        </Button>
      </Box>
    </Card>
  );
}
