import { Button, Card, CardActions, CardMedia, CardContent, Divider, Grid, Typography } from '@mui/material';
import InterestCard from './components/InterestCard';
import navigateTo from './util/navigation';
import interestingProjects from './content/interestingProjects';

import './App.css';
import { useEffect } from 'react';
import ReactGA from 'react-ga';

function App() {
  const profileImage = 'https://avatars.githubusercontent.com/u/12171933?s=400&u=79cc2586f4e64f2a7df0cae2a19364e8325d6c7a&v=4';

  useEffect(() => { 
    ReactGA.initialize('UA-64691528-3');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="App" >
      <header className="App-header" style={{ backgroundImage: 'url("./background.jpg")', backgroundSize: 'auto', backgroundRepeat: 'repeat' }}>
        <Grid
          container
          spacing={2}
          direction="row"
          alignItems="stretch"
          justifyContent="center"
        >
          <Grid item md={3} lg={3} style={{ marginTop: 10 }}>
            <Grid
              container
              spacing={2}
              direction="col"
              alignItems="center"
              justifyContent="center"
              style={{overflow: 'auto'}}
            >
              <Card sx={{ maxWidth: 345, maxHeight: 300 }}>
                <CardMedia
                  component="img"
                  image={profileImage}
                  alt="profile"
                />
              </Card>
              <Card sx={{ marginTop: 5, maxWidth: 345, maxHeight: 250 }}>
                <CardContent>
                  <Typography gutterBottom variant="h4" component="div">
                    About me
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    I'm a software engineer who loves innovating and tinkering.
                    I also love nature and being outdoors - running, cycling,
                    hiking, boating, kayaking, and traveling
                  </Typography>
                </CardContent>
              </Card>
              <Card sx={{ marginTop: 5, maxWidth: 345, maxHeight: 250 }}>
                <CardContent>
                  <Typography gutterBottom variant="h4" component="div">
                    <img width="153" height="28" loading="lazy" class="asurionLogo w-28 sm:w-32" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMjAuMiA1MS4yIj48cGF0aCBkPSJNMTAyLjQgMTQuOGgtNy45djE5LjljMCA1LjMtMi43IDkuMS03LjkgOS4xcy03LjgtMi43LTcuOC05LjFWMTQuOGgtNy45djIxLjZjMCA5LjYgNC45IDE0LjggMTMuOCAxNC44IDUgMCA4LjItMi40IDkuOS00LjV2NC4xaDcuOWwtLjEtMzZ6bTYyLjYtLjRjLTEwLjIgMC0xOC40IDguMy0xOC40IDE4LjQgMCAxMC4yIDguMyAxOC40IDE4LjQgMTguNCAxMC4yIDAgMTguNC04LjMgMTguNC0xOC40LjEtMTAuMi04LjItMTguNC0xOC40LTE4LjR6bTEwLjYgMTguNGMwIDUuOC00LjcgMTAuNS0xMC41IDEwLjVzLTEwLjUtNC43LTEwLjUtMTAuNSA0LjctMTAuNSAxMC41LTEwLjUgMTAuNSA0LjcgMTAuNSAxMC41em0tNDcuOC0xOC40Yy0yLjkgMC03LjIuNi0xMC41IDQuMnYtMy44aC03Ljl2MzZoNy45VjMwYzAtNC4zIDMuNS03LjcgNy43LTcuNyAxIDAgMS45LjIgMi44LjV2LTguNHpNNjIuNiA0Ny43Yy0yLjMgMi4zLTUuMyAzLjUtOC42IDMuNS0zLjIgMC02LjMtMS4zLTguNi0zLjUtMi4zLTIuMy0zLjUtNS4zLTMuNS04LjZoNy41YzAgMS4yLjUgMi40IDEuMyAzLjIuOS45IDIgMS4zIDMuMiAxLjNzMi40LS41IDMuMi0xLjNjMS44LTEuOCAxLjgtNC42LjEtNi40LTEuMS0uOS0xLjktMS0zLjMtMS4zLTEuOS0uNC00LjQtLjktNy0zLjUtMy44LTMuOC0zLjgtMTAuMSAwLTEzLjkgMy44LTMuOCAxMC4xLTMuOCAxMy45IDAgLjQuNC43LjggMS4xIDEuM2wtNSA1Yy0uOC0uOS0xLjUtMS40LTIuNS0xLjUtLjgtLjItMS42IDAtMi4xLjYtLjQuNC0uNyAxLS43IDEuNnMuMiAxLjIuNyAxLjZjMSAxIDEuNyAxLjIgMy4yIDEuNCAxLjcuMyA0LjEuOCA2LjggMy4xbC4yLjJjNC44IDQuOCA0LjggMTIuNS4xIDE3LjJ6bS0zMy43IDMuMWg3Ljl2LTE4YzAtMTAuMi04LjMtMTguNC0xOC40LTE4LjRTMCAyMi42IDAgMzIuOHM4LjMgMTguNCAxOC40IDE4LjRjMy41IDAgNy40LTEgMTAuNS00LjV2NC4xem0tMTAuNS03LjVjLTUuOCAwLTEwLjUtNC43LTEwLjUtMTAuNXM0LjctMTAuNSAxMC41LTEwLjVTMjguOSAyNyAyOC45IDMyLjhzLTQuNyAxMC41LTEwLjUgMTAuNXptMTg2LTIxYy00LjQgMC03LjkgMy41LTcuOSA3Ljl2MjAuNmgtNy45VjMwLjJjMC04LjcgNy4xLTE1LjggMTUuOC0xNS44czE1LjggNy4xIDE1LjggMTUuOHYyMC42aC03LjlWMzAuMmMwLTQuNC0zLjUtNy45LTcuOS03Ljl6bS03MC44LTcuNWg3Ljl2MzZoLTcuOXYtMzZ6bTkuMy05LjRjMCAzLTIuNCA1LjQtNS40IDUuNHMtNS40LTIuNC01LjQtNS40IDIuNC01LjQgNS40LTUuNCA1LjQgMi40IDUuNCA1LjR6Ii8+PC9zdmc+" alt="Asurion Desktop Logo" />
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    I work at Asurion. We're the largest privately held company in Nashville, TN.  We help customers with technology.
                  </Typography>
                  <Divider variant="middle" />
                  <CardActions>
                    <Button variant="contained" size="small" onClick={() => navigateTo('https://www.asurion.com')}>Learn More</Button>
                    <Button variant="contained" size="small" onClick={() => navigateTo('https://careers.asurion.com')}>Join our Team</Button>
                  </CardActions>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid item md={7} lg={7} >
            <Card style={{marginBottom: 30}}>
              <Typography gutterBottom variant="h3" component="div">
                Interesting Projects
              </Typography>
            </Card>
            <Grid
              container
              spacing={2}
              direction="col"
              alignItems="center"
              justifyContent="center"
              style={{overflow: 'auto'}}
            >
              {
                interestingProjects.map((project) => <InterestCard {...project} />)
              }
            </Grid>
          </Grid>
        </Grid>
      </header>
    </div>
  );

}

export default App;
