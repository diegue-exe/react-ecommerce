import { StyledText } from './Text.styled';
import { Color } from '../../../theme/theme';

type Props = {
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  title: string;
  color?: Color;
  textSize: 'heading' | 'big' | 'normal' | 'small' | 'xsmall';
  bold?: boolean;
};

export const Text: React.FC<Props> = ({
  tag,
  title,
  color = '#000',
  textSize,
  bold = false
}) => {
  return (
    <StyledText as={tag} color={color} textSize={textSize} bold={bold}>
      {title}
    </StyledText>
  );
};
