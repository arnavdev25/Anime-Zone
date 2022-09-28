import React from "react";
import Card from "../components/Card";
import style from "../styles/Home.module.css";
const WatchList = () => {
  const watchList = JSON.parse(localStorage.getItem("WatchList"));
  console.log(watchList);
  return (
    <>
      <h1>Watch List</h1>
      <div className={style.grid}>
        {watchList.map((e, i) => (
          <Card {...e} />
        ))}
      </div>
    </>
  );
};

export default WatchList;
