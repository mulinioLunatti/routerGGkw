import React from "react";
import Box from "@mui/material/Box";
import WifiTetheringIcon from "@mui/icons-material/WifiTethering";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

export default function Header({mainMenu, secondaryMenu}) {
	let history = useHistory();
	return (
		<React.Fragment>
			<Container maxWidth={"xl"} disableGutters={false}>
				<Box display={"flex"} alignItems={"center"} style={{cursor:"pointer"}} onClick={(e)=>{history.replace("/")}}>
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
						{mainMenu}
					</Box>
					{secondaryMenu}
				</Box>
			</Container>
		</React.Fragment>
	)
}



