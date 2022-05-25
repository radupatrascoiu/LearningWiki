import React, { useEffect, useState } from 'react'
import { format } from 'date-fns';
import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Box, Button, Card, CardHeader, Table, TableBody, TableCell, TableHead, TableRow, TableSortLabel, Tooltip } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useKeycloak } from '@react-keycloak/web';
import { userApi } from '../../../../services/userApi';
import { useNavigate } from "react-router-dom";

export const StudentRanking = (props) => {
  const { initialized, keycloak } = useKeycloak();
  const [error, setError] = useState(false);
  const [allUsersProgress, setAllUsersProgress] = useState([]);

  useEffect(async () => {
    if (keycloak && initialized) {
      try {
        const response1 = await userApi.getAllUsersProgress(keycloak?.token);

        if (response1?.status === 200) {
          setAllUsersProgress(response1.data)
        }
      } catch (error) {
        setError(true);
      }
    }
  }, [keycloak, initialized])

  return (
    <Card {...props}>
      <CardHeader title="Clasament elevi" />
      <PerfectScrollbar>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Nume elev
                </TableCell>
                <TableCell>
                  Mentor
                </TableCell>
                <TableCell sortDirection="desc">
                  <Tooltip
                    enterDelay={300}
                    title="Sort"
                  >
                    <TableSortLabel
                      active
                      direction="desc"
                    >
                      Teste rezolvate
                    </TableSortLabel>
                  </Tooltip>
                </TableCell>
                <TableCell>
                  Feedback-uri primite
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allUsersProgress?.map((ranking, index) => (

                <TableRow
                  hover
                  key={ranking.id}
                >
                  <TableCell>
                    {ranking.studentName}
                  </TableCell>
                  <TableCell>
                    {ranking.mentorName}
                  </TableCell>
                  <TableCell align="left">
                    {ranking.noSolvedTests}
                  </TableCell>
                  <TableCell>
                    {ranking.noReceivedFeedbacks}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
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
          variant="text"
        >
          Vezi toti elevii
        </Button>
      </Box>
    </Card>
  )
}
