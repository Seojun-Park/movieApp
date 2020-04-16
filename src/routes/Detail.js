import React from 'react';
import { useParams } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { CircularProgress } from '@material-ui/core';
import styled from 'styled-components';


const GET_MOVIES = gql`
    query getMovie($id: Int!){
            movie(id: $id){
                title
                medium_cover_image
                language
                rating
                description_intro
            }
            suggestions(id: $id){
                id
                medium_cover_image
            }
        }
`;

const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`;

const Column = styled.div`
  margin-left: 10px;
  width: 50%;
`;

const Title = styled.h1`
  font-size: 65px;
  margin-bottom: 15px;
`;
const Subtitle = styled.h4`
  font-size: 35px;
  margin-bottom: 10px;
`;
const Description = styled.p`
  font-size: 28px;
`;
const Poster = styled.div`
  width: 25%;
  height: 60%;
  background-color: transparent;
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center center;
`;

const Suggestion = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
`;

const Smposter = styled.div`
    float: left;
    background-image: url(${props => props.bg});
    background-size: cover;
    background-position: center center;
    width: 100px;
    height: 150px;
    background-color: transparent;
    border-radius: 1rem;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

export default () => {
    let { id } = useParams();
    id = parseInt(id);
    const { loading, data } = useQuery(GET_MOVIES, {
        variables: { id }
    });
    return (
        <Container>
            <Column>
                <Title>{loading ? <CircularProgress /> : data.movie.title}</Title>
                {!loading && data.movie && (
                    <>
                        <Subtitle>{data.movie.language} | {data.movie.rating}</Subtitle>
                        <Description>{data.movie.description_intro} </Description>
                    </>
                )}
            </Column>
            <Poster bg={data && data.movie ? data.movie.medium_cover_image : ""}></Poster>
            <Suggestion>
                {data && data.suggestions && data.suggestions.map(s => (
                    <Smposter bg={s.medium_cover_image} key={s.id} />
                ))}
            </Suggestion>
        </Container>
    );
};