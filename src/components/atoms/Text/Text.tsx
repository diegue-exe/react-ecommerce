import { StyledText } from './Text.styled';

type Props = {
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  title: string;
  color?: string;
  textSize: 'heading' | 'big' | 'normal' | 'small' | 'xsmall';
  bold?: boolean;
};

export const Text: React.FC<Props> = ({
  tag,
  title,
  color = '#000',
  textSize,
  bold
}) => {
  return (
    <StyledText
      as={tag}
      color={color}
      textSize={textSize}
      fontWeight={bold ? '700' : '400'}>
      {title}
    </StyledText>
  );
};
