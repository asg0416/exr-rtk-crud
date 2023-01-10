import React from "react";
import { DetailContext } from "../../hooks/useCustomContext";
import { Detail } from "../molecules";

const DetailCard = (props) => {
  const { type='post' } = props;
  return (
    <DetailContext.Provider value={props}>
      <Detail.Wrapper type={type}>
        <Detail.Header/>
        <Detail.Contents />
        <Detail.Footer/>
      </Detail.Wrapper>
    </DetailContext.Provider>
  );
};

export default DetailCard;
