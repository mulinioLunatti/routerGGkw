import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import IntroductionComponent from './components/Introduction'
import StoriesUserComponent from './components/User/StoriesUser'
import CreateStoryComponent from './components/Story/CreateStory'
export default ()=>{
	return (
		<Router>
				<Switch>
					<Route exact path="/">
                       <IntroductionComponent/>
					</Route>
					<Route exact path="/user/stories">
						<StoriesUserComponent/>
					</Route>
					<Route exact path="/story/create">
						<CreateStoryComponent/>
					</Route>
				</Switch>
		</Router>
	);
}
