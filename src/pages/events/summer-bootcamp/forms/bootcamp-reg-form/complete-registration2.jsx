import * as React from 'react';
import "./registration.css";
import NextGenLogo from "../../../assets/images/tech-fi-3.png"
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';
import Adjust from '@mui/icons-material/Adjust';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Typography } from '@mui/material';
import { styled } from '@mui/system';

const CustomTimelineItem = styled(TimelineItem)({
  '&::before': {
    display: 'none',
  },
});



const CompleteRegistration = () => {
  return (
    <div className='main-container' >
        <header className="reg-header">
         <img className="tech-fi" alt="Tech fi" src={NextGenLogo} />
        </header>
        <div className='reg-body'>
      <div className='timeline'>
      <Timeline position="right">
        <CustomTimelineItem>
        <TimelineSeparator >
            <TimelineDot color="success" sx={{ width: '10px', height: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <CheckCircleOutlineIcon />
            </TimelineDot>
            <TimelineConnector sx={{
              backgroundColor:'var(--secondary-colour)',
              height: '41px', }}/>
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" sx={{ fontSize: '20px'}}>Personal Details</Typography>
            <Typography variant="subtitle1" color="text.secondary" sx={{ fontSize: '14px'}}>Submit details to proceed.</Typography>
          </TimelineContent>
        </CustomTimelineItem>

        <CustomTimelineItem>
          <TimelineSeparator>
          <TimelineDot color="success" sx={{ width: '10px', height: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <CheckCircleOutlineIcon />
            </TimelineDot>
            <TimelineConnector sx={{
                backgroundColor:'var(--secondary-colour)',
              height: '41px', }}/>
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" sx={{ fontSize: '20px'}}>Payment Checkout</Typography>
            <Typography variant="subtitle1" color="text.secondary" sx={{ fontSize: '14px'}}>Complete payment process.</Typography>
          </TimelineContent>
        </CustomTimelineItem>

        <CustomTimelineItem>
          <TimelineSeparator>
          <TimelineDot color="success" sx={{ width: '10px', height: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <Adjust />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" sx={{ fontSize: '20px'}}>Complete Registration</Typography>
            <Typography variant="subtitle1" color="text.secondary" sx={{ fontSize: '16px'}}>Fill in response to finish up</Typography>
          </TimelineContent>
        </CustomTimelineItem>
      </Timeline>
      </div>
      <div className='form-container'>
      </div>
      </div>
    </div>
  );
}

export default CompleteRegistration;
