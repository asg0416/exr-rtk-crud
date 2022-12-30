import styled from "styled-components";
import { useTypeContext } from "../../hooks/useCustomContext";
import { Div, Text } from "../atoms";
import RelativeTime from "./RelativeTime";

const UserProfile = styled(Text)`
  border: 1px solid #b2b1b1;
  font-size: 1.5rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  margin-right: 0.5rem;
`;

UserProfile.Comment = styled(UserProfile)`
  font-size: 1rem;
  padding: 0.4rem;
  border-radius: 0.4rem;
  & + div > p {
    font-size: 1rem;
  }
`;

const UserInfo = ({ userName = "익명" }) => {
  const type = useTypeContext();

  const userProfileType = { post: UserProfile, comment: UserProfile.Comment };
  const ProfileImage = userProfileType[`${type}`];
  return (
    <Div flex direction="row" height="2.5rem">
      <ProfileImage>👨‍🍳</ProfileImage>
      <Div flex height="100%" justify="space-around" align="flex-start">
        <Text weight="600">{userName}</Text>
        {type === "post" && <RelativeTime time="2022-11-25" />}
      </Div>
    </Div>
  );
};

export default UserInfo;
