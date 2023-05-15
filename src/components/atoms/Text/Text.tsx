import { StyledText } from './Text.styled';

export const Text = ({
  title,
  color,
  textSize,
  fontWeight
}: {
  title: string;
  color: string;
  textSize: {
    lineHeight: string;
    fontSize: string;
  };
  fontWeight: string;
}) => {
  return (
    <StyledText color={color} textSize={textSize} fontWeight={fontWeight}>
      {title}
    </StyledText>
  );
};
