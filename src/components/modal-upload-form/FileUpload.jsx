import { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { Box } from '@mui/material'
import { Description } from '@mui/icons-material'

const FileUpload = ({ onFileUpload }) => {
  const [filePreview, setFilePreview] = useState(null)

  const onDrop = (acceptedFiles) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      const file = acceptedFiles[0]
      onFileUpload(file)
      if (file.type.startsWith('image/')) {
        const reader = new FileReader()
        reader.onload = () => {
          setFilePreview(reader.result)
        }
        reader.readAsDataURL(file)
      } else {
        setFilePreview(null)
      }
    }
  }

  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  const handleSubmit = () => {
    // TODO: add logic to for submission
    console.log('File submitted!')
  }

  return (
    <Box
      sx={{
        border: 'solid 1px black',
        padding: '30px',
        mb: 2,
        borderRadius: '10px',
      }}
    >
      <Box {...getRootProps()} sx={{ ...dropzoneStyles }}>
        <input {...getInputProps()} />
        <Description sx={{ color: 'orange' }} />
        <p>Drag &amp; Drop, or Browse</p>
        {filePreview && (
          <div style={{ marginTop: '10px' }}>
            <img
              src={filePreview}
              alt='File Preview'
              style={{ maxWidth: '100%', maxHeight: '200px' }}
            />
          </div>
        )}
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <button onClick={handleSubmit} style={buttonStyles}>
          Upload Manifest
        </button>
      </Box>
    </Box>
  )
}

const dropzoneStyles = {
  border: '2px dashed #cccccc',
  borderRadius: '4px',
  padding: '20px',
  textAlign: 'center',
  cursor: 'pointer',
}

const buttonStyles = {
  marginTop: '10px',
  padding: '10px',
  backgroundColor: '#032679',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
}

export default FileUpload
