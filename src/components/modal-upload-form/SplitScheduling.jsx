import { Fragment } from 'react'
import {
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Divider,
} from '@mui/material'

export default function SplitScheduling() {
  return (
    <Fragment>
      <FormControl>
        <FormLabel
          id='scheduling-group-label'
          sx={{ fontWeight: '800', color: 'black' }}
        >
          Split scheduling using social distance?
        </FormLabel>
        <RadioGroup row aria-labelledby='schedule-buttons-group'>
          <FormControlLabel value='yes' control={<Radio />} label='Yes' />
          <FormControlLabel value='no' control={<Radio />} label='No' />
        </RadioGroup>
      </FormControl>
      <Divider sx={{ ...dividerStyles }} />
    </Fragment>
  )
}

const dividerStyles = {
  border: 'solid 1px lightgrey',
  margin: '10px 0px',
  width: '250px',
}
