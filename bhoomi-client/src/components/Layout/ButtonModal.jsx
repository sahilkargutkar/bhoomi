
import { Box, Button, Modal, Typography } from '@mui/material'
import React, { useState } from 'react'



const ButtonModal = (props, children) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };



    return (
        <div><Button onClick={handleOpen}>{props.name}</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Fill all the details
                    </Typography>
                    <div >
                        {props.children}
                    </div>
                </Box>


            </Modal></div>
    )
}

export default ButtonModal