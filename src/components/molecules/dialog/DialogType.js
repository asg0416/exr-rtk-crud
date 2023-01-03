import { Input, Text } from "../../atoms";

export const DialogType = {
  UserCheck: (btnType, actionFn=()=>{}) => {
    return {
      title: `${btnType}하기`,
      children: (
        <>
          <Text>비밀번호를 입력해주세요</Text>
          <Input border bdColor='gray60' radius={0.5} type="password" name="password" />
        </>
      ),
      onConfirm: (target) => {
        console.dir(target["password"]?.value);
        actionFn();
      },
      onCancel: () => {},
    };
  },
};
