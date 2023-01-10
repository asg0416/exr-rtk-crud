import { Input, Text } from "../../atoms";

export const DialogType = {
  UserCheck: (btnType, actionFn = () => {}, { ...rest } = {}) => {
    return {
      title: `${btnType}하기`,
      children: (
        <>
          <Text className="main">비밀번호를 입력해주세요</Text>
          <Input
            border
            bdColor="gray60"
            radius={0.5}
            type="password"
            name="password"
          />
          {rest.helperText && (
            <Text size={0.8} color="red" padding="1rem 0 0">
              비밀번호를 확인해주세요
            </Text>
          )}
        </>
      ),
      onConfirm: (target) => {
        const value = target["password"]?.value;
        console.log("DialogType line 15 ::: ", value);
        actionFn(value);
      },
    };
  },
  SuccessAlert: (btnType, actionFn = () => {}) => {
    return {
      type: "alert",
      title: "성공",
      children: <Text className="main">{btnType}하기 완료</Text>,
      onConfirm: () => actionFn(),
    };
  },
};
