import React from 'react';
import { Container } from 'react-bootstrap';
import { EmptyPlaceholder } from '../../Components/emptyPlaceholder/EmptyPlaceholder';
import MovieCard from '../../Components/movieCard/MovieCard';

export default function SearchList({ data, loading }) {
  return (
    <div>
      <Container>
        {data.length <= 0 && !loading && (
          <EmptyPlaceholder text="No Movie Matches" />
        )}
        <div className="row mb-5 ">
          {data &&
            data.map((movie, index) => (
              <MovieCard item={movie} key={index} />
            ))}
        </div>
      </Container>
    </div>
  );
}
