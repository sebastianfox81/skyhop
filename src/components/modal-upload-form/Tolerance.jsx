import React from 'react'
import { Box, Typography, Grid, Stack } from '@mui/material'
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder'

import ToggleSwitch from './ToggleSwitch'

const Tolerance = () => {
  return (
    <Box>
      <Typography sx={{ fontWeight: '800' }}>Tolerance Window:</Typography>
      <Grid container width={'500px'} alignItems={'center'}>
        <Grid item sx={{ borderRight: 'solid 1px lightgrey' }}>
          <ToggleSwitch />
        </Grid>
        <Grid item pl={2}>
          <Stack direction={'row'}>
            <QueryBuilderIcon sx={{ transform: 'scaleX(-1) rotate(90deg)' }} />
            <Typography ml={0.5}>Select Tolerance Level</Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Tolerance
