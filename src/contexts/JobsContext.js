import { createContext, useState, useEffect } from "react";

export const JobsContext = createContext();

const JobsContextProvider = (props) => {
  const [jobs, setJobs] = useState([]);
  const [perPage] = useState(5);
  const [offset, setOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  const getData = () => {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?search=all"
    )
      .then((response) => response.json())
      .then((data) => {
        const slice = data.slice(offset, offset + perPage);
        setJobs(slice);
        setPageCount(Math.ceil(data.length / perPage));
      });
  };

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  };

  useEffect(() => {
    getData();
  }, [offset]);

  return (
    <JobsContext.Provider value={{ jobs, setJobs, pageCount, handlePageClick }}>
      {props.children}
    </JobsContext.Provider>
  );
};

export default JobsContextProvider;
