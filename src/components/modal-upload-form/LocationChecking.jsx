import { Typography, Box, Divider } from '@mui/material'

const LocationChecking = () => {
  return (
    <Box>
      <Typography sx={{ fontWeight: '800' }}>Location Checking:</Typography>
      <Typography sx={{ color: 'green', fontWeight: '800' }}>
        All Available!
      </Typography>
      <Divider sx={{ ...dividerStyles }} />
    </Box>
  )
}

const dividerStyles = {
  border: 'solid 1px lightgrey',
  margin: '10px 0px',
  width: '250px',
}

export default LocationChecking
