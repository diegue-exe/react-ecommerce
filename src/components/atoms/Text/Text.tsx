import { StyledText } from './Text.styled';

export const Text = ({
  color,
  textSize,
  fontWeight
}: {
  color: string;
  textSize: {
    lineHeight: string;
    fontSize: string;
  };
  fontWeight: string;
}) => {
  return (
    <StyledText
      color={color}
      textSize={textSize}
      fontWeight={fontWeight}></StyledText>
  );
};
