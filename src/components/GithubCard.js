import { Button, Card, CardActions, CardActionArea, CardMedia, CardContent, Divider, Typography } from '@mui/material';
import navigateTo from '../util/navigation';

const GithubCard = (props) => { 
    return (
        <Card sx={{ width: 200, height: 300, margin: 1, verticalAlign: 'marginBottom' }}>
            <CardActionArea>
                {props.image ?
                    <CardMedia
                        component="img"
                        image={props.image}
                        style={{ objectFit: 'contain', maxHeight: 45, paddingTop: 10, paddingBottom: 10 }} /> :
                    <CardContent style={{ objectFit: 'contain', height: 35 }}>
                        <Typography variant={props.name.length > 12 ? 'h5' : 'h4'} color="text.primary">
                            {props.name.length > 15 ? `${props.name.slice(0,12)}...` : props.name}
                        </Typography>
                    </CardContent>
                }
                <Divider variant="middle" />
                <CardContent style={{ height: 145, paddingBottom: 20 }}>
                    <Typography variant="h5" component="div">
                        {props.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <Divider variant="middle" />
            <CardActions>
                {props.siteLink && <Button variant="contained" size="small" onClick={() => navigateTo(props.siteLink)}>Main Site</Button>}
                <Button variant="contained" size="small" onClick={() => navigateTo(props.githubLink)}>Github</Button>
            </CardActions>
        </Card>
    );
}

export default GithubCard;