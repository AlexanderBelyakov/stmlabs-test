import { FC } from "react";

import style from "./Container.module.scss";

import Person from "../Person/Person";

import TPerson from "../../types/person";
import Preloader from "../Preloader/Preloader";

interface Props {
  persons: TPerson[];
  isEmpty: boolean;
}

const Container: FC<Props> = (props) => {
  return (
    <>
      {props.persons.length > 0 ? (
        <table className={style.table}>
          <thead className={style.table__head}>
            <th className={style.table__th}>Name</th>
            <th className={style.table__th}>Local</th>
            <th className={style.table__th}>Email</th>
            <th className={style.table__th}>Phone number</th>
            <th className={style.table__th}>Registrated</th>
          </thead>
          <tbody className={style.table__body}>
            {props.persons.map((el: TPerson, ind: number) => (
              <Person
                key={ind}
                name={el.name}
                email={el.email}
                picture={el.picture}
                location={el.location}
                phone={el.phone}
                registered={el.registered}
              />
            ))}
          </tbody>
        </table>
      ) : !props.isEmpty ? (
        <p className={style.table__nomatch}>Nothing Found</p>
      ) : (
        <Preloader />
      )}
    </>
  );
};

export default Container;
