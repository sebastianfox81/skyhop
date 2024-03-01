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
  Grid,
  Divider,
} from '@mui/material'

import DragAndDropForm from './DragAndDropForm'
import SplitScheduling from './SplitScheduling'
import LocationChecking from './LocationChecking'
import ClientForm from './ClientForm'
import ElapsedDates from './ElapsedDates'
import Tolerance from './Tolerance'

export default function FormContainer() {
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
          Upload Document
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
            <Typography variant='h4' align='center' gutterBottom mt={3}>
              Document Upload
            </Typography>
            <Divider sx={{ ...dividerStyles }} />
          </Box>
        </DialogTitle>
        <IconButton
          aria-label='close'
          onClick={handleClose}
          sx={{
            position: 'absolute',
            left: 8,
            top: 8,
            color: 'white',
            background: '#032679',
            borderRadius: '20%',
            padding: '6px',
            '&: hover': {
              color: '#032679',
              border: 'solid 1px #032679',
            },
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
          <Grid container spacing={4}>
            <Grid item md={6} sx={{ width: '500px' }}>
              <DragAndDropForm />
              <ElapsedDates />
              <Tolerance />
            </Grid>
            <Grid item md={6} sx={{ width: '500px' }}>
              {' '}
              <SplitScheduling />
              <LocationChecking />
              <ClientForm />
            </Grid>
          </Grid>
          <Typography align={'center'} sx={{ fontWeight: '800' }}>
            Data in the import file is correct. Please press continue to import.
          </Typography>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center', mb: 3 }}>
          <Button
            variant='contained'
            autoFocus
            onClick={handleClose}
            sx={{ backgroundColor: '#032679' }}
          >
            Continue Import
          </Button>
          <Button
            variant='outlined'
            autoFocus
            onClick={handleClose}
            sx={{
              border: 'solid 2px orange',
              color: 'orange',
              paddingLeft: '45px',
              paddingRight: '45px',
            }}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

const dividerStyles = {
  border: 'solid 1px lightgrey',
  margin: 'auto',
  marginBottom: '10px',
  width: '300px',
}
