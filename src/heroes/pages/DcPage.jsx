import { HeroList } from "../components/HeroList";

export const DcPage = () => {
  return (
    <>
      <h1 className="titulo4">Dc Comics</h1>
      <hr />
      <HeroList publisher={"DC Comics"} />
    </>
  );
};
