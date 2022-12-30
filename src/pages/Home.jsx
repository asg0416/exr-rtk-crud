import { Fragment } from "react";
import { Button, Text } from "../components/atoms";
import Post from "../components/organisms/Post";
import { useHistory } from "../hooks/useHistory";

const data = [
  {
    id: 1,
    title: "test title 1",
    contents:
      "test contentstest contentstest contentstest contentstest contentstest contentstest contentstest contentstest contentstest contentstest contentstest contentstest contentstest contentstest contentstest contentstest contentstest contentstest contentstest contentstest contentstest contents",
    date: "2010-12-22",
    commentCount: 3,
  },
  {
    id: 2,
    title: "test title 2",
    contents: "test contents",
    date: "2010-12-22",
    commentCount: 0,
  },
  {
    id: 3,
    title: "test title 3",
    contents: "test contents",
    date: "2022-12-14",
    commentCount: 21,
  },
];
const Home = () => {
  return (
    <Fragment>
      {data.map((post) => {
        return <Post {...post} key={post.id} />;
      })}
      <Button.FloatCircle flex color="orange" onClick={useHistory("/create")}>
        <Text color="white" size={2} weight="bold">
          +
        </Text>
      </Button.FloatCircle>
    </Fragment>
  );
};

export default Home;
