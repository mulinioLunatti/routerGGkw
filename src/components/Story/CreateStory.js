import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import WifiTetheringIcon from "@mui/icons-material/WifiTethering";
import Link from "@mui/material/Link";
import SensorsIcon from "@mui/icons-material/Sensors";
import Fab from "@mui/material/Fab";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import Divider from "@mui/material/Divider";
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import InputBase from '@mui/material/InputBase';
import ImageTool from '@editorjs/image';
import SimpleVideo from 'simple-video-editorjs';
import AttachesTool from '@editorjs/attaches';
import LinkTool from '@editorjs/link';
import SimpleImage from '@editorjs/simple-image';
import EditorJs from 'react-editor-js';
import Quote from '@editorjs/quote';
import Delimiter from '@editorjs/delimiter';
import Header from '@editorjs/header';
import Embed from '@editorjs/embed';
import './CreateStory.scss'
import PersonIcon from "@mui/icons-material/Person";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
export const EDITOR_JS_TOOLS = {
	delimiter: Delimiter,
	quote: Quote,
	header: Header,
	SimpleVideo:SimpleVideo,
	SimpleImage: {
		class: SimpleImage,
		inlineToolbar: true,
		config: {
			placeholder: 'Paste image URL'
		}
	},
	embed: Embed,
	linkTool: {
		class: LinkTool,
		config: {
			endpoint: 'http://localhost:8008/fetchUrl', // Your backend endpoint for url data fetching
		}
	},
	attaches: {
		class: AttachesTool,
		config: {
			endpoint: 'http://localhost:8008/uploadFile'
		}
	},
	image: {
		class: ImageTool,
		config: {
			endpoints: {
				byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
				byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
			}
		}
	}

}

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
					<Box display={"flex"} alignItems={"center"}>
						<Box py={2} flexGrow={1} display={"flex"} flexDirection={"row"} alignItems={"center"}>
							{'Draft Editor Story'}
							<Box px={2} fontSize={12} color={"text.disabled"}>
								{'Saved'}
							</Box>
						</Box>
						<Box color={"text.primary"}>
							<Link href="#" color={"inherit"} underline={"none"}>
								{'Preview'}
							</Link>
							<Button sx={{ml: 2}} variant="outlined" startIcon={<ArrowUpwardOutlinedIcon/>}>
								submit
							</Button>
						</Box>
					</Box>
				</Container>
			</Box>
			<Box>
				<Container maxWidth={"xl"} disableGutters={false}>
					<Box maxWidth={650} m={"0 auto"}>
						<InputBase
							sx={{fontSize: 30}}
							fullWidth
							placeholder="Title"
							inputProps={{'aria-label': 'search google maps'}}
						/>
					</Box>
				</Container>
			</Box>
			<Box>
				<Container maxWidth={"xl"} disableGutters={false}>
					<EditorJs
						enableReInitialize={true}
						data={valueEditorJs}
						onReady={(instance)=>instance.toolbar.open()}
						onChange={(api , newData ) => console.log(api)}
						tools={EDITOR_JS_TOOLS}
						placeholder={'Tell your story...'}
					/>
				</Container>
			</Box>
		</React.Fragment>
	)
}