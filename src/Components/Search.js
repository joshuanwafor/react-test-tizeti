import React, { useState } from "react";
import { useStudentHook } from "../hook";

// `joiningDate` && `validityDate` format "yyyy-mm-dd"

// function checkValidity(joiningDate, validityDate) {
//   const now = new Date();
//   const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
//   const [year, month, day] = joiningDate.split("-");
//   const [yyyy, mm, dd] = validityDate.split("-");
//   const maxValid = new Date(yyyy, mm - 1, dd);
//   const selected = new Date(year, month - 1, day);
//   return maxValid >= selected && maxValid >= today;
// }

function Search() {
  let [joinDate, setJoinDate] = useState("");
  let [term, setTerm] = useState("");
  let { addToResidentList } = useStudentHook();

  return (
    <div className="my-50 layout-row align-items-end justify-content-end">
      <label htmlFor="studentName">
        Student Name:
        <div>
          <input
            id="studentName"
            value={term}
            data-testid="studentName"
            type="text"
            className="mr-30 mt-10"
            onChange={(e) => {
              setTerm(e.target.value);
            }}
          />
        </div>
      </label>
      <label htmlFor="joiningDate">
        Joining Date:
        <div>
          <input
            id="joiningDate"
            value={joinDate}
            data-testid="joiningDate"
            type="date"
            className="mr-30 mt-10"
            onChange={(e) => {
              setJoinDate(e.target.value);
            }}
          />
        </div>
      </label>
      <button
        type="button"
        data-testid="addBtn"
        className="small mb-0"
        onClick={() => {
          if (term == "" && joinDate == "") {
            alert("Please fill all fields");
            return;
          }
          addToResidentList(term, joinDate);
          setJoinDate("");
          setTerm("");
        }}
      >
        Add
      </button>
    </div>
  );
}

export default Search;
