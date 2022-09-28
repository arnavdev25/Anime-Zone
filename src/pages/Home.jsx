/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import { callForAllAnimes } from "../redux/action";
import style from "../styles/Home.module.css";
const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [page, setPage] = useState(1);
  const { allAnimes, loading, error } = useSelector((store) => store.anime);
  useEffect(() => {
    dispatch(callForAllAnimes(page));
  }, [page]);

  return (
    <div>
      <div>
        {loading ? (
          <>
            <div className={style.spinner}>
              <div className={style.loading}></div>
            </div>
          </>
        ) : error ? (
          <>Something Went Wrong...</>
        ) : (
          <>
            <div className={style.box}>
              <div>
                <input
                  placeholder="Search by Title"
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                />
              </div>
              <button onClick={() => navigate(`/watchlist`)}>Watch List</button>
            </div>
            <div className={style.page}>
              <button
                disabled={page < 2 ? true : false}
                onClick={() => setPage(page - 1)}
              >
                Prev
              </button>
              <button
                disabled={page >= 1025 ? true : false}
                onClick={() => setPage(page + 1)}
              >
                Next
              </button>
            </div>
            <div className={style.grid}>
              {allAnimes &&
                allAnimes
                  .filter((e) => e.title.includes(title))
                  .map((e, i) => <Card {...e} key={e.mal_id} />)}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
