import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { DetailPostTemp } from "../components/templates";

const DetailPost = (props) => {
  const { id } = useParams();
  // useEffect(() => {
  //   console.log(id);
  // }, []);

  const CONTENT_DUMMY =
    "국회에 제출된 법률안 기타의 의안은 회기중에 의결되지 못한 이유로 폐기되지 아니한다. 다만, 국회의원의 임기가 만료된 때에는 그러하지 아니하다. 명령·규칙 또는 처분이 헌법이나 법률에 위반되는 여부가 재판의 전제가 된 경우에는 대법원은 이를 최종적으로 심사할 권한을 가진다. 헌법재판소 재판관은 탄핵 또는 금고 이상의 형의 선고에 의하지 아니하고는 파면되지 아니한다. \n\n 제3항의 승인을 얻지 못한 때에는 그 처분 또는 명령은 그때부터 효력을 상실한다. 이 경우 그 명령에 의하여 개정 또는 폐지되었던 법률은 그 명령이 승인을 얻지 못한 때부터 당연히 효력을 회복한다. 누구든지 체포 또는 구속을 당한 때에는 적부의 심사를 법원에 청구할 권리를 가진다. 헌법개정안이 제2항의 찬성을 얻은 때에는 헌법개정은 확정되며, 대통령은 즉시 이를 공포하여야 한다.";
  const COMMENT_MSG =
    "hello world hello world hello world hello world hello world hello world hello world hello world hello world";


  const postInfo = { id: id, title: "샘플 포스팅", content: CONTENT_DUMMY };
  const comments = [
    { uid: 0, content: COMMENT_MSG, password: 1234, userName: "익명 1" },
    { uid: 1, content: "2 comment msg", password: 123, userName: "익명 2" },
    { uid: 2, content: "3 comment msg", password: 1234, userName: "익명 1" },
  ];

  return <DetailPostTemp {...{ postInfo, comments }} />;
};

export default DetailPost;
