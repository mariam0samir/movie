import { useDispatch, useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import { useEffect } from "react";
import Pagination from '../../Components/pagination/pagination' 
import { UpTO } from "../details/up/Up";
import { fetchAllMovies } from "../../Store/slices/allMovieSlice";
import MovieCard from "../../Components/movieCard/MovieCard";

const MovieList = () => {
  const dispatch = useDispatch();
  const { data, total_pages } = useSelector((state) => state.allMovies);

  useEffect(() => {
    dispatch(fetchAllMovies(1));
  }, [dispatch]);

  const handlePageClick = ({ selected}) => {
    dispatch(fetchAllMovies(selected + 1));
    UpTO()
  };

  return (
    <div className="popular-movies py-5">
      <Container>
        <div className="row g-3">
          {data.map((movie, index) => (
            <MovieCard key={index} item={movie} />
          ))}
        </div>

        {total_pages > 1 && (
          <Pagination
            handlePageClick={handlePageClick}
            pageCount={total_pages}
          />
        )}
      </Container>
    </div>
  );
};

export default MovieList;
