import { Box, Divider, Typography } from '@mui/material'
import FileUpload from './FileUpload'
import ImportNameDropdown from './ImportNameDropdown'

const DragAndDropForm = () => {
  const handleFileUpload = (file) => {
    // TODO: send file to a server
    console.log('Uploaded file:', file)
  }
  return (
    <Box sx={{ minWidth: 120 }}>
      <ImportNameDropdown />
      <Divider sx={{ ...dividerStyles }} />
      <Typography sx={{ fontWeight: '800', mb: 1, fontSize: '12px' }}>
        Select a manifest you'd like to import
      </Typography>
      <FileUpload onFileUpload={handleFileUpload} />
      <Divider sx={{ ...dividerStyles }} />
    </Box>
  )
}

const dividerStyles = {
  border: 'solid 1px lightgrey',
  marginBottom: '10px',
  width: '250px',
}

export default DragAndDropForm
