import React from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Fab from '@mui/material/Fab';
import Link from '@mui/material/Link';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import SensorsIcon from '@mui/icons-material/Sensors';
import WifiTetheringIcon from '@mui/icons-material/WifiTethering';
import AddIcon from '@mui/icons-material/Add';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import CallMadeIcon from "@mui/icons-material/CallMade";
import IconButton from "@mui/material/IconButton";
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import PersonIcon from '@mui/icons-material/Person';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import ListItemIcon from "@mui/material/ListItemIcon";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Logout from "@mui/icons-material/Logout";
function createData(name, calories, fat, carbs, protein) {
	return {name, calories, fat, carbs, protein};
}

const rows = [
	createData('Millions of Microsoft web servers powered by vulnerable legacy software', 159, 6.0, 24, 4.0),
	createData('A major incident wiped data on Web Hosting Canada servers', 237, 9.0, 37, 4.3),
	createData('How Solarpunk and its radical optimism is changing the world', 262, 16.0, 24, 6.0),
	createData('Retros of the lost age: vintage computers from the East', 305, 3.7, 67, 4.3),
	createData('On the prowl for nudes, California man steals 620,000 iCloud photos', 356, 16.0, 49, 3.9),
];
export default () => {
	const {valueEditorJs,setValueEditorJs} = React.useState({})
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<React.Fragment>
			<Box display={"flex"} flexDirection={"column"} minHeight={"100vh"}>
				<Box>
					<Container maxWidth={"xl"} disableGutters={false}>
						<Box display={"flex"} alignItems={"center"}>
							<Box py={2} flexGrow={1} display={"flex"} flexDirection={"row"}>
								<WifiTetheringIcon sx={{fontSize: 42}}/>
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
							<Fab onClick={handleClick} sx={{ml:2}} size="small" color="primary" aria-label="add">
								<PersonIcon />
							</Fab>
							<Menu
								anchorEl={anchorEl}
								open={open}
								onClose={handleClose}
								onClick={handleClose}
								PaperProps={{
									elevation: 0,
									sx: {
										overflow: 'visible',
										filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
										mt: 1.5,
										'& .MuiAvatar-root': {
											width: 32,
											height: 32,
											ml: -0.5,
											mr: 1,
										},
										'&:before': {
											content: '""',
											display: 'block',
											position: 'absolute',
											top: 0,
											right: 14,
											width: 10,
											height: 10,
											bgcolor: 'background.paper',
											transform: 'translateY(-50%) rotate(45deg)',
											zIndex: 0,
										},
									},
								}}
								transformOrigin={{ horizontal: 'right', vertical: 'top' }}
								anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
							>
								<MenuItem href={"/user/stories"} component="a">
									<Avatar><DescriptionOutlinedIcon /></Avatar>
									Stories
								</MenuItem>
								<MenuItem>
									<Avatar><AnalyticsOutlinedIcon /></Avatar>
									stats
								</MenuItem>
								<Divider />
								<MenuItem>
									<ListItemIcon>
										<SettingsOutlinedIcon fontSize="small" />
									</ListItemIcon>
									Account Settings
								</MenuItem>
								<MenuItem>
									<ListItemIcon>
										<Logout fontSize="small" />
									</ListItemIcon>
									Logout
								</MenuItem>
							</Menu>
						</Box>
					</Container>
				</Box>
				<Divider/>
				<Box>
					<Container maxWidth={"xl"} disableGutters={false}>
						<Box display={"flex"} flexDirection={"row"} py={2}>
							<Box flexGrow={1}>
								Your stories {`(2504)`}
							</Box>
							<Fab href={"/story/create"} component={"a"} variant={'extended'} size={"small"} color={'primary'}>
								<AddIcon/>
								Write A Story
							</Fab>
						</Box>

					</Container>
				</Box>
				<Divider/>
				<Box my={5}>
				<Container maxWidth={"xl"} disableGutters={false}>
				<TableContainer component={Paper}>
					<Table sx={{minWidth: 650}} aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell>#</TableCell>
								<TableCell>Title</TableCell>
								<TableCell align="right">Included</TableCell>
								<TableCell align="right">Operations</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.map((row, index) => (
								<TableRow
									key={row.name}
									sx={{'&:last-child td, &:last-child th': {border: 0}}}
								>
									<TableCell>
										{index + 1}
									</TableCell>
									<TableCell component="th" scope="row">
										<Box fontSize={20}>
											{row.name}
											<IconButton aria-label="delete" size="small" color="primary">
												<CallMadeIcon fontSize="inherit"/>
											</IconButton>
										</Box>
										<Box color={"text.secondary"}>
											Updated 6:50 AM ET, Sat September 11, 2021
										</Box>
									</TableCell>
									<TableCell align="right">
										<IconButton component="span">
											<ImageOutlinedIcon />
										</IconButton>
										<IconButton component="span">
											<PlayCircleOutlineIcon />
										</IconButton>
										<IconButton component="span">
											<DescriptionOutlinedIcon />
										</IconButton>

									</TableCell>
									<TableCell align="right">
										<Button sx={{ml: 2, borderRadius: 25}} variant="outlined">DELETE</Button>
										<Button sx={{ml: 2, borderRadius: 25}} variant="outlined">Edit</Button>
										<Button sx={{ml: 2, borderRadius: 25}} variant="outlined">Export</Button>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
				</Container>
				</Box>
			</Box>
		</React.Fragment>
	)
}