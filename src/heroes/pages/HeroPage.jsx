import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers/getHeroById";
import { useMemo } from "react";

export const HeroPage = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const hero = useMemo(() => getHeroById(id), [id]);

  const onNavigateBack = () => {
    navigate(-1);
  };

  if (!hero) {
    return <Navigate to="/marvel" />;
  }

  console.log(hero);
  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`/heroes/${id}.jpg`}
          alt={hero.superhero}
          className="img-thumbnail img4"
        />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item top4">
            <b>Alter ego: </b>
            {hero.alter_ego}
          </li>
          <li className="list-group-item top4">
            <b>Publisher: </b>
            {hero.publisher}
          </li>
          <li className="list-group-item top4">
            <b>Firs appearance: </b>
            {hero.publisher}
          </li>
        </ul>

        <h5 className="mt-3">Characteres:</h5>
        <p>{hero.characters}</p>
        <button className="btn btn-outline-primary" onClick={onNavigateBack}>
          Regresar
        </button>
      </div>
    </div>
  );
};
