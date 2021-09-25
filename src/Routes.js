import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import IntroductionComponent from './components/Introduction'
import StoriesUserComponent from './components/User/StoriesUser'
import ForgotPasswordUserComponent from './components/User/ForgotPasswordUser'
import CreateStoryComponent from './components/Story/CreateStory'
import ListShortStoryComponent from "./components/Story/ListShortStory";
import ShortStoryComponent from "./components/Story/ShortStory"
import VerifyEmailTokenComponent from './components/Token/VerifyEmailToken'
import UserContainer from "./containers/UserContainer";
import TokenContainer from "./containers/TokenContainer";

export default () => {
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
				<Route exact path="/user/forgot/password">
					<UserContainer>
						<ForgotPasswordUserComponent/>
					</UserContainer>
				</Route>
				<Route exact path="/user/reset/password">
					<UserContainer>
						<ForgotPasswordUserComponent/>
					</UserContainer>
				</Route>

				<Route exact path="/story/create">
					<CreateStoryComponent/>
				</Route>
				<Route exact path="/story/short/list">
					<ListShortStoryComponent/>
				</Route>
				<Route exact path="/story/short/:id">
					<ShortStoryComponent/>
				</Route>
				<Route exact path="/token/verify">
					<TokenContainer>
						<VerifyEmailTokenComponent/>
					</TokenContainer>
				</Route>
			</Switch>
		</Router>
	);
}
