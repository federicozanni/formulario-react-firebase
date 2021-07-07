import React from 'react';
import Header from './Header';
import UserSingin from './UserSingin';
import Box from '@material-ui/core/Box';
import { MenuStyle } from '../theme/MenuStyle';

export default function Menu () {

	const { classes } = MenuStyle();

return (

	<div className={classes.menuContainer} >
			<Header />

		<div className="container">
			<UserSingin />

			<Box mt={6} />
		</div>  
	</div>

);
}