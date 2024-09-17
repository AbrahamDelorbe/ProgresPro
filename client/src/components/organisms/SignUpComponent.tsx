import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Text from "../atoms/Text";
import FullWidthInputField from '../atoms/InputFields';
import ButtonComponent from '../atoms/Buttons';


const commonStyles = {
    bgcolor: 'background.paper',
    borderColor: 'grey',
    m: 1,
    border: 1,
    width: '100%',
    height: '100%',
};

export default function SignUpComponent() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm" >
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', ...commonStyles, borderRadius: 1 }}>
                    <Box>
                        <Box sx={{ my: 2 }}>
                            <Text tag={'h4'} text={'Sign Up'} />
                        </Box>
                        <Box sx={{ mb: 2 }}> {/* Add marginBottom to create space between input fields */}
                            <FullWidthInputField label='Name' width={'100%'} />
                        </Box>
                        <Box sx={{ mb: 2 }}>
                            <FullWidthInputField label='Last name' width={'100%'} />
                        </Box>
                        <Box sx={{ mb: 2 }}>
                            <FullWidthInputField label='Email' width={'100%'} />
                        </Box>
                        <Box sx={{ mb: 2 }}>
                            <FullWidthInputField label='Password' width={'100%'} />
                        </Box>
                        <Box sx={{ mb: 2 }}>
                            <FullWidthInputField label='Confirm password' width={'100%'} />
                        </Box>
                        <Box sx={{ mb: 2, marginRight: 2}}>
                            <ButtonComponent text="Register" variant='contained'/>
                        </Box>
                        
                    </Box>
                </Box>
            </Container>
        </React.Fragment>
    )
}