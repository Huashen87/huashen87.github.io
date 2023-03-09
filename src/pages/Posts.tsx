import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Card, Container, Divider, Header } from 'semantic-ui-react';
import posts from '../data/posts';

function Posts() {
  const { t } = useTranslation();

  return (
    <Container>
      <h1>{t('posts')}</h1>
      {posts.map(({ title, tags, link, publishAt }, i) => (
        <Card key={i} as="a" target="_blank" href={link} fluid>
          <Card.Content>
            <Card.Header as="h1">{title}</Card.Header>
            <Divider />
            <Card.Description>
              {`${t('publish-at')} : ${publishAt}`}
              {tags.map((t) => (
                <Link
                  style={{ margin: '5px 10px', border: '1px solid' }}
                  to={t}
                  children={t}
                />
              ))}
            </Card.Description>
          </Card.Content>
        </Card>
      ))}
    </Container>
  );
}

export default Posts;
