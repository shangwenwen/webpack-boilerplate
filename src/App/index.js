import React, {Component} from 'react'
import {hot} from 'react-hot-loader'

import '../_assets/style.css'

class App extends Component {
	constructor () {
		super(...arguments)
	}

	render () {
		return (
			<div className="main">
				<img src={require('../_assets/01.jpg')} />
				<p>shang</p>
			</div>
		)
	}
}

export default hot(module)(App)
