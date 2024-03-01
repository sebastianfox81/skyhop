import React from 'react'
import { FormControl, InputLabel, Select, Box } from '@mui/material'

const ImportNameDropdown = () => {
  return (
    <Box mb={2}>
      <FormControl fullWidth>
        <InputLabel id='import-name-label'>Select Import Name:</InputLabel>
        <Select
          labelId='import-name-label'
          id='import-name-select'
          label='Select Import Name'
        ></Select>
      </FormControl>
    </Box>
  )
}

export default ImportNameDropdown
