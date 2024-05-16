import style from "./Person.module.scss";

import { FC, useState } from "react";

import TPerson from "../../types/person";

import { transformDate } from "../../utils/Utils";

const Person: FC<TPerson> = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <tr className={style.person__list}>
      <td className={style.person__item}>
        <img
          className={style.person__image}
          src={props.picture.thumbnail}
          alt={`'${props.name.first} ${props.name.last}'`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </td>
      <td
        className={
          isHovered
            ? `${style.person__item} ${style.person__item_visible}`
            : `${style.person__item} ${style.person__item_invisible}`
        }
      >
        <img
          className={style.person__tooltip}
          src={props.picture.large}
          alt={`'${props.name.first} ${props.name.last}'`}
        />
      </td>
      <td className={style.person__item}>
        {props.name.first} {props.name.last}
      </td>
      <td className={style.person__item}>
        {props.location.state} {props.location.city}
      </td>
      <td className={style.person__item}>{props.email}</td>
      <td className={style.person__item}>{props.phone}</td>
      <td className={style.person__item}>
        {transformDate(props.registered.date)}
      </td>
    </tr>
  );
};

export default Person;
