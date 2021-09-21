import React from "react";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import VerifiedIcon from '@mui/icons-material/Verified';
import ReplayRoundedIcon from '@mui/icons-material/ReplayRounded';
import Button from "@mui/material/Button";
import {Typography} from "@mui/material";


export default function EmailVerification(){
    return (
        <Box
            width={"100vw"}
            height={"100vh"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            // background={"#121212"}
        >
            <Paper elevation={1} width={"500px"}>
                <Box
                    display={"flex"}
                    padding={"20px"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    flexDirection={"column"}
                >
                    <VerifiedIcon style={{color:"green" ,fontSize:"80px"}}/>
                    <h5 style={{textDecoration:"bold"}}>Your email is not verified</h5>
                    <p sx={{width:'50%'}} >In order to verify your email we sent a verification link to your email</p>
                    <Typography sx={{opacity:"0.7"}} mb={2}>After your Email is verified you will be redirected to your panel</Typography>
                    <Button variant="contained"  startIcon={<ReplayRoundedIcon/>}>Resend Link</Button>
                </Box>
            </Paper>

        </Box>
    )
}