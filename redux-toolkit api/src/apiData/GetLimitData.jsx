import React from "react";
import { useGetLimitDataQuery } from "../services/jsonApi";
export default function GetLimitData() {
  const { data, isLoading, isError, isSuccess, error } = useGetLimitDataQuery(10);
  console.log("data ", data);
  console.log("isLoading", isLoading);
  console.log("isError", isError);
  console.log("isSuccess", isSuccess);
  console.log("error", error);
  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      {isError && (
        <h1>
          {error.status} {error.error}
        </h1>
      )}
      {isSuccess &&
        data.map((dataItem) => (
          <div key={dataItem.id}>
            <span
              className="id_userid"
              style={{ color: "red", fontWeight: "bold" }}
            >
              {dataItem.id} and {dataItem.userId}
            </span>
            <div style={{color:"cyan", fontWeight:"bold"}} className="title"> {dataItem.title} </div>
            <p className="body"> {dataItem.body} </p>
            <hr />
          </div>
        ))}
    </>
  );
}
