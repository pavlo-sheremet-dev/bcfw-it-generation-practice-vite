import React from "react";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Filter.module.css";
import { selectFilter } from "../../redux/filter/selectors";
import { changeFilter } from "../../redux/filter/filterSlice";

export const Filter = () => {
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilter = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={styles.search}>
      <div className={styles.searchWrapper}>
        <CiSearch className={styles.searchIcon} />

        <input
          className={styles.searchInput}
          type="text"
          id="search"
          placeholder="Search something.."
          onChange={handleFilter}
          value={filterValue}
        />
      </div>
    </div>
  );
};
