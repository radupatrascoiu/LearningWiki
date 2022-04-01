import * as React from 'react';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import SchoolIcon from '@mui/icons-material/School';
import GridCapitole from '../components/GridCapitole'
import { Typography } from '@mui/material';
import { useState, useEffect } from "react";
import om_invatand from "../img/om-invatand.jpg"
import bg_materiale from "../img/bg-materiale.jpg"

import '../styles/materiale.css'

const Materiale = (props) => {
  const [clasa, setClasa] = useState("9");

  return (
      <div className='container'>
        <div className='chapters'>
          <div className='sidebar'>
            <List>
              <ListItem button onClick={() => setClasa("9")}>
                <ListItemIcon>
                  <LocalLibraryIcon />
                </ListItemIcon>
                <ListItemText>
                  Clasa a IX - a
                </ListItemText>
              </ListItem>

              <ListItem button onClick={() => setClasa("10")}>
                <ListItemIcon>
                  <CastForEducationIcon />
                </ListItemIcon>
                <ListItemText>
                  Clasa a X - a
                </ListItemText>
              </ListItem>

              <ListItem button onClick={() => setClasa("11")}>
                <ListItemIcon>
                  <LightbulbIcon />
                </ListItemIcon>
                <ListItemText>
                  Clasa a XI - a
                </ListItemText>
              </ListItem>

              <ListItem button onClick={() => setClasa("12")}>
                <ListItemIcon>
                  <SchoolIcon />
                </ListItemIcon>
                <ListItemText>
                  Clasa a XII - a
                </ListItemText>
              </ListItem>

              <ListItem button onClick={() => setClasa("facultate")}>
                <ListItemIcon>
                  <SchoolIcon />
                </ListItemIcon>
                <ListItemText>
                  Facultate
                </ListItemText>
              </ListItem>
            </List>
            <Divider /> 

            <img className='om-invatand' src={om_invatand} alt="Om invatand"/>
          </div>

          <div className='chapter-selection'>
            <Typography
              variant="h4"
              color="textSecondary"
              align="center"
              padding="20px"
            >
              Alege capitolul dorit 📚
            </Typography>
            <GridCapitole clasa={clasa}/>
          </div>
        </div>
      </div>
  );
}

export default Materiale;