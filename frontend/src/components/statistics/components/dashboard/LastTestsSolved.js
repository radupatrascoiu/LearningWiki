import React, { useEffect, useState } from 'react'
import { Avatar, Box, Button, Card, CardHeader, Divider, IconButton, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useKeycloak } from '@react-keycloak/web';
import { userApi } from '../../../../services/userApi';
import { useNavigate } from "react-router-dom";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export const LastTestsSolved = (props) => {
  const { initialized, keycloak } = useKeycloak();
  const [error, setError] = useState(false);
  const [lastSolvedTests, setLastSolvedTests] = useState([]);
  const navigate = useNavigate();

  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

  useEffect(async () => {
    if (keycloak && initialized) {
      try {
        const response1 = await userApi.getLastSolvedTestsByUser(keycloak?.token);

        if (response1?.status === 200) {
          setLastSolvedTests(response1.data)
        }
      } catch (error) {
        setError(true);
      }
    }
  }, [keycloak, initialized])

  console.log(lastSolvedTests)

  return (
    <Card {...props}>
      <CardHeader
        subtitle={`${lastSolvedTests.length} in total`}
        title="Ultimele teste rezolvate"
      />
      <Divider />
      <List>
        {lastSolvedTests?.map((lastSolvedTest, i) => (
          <ListItem
            divider={i < lastSolvedTests?.length - 1}
            key={lastSolvedTest.id}
          >
            <ListItemAvatar>
              <Avatar {...stringAvatar(`${lastSolvedTest?.test?.name}`)} />
            </ListItemAvatar>
            <ListItemText
              primary={lastSolvedTest?.test?.name + ' ' + lastSolvedTest?.test?.courseName}
              secondary={`Submis la ${lastSolvedTest?.timestamp}`}
            />
            <IconButton
              edge="end"
              size="small"
            >
              <NavigateNextIcon onClick={() => navigate(`/courses/${lastSolvedTest?.test?.courseName}/teste/:${lastSolvedTest?.test?.id}`)} />
            </IconButton>
          </ListItem>
        ))}
      </List>
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
          endIcon={<ArrowRightIcon />}
          size="small"
          variant="text"
          onClick={() => navigate("/")}
        >
          Vezi testele
        </Button>
      </Box>
    </Card>
  )
}
