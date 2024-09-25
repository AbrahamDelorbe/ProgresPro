import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useState } from 'react';

import Text from "../atoms/Text";
import FullWidthInputField, { FullWidthInputPros } from '../atoms/InputFields';
// import ButtonComponent from '../atoms/Buttons';

import ButtonComponent from '../atoms/Buttons';
import isValidEmail from '../../helpers';
import PopUp from '../atoms/PopUp';

type HandleSubmitValues = {
    name: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

type FormErrors = {
    [key: string]: string
}

const commonStyles = {
    bgcolor: 'background.paper',
    borderColor: 'grey',
    m: 1,
    border: 1,
    width: '100%',
    height: '100%',
};

export default function SignUpComponent() {
    const [signUpForm, setSignUpForm] = useState<HandleSubmitValues>({});
    const [errors, setErrors] = useState<FormErrors>({})


    const onChangeFormInput = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setSignUpForm((prevData) => {
            return {
                ...prevData,
                [event.target.name]: event.target.value,
            }
        })

        setErrors((prevErrors) => ({
            ...prevErrors,
            [event.target.name]: '',
        }));
    }

    
    const validateForm = () => {
        const newErrors: FormErrors = {};
        if (!signUpForm.name) newErrors.name = 'Name is required';
        if (!signUpForm.lastName) newErrors.lastName = 'Last name is required';
        if (!signUpForm.email) {
            newErrors.email = 'Email is required';
        } else if (!isValidEmail(signUpForm.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!signUpForm.password) newErrors.password = 'Password is required';
        if (signUpForm.password !== signUpForm.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; 
    };

    const handleSubmitForm = () => {
        if (!validateForm()){
            return <PopUp severity="error" message={'Add the corresponding values'} />
        }
    }




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
                            <FullWidthInputField label='Name' inputName="name" width={'100%'} value={signUpForm.name} onChange={(event) => onChangeFormInput(event)} error={errors} />
                            {/* <TextField label="name" name="name" value={signUpForm.name} onChange={(event) => onChangeFormInput(event)} /> */}
                        </Box>
                        <Box sx={{ mb: 2 }}>
                            <FullWidthInputField label='Last name' inputName="lastName" width={'100%'} value={signUpForm.lastName} onChange={(event) => onChangeFormInput(event)} error={''} />

                        </Box>
                        <Box sx={{ mb: 2 }}>
                            <FullWidthInputField label='Email' inputName="email" width={'100%'} value={signUpForm.email} onChange={(event) => onChangeFormInput(event)} error={''} />
                        </Box>
                        <Box sx={{ mb: 2 }}>
                            <FullWidthInputField label='Password' inputName="password" width={'100%'} value={signUpForm.password} onChange={(event) => onChangeFormInput(event)} error={''} />
                        </Box>
                        <Box sx={{ mb: 2 }}>
                            <FullWidthInputField label='Confirm Password' inputName="confirmPassword" width={'100%'} value={signUpForm.confirmPassword} onChange={(event) => onChangeFormInput(event)} error={''} />
                        </Box>
                        <Box sx={{ mb: 2, marginRight: 2 }}>
                            <ButtonComponent text="Register" variant='contained' onClick={handleSubmitForm} />

                        </Box>

                    </Box>
                </Box>
            </Container>
        </React.Fragment>
    )
}