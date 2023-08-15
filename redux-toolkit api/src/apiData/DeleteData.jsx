import React from "react";
import { useDeleteDataByIdMutation } from "../services/jsonApi";
export default function DeleteData() {
  const [deletePost, responseInfo] = useDeleteDataByIdMutation();
  console.log(responseInfo);
  const { data, isLoading, isError, isSuccess, error, status } = responseInfo;
  console.log(data);
  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      {isError && (
        <h1>
          Error {error.error} {error.status}
        </h1>
      )}
      {isSuccess && (
        <>
          <h1> status : {status}</h1>
        </>
      )}
      <button
        onClick={() => deletePost(101)}
        type="button"
        style={{
          padding: "10px 39px",
          border: "none",
          backgroundColor: "green",
          color: "white",
        }}
      >
        click to delete post
      </button>
    </>
  );
}
