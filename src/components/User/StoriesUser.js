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
import MenuUserComponent from "./MenuUser";
import Header from "../Common/Header";
import PortableWifiOffRoundedIcon from '@mui/icons-material/PortableWifiOffRounded';
import {useUserContext} from "../../contexts/UserContext";
import {Skeleton} from "@mui/material";
import {useStoryContext} from "../../contexts/StoryContext";
import {useHistory} from "react-router-dom";
import Footer from "../Common/Footer";
import _ from 'lodash';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function createData(name, calories, fat, carbs, protein) {
    return {name, calories, fat, carbs, protein};
}

// const rows = [
    // createData('Millions of Microsoft web servers powered by vulnerable legacy software', 159, 6.0, 24, 4.0),
    // createData('A major incident wiped data on Web Hosting Canada servers', 237, 9.0, 37, 4.3),
    // createData('How Solarpunk and its radical optimism is changing the world', 262, 16.0, 24, 6.0),
    // createData('Retros of the lost age: vintage computers from the East', 305, 3.7, 67, 4.3),
    // createData('On the prowl for nudes, California man steals 620,000 iCloud photos', 356, 16.0, 49, 3.9),
// ];
export default () => {
    const history=useHistory()
    const {getUser,user:{current:{userEmailVerify}={}},validateUserToken} = useUserContext();
    const {valueEditorJs, setValueEditorJs} = React.useState({})
    const [state,setState]=React.useState("loaded"); // loading  ,  loaded   , failed
    const [anchorEl, setAnchorEl] = React.useState(null);
    // const [rawRows,setRawRows]=React.useState([]);
    const [rows,setRows]=React.useState([]);
    const [showRows , setShowRows]=React.useState([]);

    // const {getStoriesUser}= useUserContext();
    const {getStories}=useStoryContext()

    React.useEffect(()=>{
        validateUserToken({userToken:window.localStorage.getItem("credential")},()=>{},()=>{history.replace("/")})
    },[])
    React.useEffect(()=>{
        getStories({},(data)=>{console.log(data);setRows(_.reverse(data.data));setState("loaded")})
    },[])

    //userEmailVerification
    React.useEffect(() => {
        getUser({})
    }, [getUser])
    React.useEffect(() => {
        userEmailVerify === false && history.push("/token/email/verify");
    }, [userEmailVerify])

    const getStoriesUser=()=>{
        getStories({},(data)=>{console.log(data);setRows(data.data);setState("loaded")})
    }



    const showMoreStories=()=>{
        // console.log(rows.length)
        if(showRows.length < rows.length){
            console.log("shoRows"+ showRows.length);
            for(let i=showRows.length ; i<showRows.length+5 ;i++){
                console.log(i);
                if(rows[i]){
                    setShowRows((prev)=>[...prev,rows[i]]);
                }
            }
        }
    }
    React.useEffect(()=>{
        showMoreStories()
    },[rows])

    return (
        <React.Fragment>
            <Box display={"flex"} flexDirection={"column"} minHeight={"100vh"} >
                <Box>
                    <Header secondaryMenu={
                        <>
                            {/*<Box px={2} color={"text.primary"}>*/}
                            {/*    <Link href="/story/short/list" color="primary" underline={"none"}>*/}
                            {/*        <SensorsIcon/>{'Live news stream'}*/}
                            {/*    </Link>*/}
                            {/*</Box>*/}
                            <Fab size="small">
                                <GTranslateIcon/>
                            </Fab>
	                        <MenuUserComponent>
		                        <Fab  sx={{ml:2}} size="small" color="primary" >
			                        <PersonIcon />
		                        </Fab>
	                        </MenuUserComponent>
                        </>
                    }/>
                </Box>
                <Divider/>
                <Box>
                    <Container maxWidth={"xl"} disableGutters={false}>
                        <Box display={"flex"} flexDirection={"row"} py={2}>
                            <Box flexGrow={1}>
                                Your stories {`(2504)`}
                            </Box>
                            <Fab href={"/story/create"} component={"a"} variant={'extended'} size={"small"}
                                 color={'primary'}>
                                <AddIcon/>
                                Write A Story
                            </Fab>
                        </Box>

                    </Container>
                </Box>
                <Divider/>
                <Box my={5}>
                    <Container maxWidth={"xl"} disableGutters={false}>
                        {state==="loaded"?
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
                                        {rows.length===0 ?
                                            <TableRow>
                                                <TableCell>
                                                    <Box width={"100%"} display={"flex"} flexDirection={"column"}  justifyContent={"center"}>
                                                        <p>You dont have any stories yet  <Link href="/story/create">Create one</Link></p>
                                                    </Box>
                                                </TableCell>
                                            </TableRow>
                                        :showRows.map((row, index) => (
                                            <TableRow
                                                key={row.attributes["story-uuid"]}
                                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                            >
                                                <TableCell>
                                                    {index + 1}
                                                </TableCell>
                                                <TableCell component="th" scope="row">
                                                    <Box fontSize={20}>
                                                        {row.attributes["story-title"]}
                                                        <IconButton aria-label="delete" size="small" color="primary">
                                                            <CallMadeIcon fontSize="inherit"/>
                                                        </IconButton>
                                                    </Box>
                                                    <Box color={"text.secondary"}>
                                                        {row.attributes["story-changed"]}
                                                        {/*Updated 6:50 AM ET, Sat September 11, 2021*/}
                                                    </Box>
                                                </TableCell>
                                                <TableCell align="right">
                                                    <IconButton component="span">
                                                        <ImageOutlinedIcon/>
                                                    </IconButton>
                                                    <IconButton component="span">
                                                        <PlayCircleOutlineIcon/>
                                                    </IconButton>
                                                    <IconButton component="span">
                                                        <DescriptionOutlinedIcon/>
                                                    </IconButton>

                                                </TableCell>
                                                <TableCell align="right">
                                                    <Button sx={{ml: 2, borderRadius: 25}}
                                                            variant="outlined">DELETE</Button>
                                                    <Button sx={{ml: 2, borderRadius: 25}} variant="outlined">Edit</Button>
                                                    <Button sx={{ml: 2, borderRadius: 25}}
                                                            variant="outlined">Export</Button>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            : state==="loading"?
                            <>
                                <Box display={"flex"} gap={"5px"} flexDirection={"column"} mx={"100px"}>
                                    <Skeleton variant="rectangular" width={"md"} height={80} animation="wave"/>
                                    <Skeleton variant="rectangular" width={"md"} height={80} animation="wave"/>
                                    <Skeleton variant="rectangular" width={"md"} height={80} animation="wave"/>
                                    <Skeleton variant="rectangular" width={"md"} height={80} animation="wave"/>
                                    <Skeleton variant="rectangular" width={"md"} height={80} animation="wave"/>
                                    <Skeleton variant="rectangular" width={"md"} height={80} animation="wave"/>
                                    <Skeleton variant="rectangular" width={"md"} height={80} animation="wave"/>
                                </Box>
                            </>
                            :state==="failed" ?
                            <>
                                <Box>

                                </Box>
                                <Box width={"100%"} display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>
                                    <Box sx={{fontSize:"150px"}}>
                                        <PortableWifiOffRoundedIcon sx={{fontSize:"300px"}}/>
                                    </Box>
                                    <Box component={"h4"} marginBottom={"20px"} >There was a problem fetching your stories</Box>
                                    <Link fontSize="1.5rem" sx={{cursor:"pointer"}}>Try Again</Link>
                                </Box>
                            </>
                            :null
                        }
                    </Container>
                </Box>
                <Box width={"100%"} textAlign={"center"} marginBottom={"300px"} display={rows.length===0 ? "none" : "inline"}>
                    {/*<Link href="#" fontSize="30px" onClick={(e)=>{showMoreStories()}}>Show More</Link>*/}
                    <Button sx={{borderRadius:"25px"}} startIcon={<ExpandMoreIcon/>} variant="contained" onClick={(e)=>{showMoreStories()}}>show more</Button>
                </Box>
                <Footer/>
            </Box>
        </React.Fragment>
    )
}