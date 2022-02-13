import { Card, Grid, Typography } from '@mui/material';
import GithubCard from './GithubCard';
import githubApi from '../api/github';
import { useEffect, useState } from 'react';

const MyProjects = (props) => {

    const [myProjects, setMyProjects] = useState([]);

    useEffect(() => {
        const fetchGithubProjects = async () => {
            const githubProjects = await githubApi.getPublicReposForUser('jonathanhughes');
            const myProjects = githubProjects?.data?.map(project => ({ 
                key: project.id,
                name: project.name,
                description: project.description,
                githubLink: project.html_url    
            }));
            console.log(myProjects);
            setMyProjects(myProjects);
        };
        fetchGithubProjects();
    }, []);

    return (
        <>
            <Card style={{ marginBottom: 30 }}>
                <Typography gutterBottom variant="h3" component="div">
                    My public repos
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
                    myProjects.map((project) => <GithubCard {...project} />)
                }
            </Grid>
        </>
    );
}


export default MyProjects;