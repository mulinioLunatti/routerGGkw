import React from "react";
import {TokenContext} from "../contexts/TokenContext";

export default class tokenProvider extends React.Component {

	componentDidMount() {

	}
	render() {
		return (
			<>
				<TokenContext.Provider value={{...this.props}}>
					{this.props.children}
				</TokenContext.Provider>
			</>
		)
	}
}
