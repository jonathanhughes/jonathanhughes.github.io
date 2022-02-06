import { Button, Card, CardActions, CardActionArea, CardMedia, CardContent, Divider, Typography } from '@mui/material';
import navigateTo from '../util/navigation';

const InterestCard = (props) => { 
    return (
        <Card sx={{ width: 200, height: 300, margin: 1, verticalAlign: 'marginBottom' }}>
            <CardActionArea>
                {props.image ?
                    <CardMedia
                        component="img"
                        image={props.image}
                        style={{ objectFit: 'contain', maxHeight: 45, paddingTop: 10, paddingBottom: 10 }} /> :
                    <CardContent style={{ objectFit: 'contain', height: 35 }}>
                        <Typography variant="h4" color="text.primary">
                            {props.name}
                        </Typography>
                    </CardContent>
                }
                <Divider variant="middle" />
                <CardContent getterBottom style={{ height: 145, paddingBottom: 20 }}>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <Divider variant="middle" />
            <CardActions>
                <Button variant="contained" size="small" onClick={() => navigateTo(props.siteLink)}>Main Site</Button>
                <Button variant="contained" size="small" onClick={() => navigateTo(props.githubLink)}>Github</Button>
            </CardActions>
        </Card>
    );
}

export default InterestCard;