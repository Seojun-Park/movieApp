import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';
import { CircularProgress } from '@material-ui/core'
// import Movie from '../components/Movie';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
// import Genre from '../components/Genre'

import './Total.css'

const GET_MOVIES = gql`
      {
          movies{
              id
              title
              medium_cover_image
              small_cover_image
              synopsis
              year
              genres
              language
              rating
          }
      }
  `;

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 350,
    },
    content: {
        height: 100
    }
  });

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const Header = styled.header`
    background-image: linear-gradient(-45deg, #d754ab, #fd723a);
    height: 45vh;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 50px;
`;

const Title = styled.h1`
    font-size: 40pt;
    font-weight: 800;
`;

const Subtitle = styled.h2`
    font-size: 25pt;
    font-weight: 600;
`;

const Movies = styled.div`
    display: grid;
    margin-top: 30px;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 25px;
    width: 75%;
    position: relative;
    top: -50px;
`;


export default () => {
    const classes = useStyles();

    const { loading, data} = useQuery(GET_MOVIES);
    console.log(data);
    return (
        <Container>
            <Header>
                <Title>Moviebox</Title>
                <Subtitle>Voila</Subtitle>
            </Header>
            {loading && <CircularProgress />}
            {!loading && data.movies && (
                <Movies>
                    {data.movies.map(m => (
                    <Card className={classes.root}>
                        <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={m.medium_cover_image}
                            title={m.title}
                            component="div"
                        />
                        <CardContent className={classes.content}>
                            <Typography gutterBottom variant="h6" component="span">
                                {m.title} <Typography variant="subtitle2">{m.year} | {m.language} | {m.rating}</Typography>
                            </Typography>
                            <Typography variant="subtitle2">
                                {m.genres}
                                {/* {m.genres ? <Genre value={m.genres} /> : "none"} */}
                            </Typography>
                            {/* <div style={{ width: 250, whiteSpace: 'nowrap' }}>
                                <Box
                                    component="p"
                                    my={2}
                                    textOverflow="ellipsis"
                                    overflow="hidden"
                                >{m.language} | {m.rating}</Box>
                            </div> */}
                        </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>
                        </CardActions>
                  </Card>

                        // <Movie key={m.id} id={m.id} bg={m.medium_cover_image} />
                    ))}
                </Movies>
            )}
        </Container>
    );
};