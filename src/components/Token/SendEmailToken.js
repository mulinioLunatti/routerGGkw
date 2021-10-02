import React, {useEffect} from "react";
import Box from "@mui/material/Box";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import {CircularProgress} from "@mui/material";
import {useTokenContext} from "../../contexts/TokenContext";
import {useUserContext} from "../../contexts/UserContext";
import {useHistory, withRouter} from "react-router-dom";
import HeaderComponent from "../Common/Header";
import LanguageComponent from "../Language";
import MenuUserComponent from "../User/MenuUser";
import {useDispatch} from 'react-redux'

export default withRouter(function SendEmailToken(props) {
	const dispatch = useDispatch()
	const history = useHistory();
	const {sendToken, token: {tokenEmailStatus}} = useTokenContext()
	const {getUser, user: {current: {userEmailVerify, userEmail} = {}}, validateUserToken} = useUserContext();
	React.useEffect(() => {
		validateUserToken({userToken: window.localStorage.getItem("credential")}, () => {
		}, () => {
			history.replace("/")
		})
	}, [history, validateUserToken])
	useEffect(() => {
		userEmailVerify === false && !tokenEmailStatus && sendToken({
				tokenUserEmail: userEmail,
				tokenType: "HASH",
				tokenService: "ELECTRONIC_MAIL",
				tokenAgent: "EMAIL"
			}, () =>
				dispatch(
					{
						type: 'SET_TOKEN_EMAIL_STATUS',
						payload: true
					}
				)
		)
	}, [sendToken, userEmailVerify, tokenEmailStatus,dispatch,userEmail]);
	React.useEffect(() => {
		getUser({})
	}, [getUser])
	React.useEffect(() => {
		userEmailVerify === true && props.history.goBack();
	}, [userEmailVerify, props.history])
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
				<Box marginBottom={"20px"}>
					<MailOutlineOutlinedIcon sx={{fontSize: "150px"}}/>
				</Box>
				<Box component={"h4"} marginBottom={"20px"}>Verify your email address</Box>
				<Box textAlign={"center"} component={"p"} color="#888888" width={"50%"} marginBottom="20px">{`we've sent
					an email to ${userEmail} to verify your email address and activate your account. The link in the
					email will expire in 24 hours.`}</Box>
				<Box textAlign={"center"} component={"p"} fontSize="1.1rem" color="#888888" width={"50%"}
				     marginBottom="15px">Didn't receive the email?</Box>
				<Box textAlign={"center"} component={"p"} fontSize="0.7rem" color="#888888" width={"50%"}>please check
					your spam folder.</Box>
				<Box display="flex" alignItems={"center"} justifyContent={"center"} flexDirection="row">
					<Box whiteSpace="nowrap" marginBottom={0} textAlign={"center"} component={"p"} fontSize="0.7rem"
					     color="#888888">Add info@victory.com to your contacts and &nbsp;</Box>
					<Link fontSize="0.7rem" sx={{cursor: "pointer"}} onClick={() => dispatch(
						{
							type: 'SET_TOKEN_EMAIL_STATUS',
							payload: false
						}
					)}>resend the email.</Link>
				</Box>
				<Box display="flex" alignItems={"center"} justifyContent={"center"} flexDirection="row"
				     marginBottom={"20px"}>
					<Box whiteSpace="nowrap" marginBottom={0} textAlign={"center"} component={"p"} fontSize="0.7rem"
					     color="#888888">still having trouble? Contact at &nbsp; </Box>
					<Link fontSize="0.7rem" sx={{cursor: "pointer"}}>info@victory.com</Link>
				</Box>
				{!tokenEmailStatus && <CircularProgress color="primary"/>}
			</Container>
		</>
	)
})