import React from "react";
import { useGetAllDataQuery } from "../services/jsonApi";

export default function GetAllDataApi() {
  // get all data using api
  const { data, isLoading, isError, error, isSuccess } = useGetAllDataQuery();
  console.log(data);
  console.log("error :  ", error);

  function jsonAllData() { 
    return data.map((data) => (
      <>
        <div className="title">
          <span>
            {data.id} and {data.userId}
          </span>{" "}
          : {data.title}
        </div>
        <div className="body">{data.body}</div>
        <hr />
      </>
    ));
  }

  return (
    <div>
      {isLoading && <h1 className="loading">Loading...</h1>}
      {isError && <h1 className="error">errro occured {error.error}</h1>}
      {isSuccess && jsonAllData()}
    </div>
  );
}
