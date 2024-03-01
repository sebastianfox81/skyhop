import { Box, Typography, Divider } from '@mui/material'
const ElapsedDates = () => {
  return (
    <Box>
      <Typography sx={{ fontWeight: '800' }}>Elapse Data Checking</Typography>
      <Typography sx={{ color: 'green', fontWeight: '800', mb: 3 }}>
        No Elapsed Dates!
      </Typography>
      <Divider sx={{ ...dividerStyles }} />
    </Box>
  )
}

const dividerStyles = {
  border: 'solid 1px lightgrey',
  marginBottom: '10px',
  width: '250px',
}

export default ElapsedDates
