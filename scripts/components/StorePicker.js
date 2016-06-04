import React from 'react';
import { History } from 'react-router';
import reactMixin from 'react-mixin';
import autobind from 'autobind-decorator';
import h from '../helpers';

/*
	Store picker
*/

@autobind
class StorePicker extends React.Component {

	goToStore(event) {
		event.preventDefault();
		var storeId = this.refs.storeId.value;
	    this.history.pushState(null, '/store/' + storeId);
	}

	render() {
		return (
			<form className="store-selector" onSubmit={this.goToStore}>
				<h2>Please Enter A Store</h2>
				<input type="text" value={h.getFunName()} ref="storeId"/>
				<input type="submit"/>
			</form>
		)
	}
}

reactMixin.onClass(StorePicker, History);

export default StorePicker;