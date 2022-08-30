import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

function Dropfiles(){

    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
      }, [])
      const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    return(
        <div className='test'>
            <div style={{color:'black'}} {...getRootProps()}>
                <input {...getInputProps()} />
                {
                    isDragActive ?
                    <p>Drop the files here ...</p> :
                    <p>Drop files here, or click to select files</p>
                }
            </div>
        </div>
    )
}

export default Dropfiles