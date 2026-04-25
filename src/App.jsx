import { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../utilities/constants";
import { useState } from "react";

function App() {
  const [summaries, setSummaries] = useState([]);

  useEffect(() => {
    handleFetch();
  }, []);

  const handleFetch = async () => {
    const res = await axios.get(BASE_URL);
    // console.log(res)
    setSummaries(res.data);
  };

  return (
    <>
      {summaries.map((summary) => (
        <div className="flex flex-col items-center my-5 group">
          <div className="card w-96 bg-base-100 card-sm shadow-sm relative">
            <div className="card-body">
              <div className="text-gray-400">{summary.title}</div>
              <div className="card-title">{summary.summary}</div>
              <div className="justify-end card-actions">
                <button className="btn">{summary.sender.split("<")[0]}</button>
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 justify-center card-actions">
                {" "}
                {new Date(summary.createdAt).toLocaleString("en-IN", {
                  timeZone: "Asia/Kolkata",
                })}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default App;
