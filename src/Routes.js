import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import IntroductionComponent from './components/Introduction'
import StoriesUserComponent from './components/User/StoriesUser'
import CreateStoryComponent from './components/Story/CreateStory'
import UserContainer from "./containers/UserContainer";
import EmailVerification from "./components/User/EmailVerfication";
import CheckVerificationLinkUser from "./components/User/CheckVerificationLinkUser"
export default ()=>{
	return (
		<Router>
				<Switch>
					<Route exact path="/">
						<UserContainer>
							<IntroductionComponent/>
						</UserContainer>
					</Route>
					<Route exact path="/user/stories">
						<StoriesUserComponent/>
					</Route>
					<Route exact path="/story/create">
						<CreateStoryComponent/>
					</Route>
					<Route exact path="/user/validate">
						<CheckVerificationLinkUser />
					</Route>
				</Switch>
		</Router>
	);
}
