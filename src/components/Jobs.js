import { useContext, useState } from "react";
import { JobsContext } from "../contexts/JobsContext";
import Search from "./Search";
import Job from "./Job";
import ReactPaginate from "react-paginate";

function Jobs() {
  const { jobs, pageCount, handlePageClick } = useContext(JobsContext);

  return (
    <div className="wrapper">
      <header>
        <h3>
          Github <span>Jobs</span>
        </h3>
      </header>
      <main>
        {/* {console.log(jobs)} */}
        <Search />

        <div className="role">
          <input type="checkbox" name="" id="" />
          <label htmlFor="role">Full time</label>
        </div>

        {jobs.map((job) => {
          return <Job {...job} key={job.id} />;
        })}

        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </main>
    </div>
  );
}

export default Jobs;
