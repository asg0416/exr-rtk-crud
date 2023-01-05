import { Fragment } from "react";
import { Button, Text } from "../components/atoms";
import Post from "../components/organisms/Post";
import { useHistory } from "../hooks/useHistory";
import { useRtkQuery } from "../shares/error/useQuery";

const Home = () => {
  const { data, apiStatus } = useRtkQuery("GetAllPost");
  const history = useHistory();

  return (
    <Fragment>
      {data
        ? data.map((post) => {
            return <Post {...post} key={post.id} />;
          })
        : apiStatus}
      <Button.FloatCircle
        flex
        color="orange"
        onClick={() => history("/create")}
      >
        <Text color="white" size={2} weight="bold">
          +
        </Text>
      </Button.FloatCircle>
    </Fragment>
  );
};

export default Home;
