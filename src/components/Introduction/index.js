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
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import SensorsIcon from '@mui/icons-material/Sensors';
import InstagramIcon from '@mui/icons-material/Instagram';
import RedditIcon from '@mui/icons-material/Reddit';
import WifiTetheringIcon from '@mui/icons-material/WifiTethering';
import SignUpUserComponent from "../User/SignUpUser";
import HeaderComponent from '../Common/Header'
import LanguageComponent from '../Language'
import Footer from "../Common/Footer";

export default () => {

	return (
		<React.Fragment>
			<Box display={"flex"} flexDirection={"column"} minHeight={"100vh"}>
				<HeaderComponent
					secondaryMenu={<>
						<Box px={2} color={"text.primary"}>
							<Link href="/story/short/list" color="primary" underline={"none"}>
								<SensorsIcon/>{'Live news stream'}
							</Link>
						</Box>
						<LanguageComponent/>
					</>}
				/>
				<Divider/>
				<Container maxWidth={"xl"} disableGutters={false}>


					<Box>
						<style type="text/css">{`
						    .carousel-control-next, .carousel-control-prev {
						    width: auto;
						    }
						`}
						</style>
						<Carousel indicators={false}>
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
				<Box flex={"1 0 auto"} display={"flex"} alignItems={"center"} py={5}>
					<Container maxWidth={"xl"}>
						<Grid container spacing={3}>
							<Grid item xs={9}>
								<Box fontSize={60} fontWeight="fontWeightBold" fontFamily={"Roboto"}>
									<Box>
										A platform to empower
									</Box>
									<ArrowForwardIcon color="primary" fontSize={"30px"}/> your voice
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
										           endAdornment: <InputAdornment
											           position="end"><Visibility/></InputAdornment>,
									           }}
									           fullWidth/>
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
									<Button fullWidth variant="contained">Sign IN</Button>
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
							</Grid>
						</Grid>
					</Container>
				</Box>
				<Footer/>
			</Box>
		</React.Fragment>
	)
}