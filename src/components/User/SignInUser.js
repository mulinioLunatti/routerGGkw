import React from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import SignUpUserComponent from "./SignUpUser";
import {useUserContext} from "../../contexts/UserContext";
import IconButton from "@mui/material/IconButton";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export default ()=>{
	const {singInUser } = useUserContext();
	const [valueSignInUserInput, setValueSignInUserInput] = React.useState({})
	const [passwordVisibility, setPasswordVisibility] = React.useState(false);
	const handleInputChangeValueSignInUserInput = (event) => setValueSignInUserInput({
		...valueSignInUserInput,
		[event.target.name]: event.target.value
	});
	const handleSubmitSignInUser = (event) => {
		event.preventDefault()
		singInUser({...valueSignInUserInput})
	};
	return(
		<>
			<Box fontSize={30} fontWeight="fontWeightBold" fontFamily={"Roboto"}>
				Sign in to your account
			</Box>
			<Box py={2}>
				E-MAIL*
			</Box>
			<Box>
				<TextField
					label="Enter your email address"
					variant="outlined"
					fullWidth
					name={"userEmail"}
					onChange={handleInputChangeValueSignInUserInput}
				/>
			</Box>
			<Box py={2}>
				PASSWORD*
			</Box>
			<Box>
				<TextField
					label="Enter your password"
					variant="outlined"
					type={passwordVisibility ? "text" :"password"}
					InputProps={{
						endAdornment: passwordVisibility ? <InputAdornment position="end"><IconButton onClick={(e)=>{setPasswordVisibility(false)}}><Visibility/></IconButton></InputAdornment> : <InputAdornment position="end"><IconButton onClick={(e)=>{setPasswordVisibility(true)}}><VisibilityOffIcon/></IconButton></InputAdornment>
					}}
					fullWidth
					name={"userPlanPassword"}
					onChange={handleInputChangeValueSignInUserInput}
				/>
				{/*<TextField */}
				{/*	label="Enter your password" */}
				{/*	variant="outlined" */}
				{/*	type={passwordVisibility ? "text" :"password"}*/}
				{/*    InputProps={{*/}
				{/*	    endAdornment: passwordVisibility ? <InputAdornment position="end"><IconButton onClick={(e)=>{setPasswordVisibility(false)}}><Visibility/></IconButton></InputAdornment> : <InputAdornment position="end"><IconButton onClick={(e)=>{setPasswordVisibility(true)}}><VisibilityOffIcon/></IconButton></InputAdornment>*/}
				{/*    }}*/}
				{/*    fullWidth*/}
				{/*/>*/}
			</Box>
			<Box display={"flex"} alignItems={"center"}>
				<Box flexGrow={1}>
					<FormControlLabel control={<Checkbox defaultChecked/>}
					                  label="keep me signed in"/>
				</Box>
				<Box display={"inline-flex"}>
					<Link href="#" color="primary" underline="none">
						{'Forget Password?'}
					</Link>
				</Box>
			</Box>
			<Box py={2}>
				<Button fullWidth variant="contained" onClick={handleSubmitSignInUser}>Sign IN</Button>
			</Box>
			<Box>
				{`Don't Have an Account? `}
				<Box display={"inline-flex"}>
					<Link href="#" color="primary" underline="none">
						<SignUpUserComponent>
							{'Sign UP'}
						</SignUpUserComponent>
					</Link>
				</Box>
			</Box>
		</>
	)
}