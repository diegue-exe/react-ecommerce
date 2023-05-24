import React, { useState } from 'react';
import { Card, CardContainer } from './CategoryCard.styled';
import { Icon } from '../../../../atoms/Icon';
import { Text } from '../../../../atoms/Text';
import { IconSize, TextSize } from '../../../../../theme/theme';

type Props = {
  text: string;
  icon: string;
};

export const CategoryCard: React.FC<Props> = ({ text, icon }) => {
  const [isHovered, setHoverState] = useState(false);
  const onCardHover = () => {
    setHoverState(true);
  };
  const onCardLeave = () => {
    setHoverState(false);
  };

  return (
    <Card onMouseEnter={onCardHover} onMouseLeave={onCardLeave}>
      <CardContainer>
        <Icon name={icon} size="big" color={isHovered ? 'white' : 'primary'} />
        <Text
          title={text}
          textSize="normal"
          color={isHovered ? 'white' : 'primary'}
        />
      </CardContainer>
    </Card>
  );
};
