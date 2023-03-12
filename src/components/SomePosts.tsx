import { Link } from 'react-router-dom';
import { Card, Divider } from 'semantic-ui-react';
import posts, { Post } from '../data/posts';
import Metadata from './Metadata';

function Posts({ filter }: { filter?: (p: Post, i: number) => boolean }) {
  const ps = filter ? posts.filter(filter) : posts;
  return (
    <>
      {ps.map(({ title }, i) => (
        <Card key={i} fluid>
          <Card.Content>
            <Link
              to={`/posts/${title}`}
              children={<Card.Header as="h1">{title}</Card.Header>}
            />
            <Divider />
            <Card.Description>
              <Metadata title={title} />
            </Card.Description>
          </Card.Content>
        </Card>
      ))}
    </>
  );
}

export default Posts;
