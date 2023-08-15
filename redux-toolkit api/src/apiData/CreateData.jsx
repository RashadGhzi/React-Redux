import React from "react";
import { useCreateDataMutation } from "../services/jsonApi";
export default function CreateData() {
  const [createPost, responseInfo] = useCreateDataMutation();

  const { data, isLoading, isError, isSuccess, error } = responseInfo;
  //   console.log(data);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // console.log(data);
    const uid = data.get("userId");
    const title = data.get("title");
    const body = data.get("body");
    // console.log(uid)
    // console.log(title)
    // console.log(body)
    const body_data = {
      userId: uid,
      title: title,
      body: body,
    };

    createPost(body_data);
  };

  return (
    <div>
      <form action="" method="post" onSubmit={handleSubmit}>
        <label htmlFor="userId">UserId</label>
        <input
          name="userId"
          type="number"
          id="userId"
          placeholder="Enter your userId"
        />{" "}
        <br />
        <label htmlFor="title">Title</label>
        <input
          name="title"
          type="text"
          id="title"
          placeholder="Enter your title"
        />{" "}
        <br />
        <label htmlFor="body">Body</label>
        <input
          name="body"
          type="text"
          id="body"
          placeholder="Enter your body"
        />{" "}
        <br />
        <input type="submit" value="submit" />
      </form>
      <div className="data" style={{ marginTop: "30px" }}>
        {isLoading && <h1> Loading... </h1>}
        {isError && <h1> error occured {error.error} </h1>}
        {isSuccess && (
          <>
            <div>id : {data.id} </div>
            <div>userId : {data.userId} </div>
            <div>title : {data.title} </div>
            <div>body : {data.body} </div>
          </>
        )}
      </div>
    </div>
  );
}
