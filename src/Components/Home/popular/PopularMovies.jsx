import { useDispatch, useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import { useEffect } from "react";

import SectionTitle from "../../../Components/sectionTitle/SectionTitle";
import { fetchTopRated } from "../../../Store/slices/topRatedSlice";
import MovieCard from "../../../Components/movieCard/MovieCard";

const PopularMovies = () => {
  const { data } = useSelector((state) => state.topRated);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTopRated());
  }, [dispatch]);

  return (
    <div className="popular-movies py-5">
      <Container>
        <SectionTitle title="Popular Movies" />

        <div className="row mt-3 g-2">
          {data &&
            data
              .slice(0, 8)
              .map((movie, idx) => <MovieCard key={idx} item={movie} />)}
        </div>
      </Container>
    </div>
  );
};

export default PopularMovies;
