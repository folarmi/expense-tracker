import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function JobInfo() {
  const { id } = useParams();
  const [jobinfo, setJobInfo] = useState([]);

  const getJobInfo = () => {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${id}.json`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setJobInfo(data);
      });
  };

  useEffect(() => {
    getJobInfo();
  }, []);

  const { how_to_apply, title, type, company, description } = jobinfo;
  return (
    <div>
      <p>How to apply</p>
      {how_to_apply}
      <p>{title}</p>
      <p>{type}</p>
      <p>{company}</p>
      <p>{description}</p>
    </div>
  );
}

export default JobInfo;
