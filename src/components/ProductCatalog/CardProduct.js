import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import React from 'react';

const CardProduct = ({img,nombre,descripcion,precio}) => {
	return (
		<div>
			<Card sx={{ maxWidth: 345 }}>
				<CardMedia component="img" height="194" image={img} alt="Paella dish" />
				<CardContent>
					<Typography variant="body2" color="text.secondary">
                        <strong>{nombre}</strong>
                        <br/>
                        {descripcion}
                        <br/>
                        s/.<strong>{precio}</strong>
					</Typography>
				</CardContent>
				<CardActions disableSpacing>
					<IconButton aria-label="add to favorites">
						<FavoriteIcon />
					</IconButton>
					<IconButton aria-label="share">
						<ShareIcon />
					</IconButton>
				</CardActions>
			</Card>
		</div>
	);
}

export default CardProduct;
