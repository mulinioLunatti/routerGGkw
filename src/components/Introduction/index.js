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

export default () => {
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
										<Link href="#" color="primary" underline="none" >
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
		</React.Fragment>
	)
}