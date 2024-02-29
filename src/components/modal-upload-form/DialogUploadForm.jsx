import { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
  Box,
} from '@mui/material'

export default function DialogUploadForm() {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Box sx={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
        <Button variant='outlined' onClick={handleClickOpen}>
          Open dialog
        </Button>
      </Box>
      <Dialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}
        maxWidth={'lg'}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id='customized-dialog-title'>
          <Box sx={{ width: '50%', margin: 'auto' }}>
            <Typography variant='h4' align='center' gutterBottom>
              Document Upload
            </Typography>
          </Box>
        </DialogTitle>
        <IconButton
          aria-label='close'
          onClick={handleClose}
          sx={{
            position: 'absolute',
            left: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers></DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Continue Import
          </Button>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
