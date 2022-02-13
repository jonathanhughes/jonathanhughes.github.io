import { Card, Grid, Typography } from '@mui/material';
import GithubCard from './GithubCard';
import interestingProjects from '../content/interestingProjects';

const InterestingProjects = (props) => {
    return (
        <>
            <Card style={{ marginBottom: 30 }}>
                <Typography gutterBottom variant="h3" component="div">
                    Interesting Projects
                </Typography>
            </Card>
            <Grid
                container
                spacing={2}
                alignItems="center"
                justifyContent="center"
                style={{ overflow: 'auto' }}
            >
                {
                    interestingProjects.map((project) => <GithubCard {...project} />)
                }
            </Grid>
        </>
    );
}


export default InterestingProjects;