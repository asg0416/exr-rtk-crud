import React from "react";
import { IdContext } from "../../hooks/useCustomContext";
import { Detail } from "../molecules";

const DetailCard = ({ type = "post", title, content, ...rest }) => {
  return (
    <IdContext.Provider value={rest.id}>
      <Detail.Wrapper type={type}>
        <Detail.Header/>
        <Detail.Contents title={title} content={content} />
        <Detail.Footer />
      </Detail.Wrapper>
    </IdContext.Provider>
  );
};

export default DetailCard;
