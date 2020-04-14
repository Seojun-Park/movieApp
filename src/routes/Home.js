import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';
import { CircularProgress } from '@material-ui/core'
import Movie from '../components/Movie';

const GET_MOVIES = gql`
    {
        movies{
            id
            medium_cover_image
        }
    }
`;

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
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 25px;
    width: 75%;
    position: relative;
    top: -50px;
`;


export default () => {
    const { loading, data } = useQuery(GET_MOVIES);
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
                        <Movie key={m.id} id={m.id} bg={m.medium_cover_image} />
                    ))}
                </Movies>
            )}
        </Container>
    );
};