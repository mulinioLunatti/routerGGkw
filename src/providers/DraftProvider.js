import React from "react";
import {DraftContext} from "../contexts/DraftContext";

export default class DraftProvider extends React.Component {
	componentDidMount() {
	}
	render() {
		return (
			<>
				<DraftContext.Provider value={{...this.props}}>
					{this.props.children}
				</DraftContext.Provider>
			</>
		)
	}
}
