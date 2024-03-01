import { Fragment } from 'react'
import {
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  InputLabel,
  Select,
  Stack,
  Typography,
} from '@mui/material'

import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'

const clientData = [
  { id: 1, name: 'Testing Center 1' },
  { id: 2, name: 'Testing Center 2' },
  { id: 3, name: 'Testing Center 3' },
  { id: 4, name: 'Testing Center 4' },
]

const ClientForm = () => {
  return (
    <Fragment>
      <FormControl>
        <FormLabel
          id='client-group-label'
          sx={{ fontWeight: '800', color: 'black' }}
        >
          Client:{' '}
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby='client-buttons-group'
          sx={{ margin: '20px 0px' }}
        >
          <FormControlLabel value='single' control={<Radio />} label='Single' />
          <FormControlLabel
            value='multiple'
            control={<Radio />}
            label='Multiple'
          />
        </RadioGroup>
      </FormControl>
      {clientData &&
        clientData?.map((client) => {
          return (
            <Stack direction='row' mb={2} alignItems={'center'}>
              <Typography mr={3}>{client.name}</Typography>
              <FormControl
                sx={{
                  width: '200px',
                  marginRight: '10px',
                  '& .MuiOutlinedInput-input': {
                    borderRadius: '30%',
                  },
                }}
              >
                <InputLabel id={`client-name-${client.id}`}>
                  Select Client:
                </InputLabel>
                <Select
                  labelId='client-name-label'
                  id='client-name-select'
                  label='Select Client'
                ></Select>
              </FormControl>
              <AddCircleOutlineOutlinedIcon />
            </Stack>
          )
        })}
    </Fragment>
  )
}

export default ClientForm
