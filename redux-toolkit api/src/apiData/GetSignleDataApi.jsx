import React from "react";
import { useGetSingleDataQuery } from "../services/jsonApi";

export default function GetSignleDataApi() {
  const { data, isLoading, isError, isSuccess, error } =
    useGetSingleDataQuery(5);
  return (
    <>
      {isLoading && <h1>Loading.... </h1>}
      {isError && (
        <h2>
          Error occured {error.status}
          {error.error}{" "}
        </h2>
      )}
      {isSuccess && (
        <>
          <h1>
            <span>
              {data.id} and {data.userId}
            </span>
            {data.title}
          </h1>
          <h1>{data.body}</h1>
        </>
      )}
    </>
  );
}
