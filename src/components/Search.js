import { useState, useContext } from "react";
import { JobsContext } from "../contexts/JobsContext";

function Search() {
  const { jobs, setJobs } = useContext(JobsContext);
  const [keyword, setKeyword] = useState("");

  const searchKeyword = (e) => {
    e.preventDefault();
    const searchResult = jobs.filter(
      (job) => job.company || job.title === keyword
    );
    setJobs(searchResult);
    setKeyword("");
    console.log(searchResult);
  };

  return (
    <div className="search-box">
      <form onSubmit={searchKeyword}>
        <label htmlFor="" className="user-search"></label>
        <input
          type="search"
          value={keyword}
          placeholder="Title,companies,experience"
          onChange={(e) => setKeyword(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Search;
