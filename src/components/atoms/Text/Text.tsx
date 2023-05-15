import { StyledText } from './Text.styled';

type Props = {
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  title: string;
  color: string;
  textSize: {
    lineHeight: string;
    fontSize: string;
  };
  fontWeight: string;
};

export const Text: React.FC<Props> = ({
  tag,
  title,
  color,
  textSize,
  fontWeight
}) => {
  return (
    <StyledText
      as={tag}
      color={color}
      textSize={textSize}
      fontWeight={fontWeight}>
      {title}
    </StyledText>
  );
};
