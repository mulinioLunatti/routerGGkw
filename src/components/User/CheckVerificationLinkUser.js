import React, {useEffect, useState} from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import VerifiedIcon from "@mui/icons-material/Verified";
import {CircularProgress, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import ReplayRoundedIcon from "@mui/icons-material/ReplayRounded";
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';import {
    Link,
    useLocation
} from "react-router-dom";
export default function(){
    const [status,setStatus]=useState("checking");

    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }
    let query = useQuery();


    useEffect(()=>{
        if(query.get("token")){
            setTimeout(()=>{setStatus("success")},3000);
            console.log(query.get("token"));
        }
        else{
            setTimeout(()=>{setStatus("error")},3000);
        }


    },[])





    return (
        <Box
            width={"100vw"}
            height={"100vh"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            // transition={"all 500ms"}
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

                    {status==="checking" ?
                        <>
                            <CircularProgress style={{fontSize:"80px",margin:"20px"}} />
                            <h5>Please wait while we confirm your Email</h5>
                        </>
                        :status==="success" ?
                        <>
                            <VerifiedIcon style={{color:"green" ,fontSize:"80px"}}/>
                            <h3>Thanks!</h3>
                            <p>Your Email has been verified</p>

                        </>
                        :status==="error" ?
                        <>
                            <ErrorOutlineRoundedIcon color="error" style={{fontSize:"80px"}}/>
                            <h4>Sorry</h4>
                            <p>your link was Invalid</p>

                        </>
                        :null
                    }



                </Box>
            </Paper>

        </Box>
    )
}