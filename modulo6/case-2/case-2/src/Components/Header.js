import { useNavigate } from 'react-router-dom';
import {
  goToFacil,
  goToMania,
  goToMega,
  goToQuina,
  goToSorte,
  goToTime,
} from '../Routes/Coordinates';

export const Header = () => {
  const navigate = useNavigate();

  const Mega = () => {
    goToMega(navigate);
  };
  const Quina = () => {
    goToQuina(navigate);
  };
  const Facil = () => {
    goToFacil(navigate);
  };
  const Mania = () => {
    goToMania(navigate);
  };
  const Time = () => {
    goToTime(navigate);
  };
  const Sorte = () => {
    goToSorte(navigate);
  };
  return (
    <div>
      <select>
        <option>Mega</option>
        <option>Quina</option>
        <option>Loto Fácil</option>
        <option>Loto Mania</option>
        <option>Time Mania</option>
        <option>Dia de Sorte</option>
      </select>
      <h1>Header</h1>
      <button
        onClick={() => {
          Mega();
        }}
      >
        Mega
      </button>
      <button
        onClick={() => {
          Quina();
        }}
      >
        Quina
      </button>
      <button
        onClick={() => {
          Facil();
        }}
      >
        Fácil
      </button>
      <button
        onClick={() => {
          Mania();
        }}
      >
        Mania
      </button>
      <button
        onClick={() => {
          Time();
        }}
      >
        Time
      </button>
      <button
        onClick={() => {
          Sorte();
        }}
      >
        Sorte
      </button>
    </div>
  );
};
