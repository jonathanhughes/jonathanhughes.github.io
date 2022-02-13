import { useEffect, useState } from 'react';
import { Card, Grid, Typography } from '@mui/material';
import GithubCard from './GithubCard';
import githubApi from '../api/github';

const InterestingProjects = (props) => {

    const [interestingProjects, setInterestingProjects] = useState([]);

    useEffect(() => { 
        const fetchGithubProjects = async () => {
            const githubProjects = await githubApi.getStarredByUser('jonathanhughes');
            githubProjects?.sort((p1, p2) => p2.watchers - p1.watchers);
            const projects = githubProjects?.map(project => ({
                key: project.id,
                name: project.name,
                image: project.owner?.avatar_url,
                description: project.description,
                siteLink: project.homepage,
                githubLink: project.html_url
            }));
            setInterestingProjects(projects);
        };
        fetchGithubProjects();
    },[]);
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