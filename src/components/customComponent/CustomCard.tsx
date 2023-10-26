import { ReactElement } from 'react';
import { Card } from '../../styledComponents/CustomCard';

interface ICustomCard {
  body: ReactElement;
}
const CustomCard = (props: ICustomCard) => {
  const { body } = props;
  return (
    <Card>
      {body}
    </Card>
  )
}

export default CustomCard