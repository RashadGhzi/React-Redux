import React from "react";
import { usePutUpdateDataMutation } from "../services/jsonApi";
export default function PutUpdateData() {
  const [putData, responseInfo] = usePutUpdateDataMutation();

  const { data, isLoading, isError, isSuccess, error } = responseInfo;
  //   console.log(data);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // console.log(data);
    const id = data.get('id');
    const uid = data.get("userId");
    const title = data.get("title");
    const body = data.get("body");
    // console.log(uid)
    // console.log(title)
    // console.log(body)
    const body_data = {
        id:id,
      userId: uid,
      title: title,
      body: body,
    };

    putData(body_data);
  };
  return (
    <>
      <form action="" method="post" onSubmit={handleSubmit}>
        <label htmlFor="id">Id</label>
        <input type="number" name="id" placeholder="Enter id to update data" id="id" /><br />
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
        <input type="submit" value="PUT" />
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
            <div style={{color:"green"}} className="update">Your data has been update</div>
          </>
        )}
      </div>
    </>
  );
}
