import React from "react";
import HeaderComponent from "../Common/Header";
import LanguageComponent from "../Language";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {FormControl, InputLabel, OutlinedInput, Tooltip} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import LoadingButton from "@mui/lab/LoadingButton";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import RedditIcon from "@mui/icons-material/Reddit";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import SentimentDissatisfiedOutlinedIcon from "@mui/icons-material/SentimentDissatisfiedOutlined";
import {useHistory} from "react-router-dom";
import {useUserContext} from "../../contexts/UserContext";
import Fab from "@mui/material/Fab";
import PersonIcon from "@mui/icons-material/Person";
import MenuUserComponent from "./MenuUser";

export default function ChangePasswordUser(props){

    const history=useHistory();
    const {getUser,user:{current:{userEmailVerify}={}}} = useUserContext();
    const { changePasswordUser,validateUserToken} = useUserContext();

    React.useEffect(() => {
        getUser({})
    }, [getUser])
    React.useEffect(() => {
        userEmailVerify===false && props.history.push("/token/email/verify");
    }, [userEmailVerify,props.history])
    React.useEffect(()=>{
        validateUserToken({userToken:window.localStorage.getItem("credential")},()=>{},()=>{history.replace("/")})
    },[history,validateUserToken])


    // function useQuery() {
    //     return new URLSearchParams(useLocation().search);
    // }
    // let query = useQuery();
    const [state,setState]= React.useState(props.state ? props.state :"changePass") ///  changePass , changeSuccess , changeFail
    const [loading , setLoading]=React.useState(false);

    const [oldPassword,setOldPassword]=React.useState("");
    const [password,setPassword]=React.useState("");
    const [passwordConfirm,setPasswordConfirm]=React.useState("");
    const [passwordVisibility,setPasswordVisibility]=React.useState(false);
    const [passwordMatch,setPasswordMatch]=React.useState(false);

    React.useEffect(()=>{
        setPasswordMatch(password===passwordConfirm && password!=="");
    },[password,passwordConfirm])

    const handleChangePassSubmit=()=>{
        setLoading(true)
        passwordMatch && changePasswordUser({userOldPassword: oldPassword , userNewPassword:password },()=>{setLoading(false);setState("changeSuccess")} ,()=>{setLoading(false);setState("changeFail")} )
        // setTimeout(()=>{setState("changeFail") },2000)
    }
    return(
        <>
            <HeaderComponent
                secondaryMenu={<>
                    <LanguageComponent/>
                    <MenuUserComponent>
                        <Fab  sx={{ml:2}} size="small" color="primary" >
                            <PersonIcon />
                        </Fab>
                    </MenuUserComponent>
                </>}
            />
            <Container fluid sx={{display:"flex" , alignItems:"center" , justifyContent:"center" , flexDirection:"column",height:"80vh"}}>
                {state==="changePass" ?
                    <>
                        <Box marginBottom={"20px"} color="primary">
                            <LockOutlinedIcon color="primary" sx={{fontSize:"150px"}}/>
                        </Box>
                        <Box component={"h5"} marginBottom={"20px"} >Change Password</Box>
                        <Box textAlign={"center"} component={"p"} color="#888888" width={"50%"} marginBottom="30px">Change your password for more security</Box>


                        <Box marginBottom={"20px"} width={"400px"}>
                            <FormControl fullWidth variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Old Password</InputLabel>
                                <OutlinedInput
                                    style={{borderRadius: "25px"}}
                                    inputProps={passwordVisibility ? {type: "text"} : {type: "password"}}
                                    endAdornment={
                                        <>
                                            <IconButton onClick={(e) => {
                                                setPasswordVisibility(prevState => !prevState)
                                            }}>
                                                {passwordVisibility ? <Visibility color="primary"/> : <VisibilityOffIcon color="primary"/>}
                                            </IconButton>
                                        </>
                                    }
                                    type={"password"}
                                    InputProps={{style:{borderRadius:"25px"}}}
                                    fullWidth
                                    variant="outlined"
                                    label="old password"
                                    onChange={(e)=>{setOldPassword(e.target.value)}}/>
                            </FormControl>
                        </Box>
                        <Box marginBottom={"20px"} width={"400px"}>
                            <FormControl fullWidth variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    style={{borderRadius: "25px"}}
                                    inputProps={passwordVisibility ? {type: "text"} : {type: "password"}}
                                    endAdornment={
                                        <>
                                            <IconButton onClick={(e) => {
                                                setPasswordVisibility(prevState => !prevState)
                                            }}>
                                                {passwordVisibility ? <Visibility color="primary"/> : <VisibilityOffIcon color="primary"/>}
                                            </IconButton>
                                        </>
                                    }
                                    type={"password"}
                                    InputProps={{style:{borderRadius:"25px"}}}
                                    fullWidth
                                    variant="outlined"
                                    label="password"
                                    onChange={(e)=>{setPassword(e.target.value)}}/>
                            </FormControl>
                        </Box>
                        <Box marginBottom={"20px"} width={"400px"}>
                            <FormControl fullWidth variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                                <OutlinedInput
                                    style={{borderRadius: "25px"}}
                                    endAdornment={
                                        <>
                                            <Tooltip title={ passwordMatch ? "Passwords are matched!" : ""} color={"success"} placement={"top"} arrow>
                                                <DoneAllIcon
                                                    style={passwordMatch ? {color: "green" , cursor:"pointer"} : {color: "transparent"}}/>
                                            </Tooltip>
                                            <IconButton onClick={(e) => {
                                                setPasswordVisibility(prevState => !prevState)
                                            }}>
                                                {passwordVisibility ? <Visibility color="primary"/> : <VisibilityOffIcon color="primary"/>}
                                            </IconButton>
                                        </>
                                    }
                                    inputProps={passwordVisibility ? {type: "text",style:{borderRadius:"25px"}} : {type: "password",style:{borderRadius:"25px"}}}
                                    type={"password"}
                                    InputProps={{style:{borderRadius:"25px"}}}
                                    fullWidth
                                    variant="outlined"
                                    label="confirm password"
                                    onChange={(e)=>{setPasswordConfirm(e.target.value)}}/>
                            </FormControl>
                        </Box>
                        <Box marginBottom={"20px"} width={"200px"}>
                            {
                                loading ?
                                    <LoadingButton sx={{borderRadius:"25px"}} fullWidth loading variant="outlined">change</LoadingButton>
                                    :
                                    <Button disabled={!passwordMatch} sx={{borderRadius:"25px"}} fullWidth variant={"contained"}  onClick={(e)=>{handleChangePassSubmit(e)}}>Next</Button>
                            }
                        </Box>
                        <Box marginBottom="60px">
                            <Link href="/">Go home</Link>
                        </Box>

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
                    :state==="changeSuccess"?
                        <>
                            <Box marginBottom={"20px"}>
                                <VpnKeyOutlinedIcon color="primary" sx={{fontSize:"150px"}}/>
                            </Box>
                            <Box component={"h4"} marginBottom={"20px"} >Password change successful</Box>
                            <Box textAlign={"center"} component={"p"} fontSize="0.7rem" color="#888888" width={"50%"} marginBottom={"20px"}>You can now login with your new password</Box>
                            <Link href="/" fontSize="0.7rem" sx={{cursor:"pointer"}}>Back to sign in</Link>
                        </>
                        :state==="changeFail"?
                            <>
                                <Box marginBottom={"20px"}>
                                    <SentimentDissatisfiedOutlinedIcon sx={{fontSize:"150px"}}/>
                                </Box>
                                <Box component={"h4"} marginBottom={"20px"} >Password change failed</Box>
                                <Box textAlign={"center"} component={"p"} fontSize="0.7rem" color="#888888" width={"50%"} marginBottom={"20px"}>Please try again later</Box>
                                <Link href="/user/password/change" fontSize="0.7rem" sx={{cursor:"pointer"}}>Try again</Link>
                            </>
                            :
                            null

                }
            </Container>
        </>
    )
}