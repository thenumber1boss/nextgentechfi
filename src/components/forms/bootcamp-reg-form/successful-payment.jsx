import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import "./registration.css";
import NextGenLogo from "../../../assets/images/tech-fi-3.png";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';
import { Button } from '../../UI/button/button';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import config from '../../../config';

const CustomTimelineItem = styled(TimelineItem)({
  '&::before': {
    display: 'none',
  },
});

const SuccessfulPayment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [inviteCode, setInviteCode] = useState(null);
  const queryParams = new URLSearchParams(location.search);
  const transactionReference = queryParams.get('reference');
  console.log('transaction reference', transactionReference);

  useEffect(() => {
    const fetchInviteCode = async () => {
      try {
        const response = await fetch(`${config.API_BASE_URL}/api/invite-code/${transactionReference}`);
        if (response.ok) {
          const data = await response.json();
          setInviteCode(data.inviteCode);
          console.log('Invite Code:', data.inviteCode); // Log the invite code received from the server
        } else {
          const errorData = await response.json();
          console.error('Failed to fetch invite code:', errorData.message);
        }
      } catch (error) {
        console.error('Error fetching invite code:', error.message);
      }
    };

    if (transactionReference) {
      fetchInviteCode();
    }
  }, [transactionReference]);

  const HandleContinueRegistration = () => {
    navigate('/complete-registration1');
  };

  const HandleCancel = () => {
    navigate('/summer-bootcamp');
  };

  return (
    <div className='main-container'>
      <header className="reg-header">
        <img className="tech-fi" alt="Tech fi" src={NextGenLogo} />
      </header>
      <div className='reg-body'>
        <div className='timeline'>
          <Timeline position="right">
            <CustomTimelineItem>
              <TimelineSeparator>
                <TimelineDot color="success" sx={{ width: '10px', height: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <CheckCircleOutlineIcon />
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
                <TimelineDot color="success" sx={{ width: '10px', height: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <CheckCircleOutlineIcon />
                </TimelineDot>
                <TimelineConnector sx={{ backgroundColor: 'var(--secondary-colour)', height: '41px' }} />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="h6" sx={{ fontSize: '20px' }}>Payment Success</Typography>
                <Typography variant="subtitle1" color="text.secondary" sx={{ fontSize: '14px' }}>successful registration payment.</Typography>
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
          <div className="successful-payment">
            <h2>Payment Successful.</h2>
            <div className="frame">
              <p className="invite-txt">Your Invite code</p>
              <div className="invite-code-wrapper">
                <div className="invite-code">{inviteCode || 'Loading...'}</div>
              </div>
              <p className="hint-message">
                Use code to invite five persons and get a board game set.
              </p>
            </div>
          </div>
          <div className='reg-btn-main'>
           {/*
            <Button
              className="secondary-btn"
              divClassName="secondary-btn-txt"
              state="secondary"
              text="Cancel"
              type="submit"
              onClick={HandleCancel}
            />
            */}
            <Button
              className="primary-btn"
              divClassName="primary-btn-txt"
              state="primary"
              text="Close"
              type="button"
              onClick={HandleContinueRegistration}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessfulPayment;
