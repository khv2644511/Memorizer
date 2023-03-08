import { useNavigate, useParams } from "react-router-dom";
import Word from "./Word";
import useFetch from "../hooks/useFetch";

export default function Day() {
  const { day } = useParams();
  const words = useFetch(`http://localhost:3001/words?day=${day}`);
  const days = useFetch(`http://localhost:3001/days`);
  const navigate = useNavigate();

  function PrevDay(e) {
    if (Number(day) > 1) navigate(`/day/${Number(day) - 1}`);
  }

  function NextDay() {
    if (Number(day) < days.length) navigate(`/day/${Number(day) + 1}`);
  }

  return (
    <>
      <button
        className="prev_btn"
        onClick={PrevDay}
        style={{ opacity: Number(day) <= 1 ? 0.3 : 1 }}
      >
        {"<"}
      </button>
      <h2 style={{ display: "inline", padding: "0px 5px" }}>Day {day}</h2>
      <button
        onClick={NextDay}
        style={{ opacity: Number(day) === days.length ? 0.3 : 1 }}
      >
        {">"}
      </button>
      {words.length === 0 && <div>Loading...</div>}
      <table>
        <tbody>
          {words.map((word) => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </>
  );
}
