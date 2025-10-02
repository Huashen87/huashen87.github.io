import { Link } from 'react-router-dom';
import { Card, Label } from 'semantic-ui-react';
import { Work as IWork } from '../data/works';

function Work({ img, title, link, desc }: IWork) {
  return (
    <Card link as={Link} to={link} target="_blank" style={{ margin: '1em' }}>
      <img src={img} alt={title} style={{ height: '200px', objectFit: 'cover' }} />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Description>{desc}</Card.Description>
      </Card.Content>
    </Card>
  );
}

export default Work;
