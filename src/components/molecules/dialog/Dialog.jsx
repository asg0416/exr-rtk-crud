import React, { useState, useEffect, useRef } from "react";
import {
  ButtonGroup,
  DarkBackground,
  DialogBlock,
  ShortMarginButton,
  StyledWrapper,
} from "./style";

const Dialog = ({
  title,
  children,
  confirmText,
  cancelText,
  onConfirm,
  onCancel,
  visible,
}) => {
  const [animate, setAnimate] = useState(false);
  const [localVisible, setLocalVisible] = useState(visible);
  const whiteBox = useRef();

  useEffect(() => {
    // visible 값이 true -> false 가 되는 것을 감지
    if (localVisible && !visible) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 250);
    }
    setLocalVisible(visible);
  }, [localVisible, visible]);

  if (!animate && !localVisible) return null;
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onConfirm(e.target);
      }}
    >
      <DarkBackground
        disappear={!visible}
        onClick={(e) => {
          const isTarget = whiteBox.current.contains(e.target);
          if (!isTarget) onCancel();
        }}
      >
        <DialogBlock disappear={!visible}>
          <StyledWrapper ref={whiteBox}>
            <h3>{title}</h3>
            {children}
            <ButtonGroup>
              <ShortMarginButton color="gray" onClick={onCancel}>
                {cancelText}
              </ShortMarginButton>
              <ShortMarginButton type="submit" color="orange">
                {confirmText}
              </ShortMarginButton>
            </ButtonGroup>
          </StyledWrapper>
        </DialogBlock>
      </DarkBackground>
    </form>
  );
};

Dialog.defaultProps = {
  confirmText: "확인",
  cancelText: "취소",
};

export default Dialog;
