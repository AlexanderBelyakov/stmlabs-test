import style from "./App.module.scss";

import { lazy, Suspense, useEffect, useRef, useState } from "react";

import Preloader from "../Preloader/Preloader";

import TPerson from "../../types/person";

import api from "../../utils/Api";

import useDebounce from "../../hooks/useDebounce";

const Container = lazy(() => import("../Container/Container"));
const Search = lazy(() => import("../Search/Search"));

const App: React.FC = () => {
  const dataRef = useRef<TPerson[]>([]); // запоминаем результаты пришедшие с api
  const [res, setRes] = useState<TPerson[]>([]); // значения уходящие на отрисовку
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    api
      .getData()
      .then((res) => {
        dataRef.current = res.results;
        setRes(res.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(res);

  function handleSearch(input: string) {
    let res;

    if (input.includes(" ")) {
      const [firstName, lastName] = input.split(" ");
      res = dataRef.current.filter((person) => {
        return (
          person.name.first
            .toLowerCase()
            .includes(firstName.toLocaleLowerCase()) &&
          person.name.last.toLowerCase().includes(lastName.toLocaleLowerCase())
        );
      });
    } else {
      res = dataRef.current.filter((person) => {
        return (
          person.name.first.toLowerCase().includes(input.toLocaleLowerCase()) ||
          person.name.last.toLowerCase().includes(input.toLocaleLowerCase())
        );
      });
    }
    setIsEmpty(false);
    setRes(res);
  }

  return (
    <div className={style.app}>
      <Suspense fallback={<Preloader />}>
        <Search onSearch={useDebounce(handleSearch, 900)} />
        <Container persons={res} isEmpty={isEmpty} />
      </Suspense>
    </div>
  );
};

export default App;
