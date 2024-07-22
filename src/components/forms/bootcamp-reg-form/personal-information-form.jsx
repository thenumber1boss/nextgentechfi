import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Button } from '../../UI/button/button';
import { InputFields } from '../../UI/input-fields/input-fields';
import "./registration.css";
import NextGenLogo from "../../../assets/images/tech-fi-3.png";
import config from '../../../config';
import Paystack from '@paystack/inline-js';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';
import Adjust from '@mui/icons-material/Adjust';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { Typography } from '@mui/material';
import { styled } from '@mui/system';

const CustomTimelineItem = styled(TimelineItem)({
  '&::before': {
    display: 'none',
  },
});

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  phone: Yup.string().required('Phone Number is required'),
  schoolCode: Yup.string(),
  inviteCode: Yup.string(),
});




const PersonalInformation = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (data) => {

    try {
      // Validate invite and school codes by querying the server
      const response = await fetch(`${config.API_BASE_URL}/api/validate-codes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          inviteCode: data.inviteCode,
          schoolCode: data.schoolCode,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Validation error');
      }

      const { isInviteCodeValid, isSchoolCodeValid } = result;

      if (!isInviteCodeValid) {
        setErrorMessage('Invalid invite code');
        return;
      }

      if (!isSchoolCodeValid) {
        setErrorMessage('Invalid school code');
        return;
      }

      // Ensure Paystack is imported and available
      if (!Paystack) {
        console.error('Paystack library is not loaded.');
        return;
      }

      // Initialize Paystack
      const popup = new Paystack();

      popup.newTransaction({
        key: 'pk_test_b6aab05525fbb389ed9ca76eeeab24d2ea799bca',
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
        email: data.email,
        amount: 8500000, // Amount in kobo (85000 kobo = 85 NGN)
        currency: 'NGN',
        channels: ['card', 'bank', 'ussd'],
        metadata: {
          custom_fields: [
            {
              display_name: "Registration",
              variable_name: "registration",
              value: "NextGen tech-fi literacy bootcamp registration"
            }
          ]
        },
        onSuccess: async (transaction) => {
          console.log('Payment successful:', transaction);

          try {
            console.log('Sending transaction reference to server for verification...');
            const response = await fetch(`${config.API_BASE_URL}/api/verify-transaction`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ reference: transaction.reference }), // Adjust this based on your data structure
            });

            const result = await response.json();

            if (response.ok) {
              console.log('Transaction verified successfully on server:', result);
             // Include the transaction reference in the callback URL
              const successfulPaymentUrl = `/successful-payment?reference=${transaction.reference}`;
              navigate(successfulPaymentUrl);
            } else {
              console.error('Transaction verification failed on server:', result);
            }
          } catch (error) {
            console.error('Error verifying transaction on server:', error);
          }
        },
        onLoad: (response) => {
          console.log('onLoad: ', response);
        },
        onCancel: () => {
          console.log('Payment cancelled');
        },
        onError: (error) => {
          console.error('Error: ', error.message);
        }
      });
    } catch (error) {
      console.error('Error validating codes:', error); // Logs error to the console
      setErrorMessage('Error validating codes: ' + error.message);
    }
  };


  return (
    <div className='main-container'>
      <header className="reg-header">
        <img className="tech-fi" alt="Tech fi" src={NextGenLogo} />
      </header>
      <div className='reg-body'>
        <div className='timeline'>
          <Timeline position="right" sx={{ padding: '0px' }}>
            <CustomTimelineItem>
              <TimelineSeparator>
                <TimelineDot color="success" sx={{ width: '10px', height: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Adjust />
                </TimelineDot>
                <TimelineConnector sx={{ backgroundColor: 'var(--secondary-colour)', height: '41px' }} />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="h6" sx={{ fontSize: '20px' }}>Personal Details</Typography>
                <Typography variant="subtitle1" color="text.secondary" sx={{ fontSize: '14px' }}>Submit details to proceed.</Typography>
              </TimelineContent>
            </CustomTimelineItem>

            <CustomTimelineItem>
              <TimelineSeparator>
                <TimelineDot color="grey" sx={{ width: '10px', height: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <RadioButtonUncheckedIcon />
                </TimelineDot>
                <TimelineConnector sx={{ height: '41px' }} />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="h6" sx={{ fontSize: '20px' }}>Payment Checkout</Typography>
                <Typography variant="subtitle1" color="text.secondary" sx={{ fontSize: '14px' }}>Complete payment process.</Typography>
              </TimelineContent>
            </CustomTimelineItem>

            <CustomTimelineItem>
              <TimelineSeparator>
                <TimelineDot color="grey" sx={{ width: '10px', height: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <RadioButtonUncheckedIcon />
                </TimelineDot>
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="h6" sx={{ fontSize: '20px' }}>Complete Registration</Typography>
                <Typography variant="subtitle1" color="text.secondary" sx={{ fontSize: '16px' }}>Fill in response to finish up</Typography>
              </TimelineContent>
            </CustomTimelineItem>
          </Timeline>
        </div>
        <div className='form-container'>
        <h2>Welcome to the NextGen Tech-Fi 3 weeks Summer Boot-Camp Registration Page.</h2>
          <p className='form-subheading'>Please fill in your personal information below to proceed with the registration.</p>
          <form className='form' onSubmit={handleSubmit(onSubmit)}>
            <InputFields
              type="text"
              label="First Name"
              name="firstName"
              register={register} // Pass the register function here
              error={errors.firstName}
              placeholder="Please enter your first name"
            />
            
            <InputFields
              type="text"
              label="Last Name"
              name="lastName"
              register={register} // Pass the register function here
              error={errors.lastName}
              placeholder="Please enter your last name"
            />

            <InputFields
              type="email"
              label="Email Address"
              name="email"
              register={register} // Pass the register function here
              error={errors.email}
              placeholder="Please enter your active email address"
            />

            <InputFields
              type="tel"
              label="Phone Number"
              name="phone"
              register={register} // Pass the register function here
              error={errors.phone}
              placeholder="Please enter your phone number"
            />
            <div className='field-error'>
            <div className='referral-div'>
            <InputFields
              type="text"
              label="School code (if any)"
              name="schoolCode"
              className="referral-input"
              error={errors.schoolCode}
              register={register} // Pass the register function here
              placeholder="Unique School code here"
            />      

            <InputFields
              type="text"
              label="Referral code (if any)"
              name="inviteCode"
              className="referral-input"
              error={errors.inviteCode}
              register={register} // Pass the register function here
              placeholder="Enter invite code here"
            />
            </div>
            <p className='code-error-message'>{errorMessage}</p>
            </div>
            

            <div className='reg-btn-main flex-end'>
              <Button
                className="primary-btn"
                divClassName="primary-btn-txt"
                state="primary"
                text="Proceed to Payment"
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PersonalInformation;
