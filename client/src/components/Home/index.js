import "./style.css";
import React from "react";
import Header from "./Header";
import ArticleList from "./ArticleList";
import Form from "./Form";

export default props => {
  const { tweedData, formQuery, handleChange, handleSubmit } = props;
  console.log("EVERYTHING THIS.PROPS", props);
  return (
    <div className="c-home__container">
      <Form
        formQuery={formQuery}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <TweedList tweedData={tweedData} />
    </div>
  );
};
