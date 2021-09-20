import React from "react";
import Box from '@mui/material/Box';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Fab from '@mui/material/Fab';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import CallMadeIcon from '@mui/icons-material/CallMade';
import Carousel from 'react-bootstrap/Carousel'
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import SensorsIcon from '@mui/icons-material/Sensors';
import InstagramIcon from '@mui/icons-material/Instagram';
import RedditIcon from '@mui/icons-material/Reddit';
import WifiTetheringIcon from '@mui/icons-material/WifiTethering';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import {FormControl, InputLabel, OutlinedInput} from "@mui/material";


// import {Typography} from "@mui/material";


export default () => {
	const [showSignUpModal,setShowSignUpModal]=React.useState(true);
	const [passwordVisibility,setPasswordVisibility]=React.useState(false);
	const [signUpMatchPass,setSignUpMatchPass]=React.useState(false);
	const [signUpForm,setSignUpForm]=React.useState({
		data:{
			fName:"",
			lName:"",
			pass:"",
			passAgain:"",
			email:""
		},
		error:{
			fNameError:"",
			lNameError:"",
			passError:"",
			passAgainError:"",
			emailError:"",
		}
	})
	React.useEffect(()=>{
		if(signUpForm.data.pass!=="" && signUpForm.data.passAgain!=="" && signUpForm.data.pass===signUpForm.data.passAgain){
			setSignUpMatchPass(true)
		}
		else{
			setSignUpMatchPass(false)
		}
	},[signUpForm])

	const onSignUpSubmit=()=>{
		// console.log("saggg");
		let errors={
			fNameError:"",
			lNameError:"",
			passError:"",
			passAgainError:"",
			emailError:"",
		}

		// setSignUpForm({...signUpForm,error:{...signUpForm.error,fNameError: "Please enter your first name"}})
		// setSignUpForm({...signUpForm,error:{...signUpForm.error,lNameError: "Please enter your last name"}})

		// setSignUpForm({
		// 	...signUpForm,
		// 	error: {fNameError: "", lNameError: "", passError: "", passAgainError: "", emailError: "",}
		// })
		if(signUpForm.data.fName===""){
			// setSignUpForm({...signUpForm,error:{...signUpForm.error,fNameError: "Please enter your first name"}})
			errors.fNameError="Please enter your first name"
		}
		if(signUpForm.data.lName===""){
			// setSignUpForm({...signUpForm,error:{...signUpForm.error,lNameError: "Please enter your last name"}})
			errors.lNameError="Please enter your last name"
		}
		if(signUpForm.data.pass===""){
			// setSignUpForm({...signUpForm,error:{...signUpForm.error,passError: "Please enter your password"}})
			errors.passError="Please enter your password"
		}
		if(signUpForm.data.passAgain===""){
			// setSignUpForm({...signUpForm,error:{...signUpForm.error,passAgainError: "Please enter your password again"}})
			errors.passAgainError= "Please enter your password again"
		}
		if(signUpForm.data.email===""){
			// setSignUpForm({...signUpForm,error:{...signUpForm.error,emailError: "Please enter your email"}})
			errors.emailError="Please enter your email"
		}
		else{
			let emailPattern=/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
			if(!emailPattern.test(signUpForm.data.email))errors.emailError="please enter a valid email"

		}

		if(signUpForm.data.pass!=="" && signUpForm.data.passAgain!=="" && signUpForm.data.pass!==signUpForm.data.passAgain){
			errors.passError="two passwords does not match"
			errors.passAgainError= "two passwords does not match"
			// setSignUpForm({...signUpForm,error:{...signUpForm.error,passAgainError: "two passwords does not match"}})
			// setSignUpForm({...signUpForm,error:{...signUpForm.error,passAgainError: "two passwords does not match"}})
		}
		setSignUpForm({...signUpForm,error: errors})
	}




	return (
		<React.Fragment>
				<Box display={"flex"} flexDirection={"column"} minHeight={"100vh"}>
					<Container maxWidth={"xl"} disableGutters={false}>
						<Box display={"flex"} alignItems={"center"}>
							<Box py={2} flexGrow={1} display={"flex"} flexDirection={"row"}>
								<WifiTetheringIcon sx={{ fontSize: 42 }} />
								<Box ml={1}>
									<Box color={"text.primary"}>
										<Link href="#" underline="none">
											{'VICTORY'}
										</Link>
									</Box>
									<Box fontSize={12}>
										PLATFORM
									</Box>
								</Box>
							</Box>
							<Box px={2} color={"text.primary"}>
								<Link href="#" color="primary" underline={"none"}>
									<SensorsIcon/>{'Live news stream'}
								</Link>
							</Box>
							<Fab size="small">
								<GTranslateIcon/>
							</Fab>
						</Box>
					</Container>
					<Divider/>
					<Container maxWidth={"xl"} disableGutters={false}>

						<Box>
							<style type="text/css">{`
						    .carousel-control-next, .carousel-control-prev {
						    width: auto;
						    }
						`}
							</style>
							<Carousel indicators={false} >
								<Carousel.Item className={"px-5 py-2"}>
									<Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
										<Box mr={2}>
											<Fab disabled size="small">
												02
											</Fab>
										</Box>
										<Box>
											<Box>
												<Link href="#" color="inherit" underline={"none"}>
													{'This pandemic is our World War II.\' An up-close look at how a Florida hospital fights to save Covid-19 patients'}
												</Link>
												<IconButton aria-label="delete" size="small" color="primary">
													<CallMadeIcon fontSize="inherit"/>
												</IconButton>
											</Box>
											<Box display={"flex"} alignItems={"center"}>
												<Chip label="World" size="small" color="primary"
												      sx={{fontSize: ".5rem", height: "18px"}}/>
												<Box display={"inline-flex"} fontSize={12} color={"text.disabled"} ml={1}>
													Updated 6:50 AM ET, Sat September 11, 2021
												</Box>
											</Box>
										</Box>
									</Box>
								</Carousel.Item>
								<Carousel.Item className={"px-5 py-2"}>
									<Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
										<Box mr={2}>
											<Fab disabled size="small">
												02
											</Fab>
										</Box>
										<Box>
											<Box>
												<Link href="#" color="inherit" underline={"none"}>
													{'This pandemic is our World War II.\' An up-close look at how a Florida hospital fights to save Covid-19 patients'}
												</Link>
												<IconButton aria-label="delete" size="small" color="primary">
													<CallMadeIcon fontSize="inherit"/>
												</IconButton>
											</Box>
											<Box display={"flex"} alignItems={"center"}>
												<Chip label="World" size="small" color="primary"
												      sx={{fontSize: ".5rem", height: "18px"}}/>
												<Box display={"inline-flex"} fontSize={12} color={"text.disabled"} ml={1}>
													Updated 6:50 AM ET, Sat September 11, 2021
												</Box>
											</Box>
										</Box>
									</Box>
								</Carousel.Item>
								<Carousel.Item className={"px-5 py-2"}>
									<Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
										<Box mr={2}>
											<Fab disabled size="small">
												02
											</Fab>
										</Box>
										<Box>
											<Box>
												<Link href="#" color="inherit" underline={"none"}>
													{'This pandemic is our World War II.\' An up-close look at how a Florida hospital fights to save Covid-19 patients'}
												</Link>
												<IconButton aria-label="delete" size="small" color="primary">
													<CallMadeIcon fontSize="inherit"/>
												</IconButton>
											</Box>
											<Box display={"flex"} alignItems={"center"}>
												<Chip label="World" size="small" color="primary"
												      sx={{fontSize: ".5rem", height: "18px"}}/>
												<Box display={"inline-flex"} fontSize={12} color={"text.disabled"} ml={1}>
													Updated 6:50 AM ET, Sat September 11, 2021
												</Box>
											</Box>
										</Box>
									</Box>
								</Carousel.Item>
							</Carousel>
						</Box>


					</Container>
					<Divider/>
					<Box flex={"1 0 auto"} display={"flex"} alignItems={"center"} py={5} >
						<Container maxWidth={"xl"}>
							<Grid container spacing={3}>
								<Grid item xs={9}>
									<Box fontSize={60} fontWeight="fontWeightBold" fontFamily={"Roboto"}>
										<Box>
											A platform to empower
										</Box>
										<ArrowForwardIcon color="primary" fontSize={"30px"} /> your voice
									</Box>
									<Box fontSize={24} color={"text.disabled"} pb={3}>
										Dear friends, by registering on this platform, you can send any kind of content,
										including video, image, text, etc ...
									</Box>
									<Box>
										<Fab variant="extended" color="primary" size="medium">
											About us
										</Fab>
										<Box display={"inline"} mx={5}>
											<Link href="#" color="inherit">
												{'Privacy policy'}
											</Link>
											<IconButton aria-label="delete" size="small" color="primary">
												<CallMadeIcon fontSize="inherit"/>
											</IconButton>
										</Box>
									</Box>
								</Grid>
								<Grid item xs={3}>
									<Box fontSize={30} fontWeight="fontWeightBold" fontFamily={"Roboto"}>
										Sign in to your account
									</Box>
									<Box py={2}>
										E-MAIL*
									</Box>
									<Box>
										<TextField label="Enter your email address" variant="outlined" fullWidth/>
									</Box>
									<Box py={2}>
										PASSWORD*
									</Box>
									<Box>
										<TextField label="Enter your password" variant="outlined"
										           InputProps={{
											           endAdornment: <InputAdornment position="end"><Visibility/></InputAdornment>,
										           }}
										           fullWidth/>
									</Box>
									<Box display={"flex"} alignItems={"center"}>
										<Box flexGrow={1}>
											<FormControlLabel control={<Checkbox defaultChecked />} label="keep me signed in" />
										</Box>
										<Box display={"inline-flex"}>
											<Link href="#" color="primary" underline="none">
												{'Forget Password?'}
											</Link>
										</Box>
									</Box>

									<Box py={2}>
										<Button fullWidth variant="contained">Sign IN</Button>
									</Box>
									<Box>
										{`Don't Have an Account? `}
										<Link href="#" color="primary" underline="none" onClick={(e)=>{setShowSignUpModal(true)}}>
											{'Sing UP'}
										</Link>
									</Box>
								</Grid>
							</Grid>
						</Container>
					</Box>
					<Box flexShrink={0} py={5}>
						<Container maxWidth={"xl"} disableGutters={false}>
							<Box display={"flex"} alignItems={"center"}>
								<Box flexGrow={1} sx={{'& > :not(style)': {mr:1},}}>
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
								<Box fontSize={12}>
									© 2021 VictoryPlatform, LLC. All rights reserved.
								</Box>
								<Box display={"inline-flex"}>
									<Box fontSize={12} ml={2}>
										<Link href="#" color="primary" underline="none">
											{'Manage Cookies+'}
										</Link>
									</Box>
									<Box fontSize={12} ml={2}>
										<Link href="#" color="primary" underline="none">
											{'Newsletters'}
										</Link>
									</Box>


								</Box>
							</Box>
						</Container>
					</Box>
				</Box>
			<Modal
				open={showSignUpModal}
				keepMounted
				onBackdropClick={(e)=>{setShowSignUpModal(false)}}
			>
				<Box
					display={"flex"}
					alignItems={"center"}
					justifyContent={"center"}
					flexDirection={"column"}
					width={"100vw"}
					height={"100vh"}
					background={"background.paper"}
					onClick={(e)=>{setShowSignUpModal(false)}}
				>
					<Paper
						elevation={3}
						style={{padding:"10px" , borderRadius:"2px"}}
						onClick={(e)=>{e.stopPropagation()}}
					>
						<Box
							display={"flex"}
							// alignItems={"center"}
							// justifyContent={"center"}
							flexDirection={"column"}
							width={"400px"}
						>
							<Box fontSize={30} fontWeight="fontWeightBold" fontFamily={"Roboto"} textAlign={"center"}>
								Sign UP
							</Box>
							<Box pt={2} display={"flex"}>
								<Box>First Name</Box> <Box color={"red"}>*</Box>
							</Box>
							<Box>
								<TextField
									error={signUpForm.error.fNameError !=="" ? true:false }
									helperText={signUpForm.error.fNameError !=="" ? signUpForm.error.fNameError:null }
									label="Enter your first name"
									variant="outlined"
									fullWidth
									onChange={(e)=>{setSignUpForm({...signUpForm,data:{...signUpForm.data,fName: e.target.value}})}}
								/>
							</Box>

							<Box pt={2} display={"flex"}>
								<Box>Last Name</Box> <Box color={"red"}>*</Box>
							</Box>
							<Box>
								<TextField
									error={signUpForm.error.lNameError !=="" ? true:false }
									helperText={signUpForm.error.lNameError !=="" ? signUpForm.error.lNameError:null }
									label="Enter your last name"
									variant="outlined"
									fullWidth
									onChange={(e)=>{setSignUpForm({...signUpForm,data:{...signUpForm.data,lName: e.target.value}})}}
								/>
							</Box>

							<Box pt={2} display={"flex"}>
								<Box>Password</Box> <Box color={"red"}>*</Box>
							</Box>
							<Box>
								<FormControl fullWidth variant="outlined">
									<InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
									<OutlinedInput
										error={signUpForm.error.passError !=="" ? true:false }
										helperText={signUpForm.error.passError !=="" ? signUpForm.error.passError:null }
										inputProps={passwordVisibility ? {type: "text" }:{type: "password" }}
										endAdornment={
											<>
												<CheckCircleOutlineIcon style={signUpMatchPass ? {color:"green"} : {color:"transparent"}}/>
												<IconButton onClick={(e)=>{setPasswordVisibility(prevState => !prevState)}}>
													{passwordVisibility ? <Visibility/> : <VisibilityOffIcon/>}
												</IconButton>
											</>
										}
										// placeholder="Enter your password"
										label="password"
										variant="outlined"
										fullWidth
										onChange={(e)=>{setSignUpForm({...signUpForm,data:{...signUpForm.data,pass: e.target.value}})}}
										// notchedOutline={{display:"none"}}
										// notched={true}
									/>
								</FormControl>
							</Box>
							<Box pt={2} display={"flex"}>
								<Box>Retype Password</Box> <Box color={"red"}>*</Box>
							</Box>
							<Box>
								<FormControl fullWidth variant="outlined">
									<InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
									<OutlinedInput
										error={signUpForm.error.passAgainError !=="" ? true:false }
										helperText={signUpForm.error.passAgainError !=="" ? signUpForm.error.passAgainError:null }
										inputProps={passwordVisibility ? {type: "text" }:{type: "password" }}
										endAdornment={
											<>
												<CheckCircleOutlineIcon style={signUpMatchPass ? {color:"green"} : {color:"transparent"}}/>
												<IconButton onClick={(e)=>{setPasswordVisibility(prevState => !prevState)}}>
													{passwordVisibility ? <Visibility/> : <VisibilityOffIcon/>}
												</IconButton>
											</>
										}
										label="Enter your password again"
										variant="outlined"
										fullWidth
										onChange={(e)=>{setSignUpForm({...signUpForm,data:{...signUpForm.data,passAgain: e.target.value}})}}

									/>
								</FormControl>

							</Box>

							<Box pt={2} display={"flex"}>
								<Box>E-mail</Box> <Box color={"red"}>*</Box>
							</Box>
							<Box>
								<TextField
									error={signUpForm.error.emailError !=="" ? true:false }
									helperText={signUpForm.error.emailError !=="" ? signUpForm.error.emailError:null }
									inputProps={{type: "email"}}
									label="Enter your E-mail"
									variant="outlined"
									fullWidth
									onChange={(e)=>{setSignUpForm({...signUpForm,data:{...signUpForm.data,email: e.target.value}})}}
								/>
							</Box>

							<Box pt={2}>
								<Button fullWidth variant="contained" onClick={onSignUpSubmit}>Sign UP</Button>
							</Box>

						</Box>

					</Paper>
				</Box>
			</Modal>
		</React.Fragment>
	)
}