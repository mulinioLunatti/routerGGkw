import React, {useEffect, useState} from "react";
import Container from "@mui/material/Container";
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';
import SentimentDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentDissatisfiedOutlined';
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import HeaderComponent from "../Common/Header";
import LanguageComponent from "../Language";
import {
	useHistory,
	useLocation
} from "react-router-dom";
import Button from "@mui/material/Button";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import RedditIcon from "@mui/icons-material/Reddit";
import MenuUserComponent from "../User/MenuUser";
import {useUserContext} from "../../contexts/UserContext";
import {CircularProgress} from "@mui/material";

export default function VerifyEmailToken() {
	const history = useHistory();
	const {error,verifyEmailUser} = useUserContext();
	const [valueUserEmailVerify, setValueUserEmailVerify] = useState(true)
	const userToken = new URLSearchParams(useLocation().search).get("token")
	useEffect(() => {
		verifyEmailUser({userToken: userToken},()=>{} ,()=>{},()=>setValueUserEmailVerify(true))
	}, [userToken, verifyEmailUser]);

	return (
		<>
			<HeaderComponent
				secondaryMenu={<>
					<LanguageComponent/>
					<MenuUserComponent/>
				</>}
			/>
			<Container sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				flexDirection: "column",
				height: "80vh"
			}}>
                {valueUserEmailVerify && error.length === 0 &&
                <>
                    <Box marginBottom={"20px"}>
                        <MarkEmailReadOutlinedIcon color="primary" sx={{fontSize: "70px"}}/>
                    </Box>
                    <Box display="flex" justifyContent={"center"} flexDirection="row">
                        <Box>THanks</Box>
                        <Box color="#888888">Your email address has been verified. Your account Is now active.</Box>
                    </Box>
                    <Box marginBottom="40px">Please use the link below to your account. </Box>
                    <Box width={"15%"} marginBottom={"20px"}>
                        <Button sx={{borderRadius: "50px"}} fullWidth variant="contained" onClick={(e) => {
                            history.push("/")
                        }}>CONTINUE</Button>
                    </Box>
                    <Box color="#888888" fontSize={"0.8rem"} marginBottom={"50px"}>Thank you for choosing Victory
                        Platform.</Box>
                    <Box fontSize={12} marginBottom={"20px"}>
                        © 2021 VictoryPlatform, LLC. All rights reserved.
                    </Box>
                    <Box sx={{'& > :not(style)': {mr: 1},}}>
                        <Link href="#" color="inherit" underline="none">
                            <InstagramIcon color="disabled"/>
                        </Link>
                        <Link href="#" color="inherit" underline="none">
                            <TwitterIcon color="disabled"/>
                        </Link>
                        <Link href="#" color="inherit" underline="none">
                            <FacebookIcon color="disabled"/>
                        </Link>
                        <Link href="#" color="inherit" underline="none">
                            <RedditIcon color="disabled"/>
                        </Link>
                    </Box>

                </>
                }
				{valueUserEmailVerify && error.length > 0 &&
				<>
					<Box marginBottom={"20px"}>
						<SentimentDissatisfiedOutlinedIcon sx={{fontSize: "150px"}}/>
					</Box>
					<Box component={"h4"} marginBottom={"20px"}>Email Verification failed</Box>
					<Box textAlign={"center"} component={"p"} fontSize="0.7rem" color="#888888" width={"50%"}
					     marginBottom={"20px"}>Either the link had already expired or you did not copy the URL
						property.</Box>
					<Link href={"/token/email/send"} fontSize="0.7rem" sx={{cursor: "pointer"}}>Sign In & resend verification link </Link>
				</>
				}
				{!valueUserEmailVerify && <CircularProgress color="primary"/>}
			</Container>
		</>
	)
}