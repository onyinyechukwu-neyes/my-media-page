import React from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router";

const CreatePost = () => {
  const initialValues = {
    title: "",
    postText: "",
    username: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required(),
    postText: Yup.string().required(),
    username: Yup.string().min(5).required(),
  });

  let navigate = useNavigate();
  const handleSubmit = (data) => {
    axios.post("http://localhost:3001/posts", data).then((resp) => {
      alert("it worked");
      navigate("/");
    });
  };
  return (
    <>
      <div className="createPostPage">
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <Form className="formContainer">
            <label>Title: </label>
            <ErrorMessage name="title" component="span" />
            <Field
              id="inputCreatePost"
              name="title"
              placeholder="Ex. Title..."
            />
            <label>Post: </label>
            <ErrorMessage name="postText" component="span" />
            <Field
              id="inputCreatePost"
              name="postText"
              placeholder="Ex. Post..."
            />
            <label>Username: </label>
            <ErrorMessage name="username" component="span" />
            <Field
              id="inputCreatePost"
              name="username"
              placeholder="Ex. Username..."
            />

            <button type="submit">Create Post</button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default CreatePost;
