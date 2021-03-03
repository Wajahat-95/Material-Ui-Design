import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Avatar, Box } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import theme from './theme';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  appBar:{
    backgroundColor:"#fff",
    display:"flex"

  },
  hero:{
    backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url('https://images.unsplash.com/photo-1510074232337-05d50fa189ba?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80')`,
    height:"500px",
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    position:"relative",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    color:"#fff",
    fontSize:"4rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize:"3em"
    },
    paginationContainer:{
      display:"flex",
      justifyContent:"center"
    }

  },
  blogsContainer:{
    paddingTop:theme.spacing(3)
  },
  blogsTitle:{
    fontWeight:800,
    paddingBottom:theme.spacing(3)
  },
  card:{
    maxWidth:"100%"
  },
  media:{
    height:240
  },
  cardActions:{
    display:"flex",
    margin:"0 10px",
    justifyContent:"space-between"
  },
  Author:{
    display:"flex"
  }
}));
function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          
          <Typography variant="h6" color="primary">
          Blog
          </Typography>
        </Toolbar>
      </AppBar>
      <Box className={classes.hero}>
        <Box>React Blog</Box>
      </Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
      <Typography variant="h4" className={classes.blogsTitle}>
          Articles
          </Typography>
          <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.unsplash.com/photo-1606126979000-725298f43bff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Box className={classes.Author}>
          <Avatar src="">
          L
          </Avatar>
          <Box ml={2}>
          <Typography variant="subtitle" component="p">
            Lizard
          </Typography>
          <Typography variant="subtitle2" color="textSecondary" component="p">
            Lizard
          </Typography>

          </Box>
        </Box>
        <Box>
          <BookmarkBorderIcon />
        </Box>
      </CardActions>
    </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.unsplash.com/photo-1591761798617-ff03c1c2e82d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=358&q=80"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Box className={classes.Author}>
          <Avatar src="">
          L
          </Avatar>
          <Box ml={2}>
          <Typography variant="subtitle" component="p">
            Lizard
          </Typography>
          <Typography variant="subtitle2" color="textSecondary" component="p">
            Lizard
          </Typography>

          </Box>
        </Box>
        <Box>
          <BookmarkBorderIcon />
        </Box>
      </CardActions>
    </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.unsplash.com/photo-1614179924047-e1ab49a0a0cf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Box className={classes.Author}>
          <Avatar src="">
          L
          </Avatar>
          <Box ml={2}>
          <Typography variant="subtitle" component="p">
            Lizard
          </Typography>
          <Typography variant="subtitle2" color="textSecondary" component="p">
            Lizard
          </Typography>

          </Box>
        </Box>
        <Box>
          <BookmarkBorderIcon />
        </Box>
      </CardActions>
    </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.unsplash.com/photo-1587408811730-1a978e6c407d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=331&q=80"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Box className={classes.Author}>
          <Avatar src="">
          L
          </Avatar>
          <Box ml={2}>
          <Typography variant="subtitle" component="p">
            Tiger
          </Typography>
          <Typography variant="subtitle2" color="textSecondary" component="p">
            Lizard
          </Typography>

          </Box>
        </Box>
        <Box>
          <BookmarkBorderIcon />
        </Box>
      </CardActions>
    </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Box className={classes.Author}>
          <Avatar src="">
          L
          </Avatar>
          <Box ml={2}>
          <Typography variant="subtitle" component="p">
            Tiger
          </Typography>
          <Typography variant="subtitle2" color="textSecondary" component="p">
            Lizard
          </Typography>

          </Box>
        </Box>
        <Box>
          <BookmarkBorderIcon />
        </Box>
      </CardActions>
    </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.unsplash.com/photo-1573537805874-4cedc5d389ce?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Box className={classes.Author}>
          <Avatar src="">
          L
          </Avatar>
          <Box ml={2}>
          <Typography variant="subtitle" component="p">
            Lizard
          </Typography>
          <Typography variant="subtitle2" color="textSecondary" component="p">
            Lizard
          </Typography>

          </Box>
        </Box>
        <Box>
          <BookmarkBorderIcon />
        </Box>
      </CardActions>
    </Card>
          </Grid>

          </Grid>
          <Box my={4} className={classes.paginationContainer}>
          <Pagination count={10}/>

          </Box>
      </Container>
    </div>
    </ThemeProvider>
  );
}

export default App;
