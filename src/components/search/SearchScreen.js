import {useMemo} from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { getHeroesByName } from "../../selectors/getHeroesByName";
import queryString from "query-string";
import { HerosCard } from "../../components/heros/HerosCard";

export const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { query = "" } = queryString.parse(location.search);

  const [formValues, handleInputChange] = useForm({
    searchText: query,
  });

  const { searchText } = formValues;
  const heroesFileted = useMemo(()=>getHeroesByName(query),[query]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?query=${searchText}`);
  };

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4> Buscar </h4>
          <hr />

          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Bucar un heroe"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />
            <button className="btn btn-outline-primary mt-3" type="submit">
              Buscar...
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Resultados</h4>
          <hr />
          {query === "" ? (
            <div className="alert  alert-info">Buscar un Heroe</div>
          ) : (
            heroesFileted.length === 0 && (
              <div className="alert alert-danger">
                No hay Resultados : {query}
              </div>
            )
          )}

          {heroesFileted.map((hero) => (
            <HerosCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
