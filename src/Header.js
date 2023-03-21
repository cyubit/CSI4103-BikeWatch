import React from 'react';
import Grid from '@mui/material/Grid';
import helpIcon from './Help-icon.png';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';


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

const Header = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className='Header'>
            <Grid container spacing={2} justifyContent='space-between' alignItems="center" style={{ marginLeft: '10px' }} >
                <Grid item xs={3}>
                    <h1>Bike Watch</h1>
                </Grid>
                <Grid item xs={1}>
                    <img src={helpIcon} alt="Help" style={{ width: "50px" }} onClick={handleOpen} />
                </Grid>
            </Grid>
            <Modal open={open} onClose={handleClose}>
                <Box sx={style}>
                    <p>- Bike Watch allows users to report bike thefts as well as view the locations and amounts of bike thefts in the Ottawa Area.</p>
                    <p>- Each area on the map covers a neighbourhood as designated by ONS Ottawa. </p>
                    <p>- The colour of the areas changes depending on the amount of thefts in neighbourhood.</p>
                    <p>- The closer the colour is to red, the more thefts have been reported in that area.</p>
                    <p>- Click anywhere off of this box to return to the app.</p>
                </Box>
            </Modal>
        </div>

    );
}

export default Header;