import React from 'react';
import { useParams } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';
import Movie from '../components/Movie'

import { Container, Button, Typography, CircularProgress } from '@material-ui/core';


const GET_MOVIES = gql`
    query getMovie($id: Int!){
            movie(id: $id){
                title
                medium_cover_image
                small_cover_image
                language
                rating
                description_intro
                year
            }
            suggestions(id: $id){
                id
                title
                medium_cover_image
            }
        }
`;

const Mcontainer = styled(Container)`
    background-color: #82ccdd;
    height: 100%;
    color: #ffffff;
    padding: 5%;
`;

const Content = styled.div`
    padding-left: 10%;
    display: flex;
    width: 80%;
`;

const Ttypo = styled.h1`
    padding-left: 5%;
    color: #2c3e50;
    font-weight: 800;
    font-size: 40pt;
    &:first-child{
        margin-bottom: 10px;
    }
`;

const Typecont = styled.div`
    margin-right: 15%;
    width:50%;
`;

const Stypo = styled(Typography)`
    padding: 5px;
    width: 100%;
    color: #e74c3c;
    margin-bottom: 5px;
`;

const Ctypo = styled(Typography)`
    width:100%;
    margin-top: 1%;
    color: #34495e;
    border-top: 0.2rem dotted #34495e;
    padding-top: 3%;
    @media screen and (max-width: 768px) {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        }
`;

const Suggestion = styled.div`
    margin: 15px 5%;
    display: grid;
    margin-top: 30px;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 25px;
    width: 81%;
    position: relative;
    border-top: 0.2rem dotted #34495e;
    padding-top: 2%;
`;

const Poster = styled.div`
    background-image: url(${props => props.bg});
    height:445px;
    width: 330px;
    border-radius: 7px;
    background-color: transparent;
    background-size: cover;
    background-position: center center;
`;

const Sposter = styled.div`
    background-image: url(${props => props.bg});
    height:345px;
    width: 230px;
    border-radius: 7px;
    background-color: transparent;
    background-size: cover;
    background-position: center center;
    :hover {

    }
`;

export default () => {
    let { id } = useParams();
    id = parseInt(id);
    const { loading, data } = useQuery(GET_MOVIES, {
        variables: { id }
    });
    console.log(data)
   return (
       <Mcontainer maxWidth="xl">
           {loading ? <CircularProgress /> : <>
                <Ttypo>
                    {data.movie.title}
                </Ttypo>
                <Content>
                    <Typecont>
                        <Stypo>
                            {data.movie.language} | {data.movie.year} | {data.movie.rating}<br />
                        </Stypo>
                        <Ctypo>
                            {data.movie.description_intro}
                        </Ctypo>
                    </Typecont>
                     <Poster bg={data.movie.medium_cover_image} alt={data.movie.id} />
                </Content>
                <Content>
                    <Button size="large" variant="contained" color="primary">See Movie</Button>
                </Content>
                <Suggestion>
                    {data.suggestions ? <>
                        {data.suggestions.map(s => (
                            <Sposter bg={s.medium_cover_image} simg={s.small_cover_image} children={<Movie id={s.id} key={s.id} />} />
                        ))}
                    
                    </> : "No Suggestions for this moive"}
                </Suggestion>
           </>
           }
       </Mcontainer>
   ) 
};