import React from 'react';
import Grid from '@mui/material/Grid';
import helpIcon from './Help-icon.png';
import logo from './BikeWatch-Logo.png';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';


const style = { // This is the styling for the modal, taken from the Material UI documentation. Everything else in this file was written by our Team
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "60%",
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
        <div className='Header' data-testid='header-component'>
            <Grid container spacing={2} justifyContent='space-evenly' alignItems="center" style={{ marginLeft: '1%', paddingTop:'10px' }} > {/* This is the header, written by Adam. The grid ensures the header remains scalable*/}
                <Grid item xs={6}>
                <img src={logo} alt="BikeWatch Logo" style={{ width: "100px"}} onClick={handleOpen} />
                </Grid>
                <Grid item xs={1}>
                    <img src={helpIcon} alt="Help" style={{ width: "50px", cursor:'pointer' }} onClick={handleOpen}/>
                </Grid>
            </Grid>{/* This is the modal that pops up when the user clicks on the help icon written by Adam*/}
            <Modal open={open} onClose={handleClose}> 
                <Box sx={style}>
                    <p>- Bike Watch allows users to  <b>view the locations and amounts of bike thefts</b> in the Ottawa Area.</p>
                    <p>- Each area on the map covers a neighbourhood as designated by ONS Ottawa. </p>
                    <p>- The <b>colour of the areas</b> changes depending on the amount of thefts in neighbourhood.</p>
                    <p>- The <b>closer the colour is to red</b>, the more thefts have been reported in that area.</p>
                    <p>- Click anywhere off of this box to return to the app.</p>
                </Box>
            </Modal>
        </div>

    );
}

export default Header;