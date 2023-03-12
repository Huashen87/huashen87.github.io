import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import { Container } from 'semantic-ui-react';
import Posts from '../components/SomePosts';

function Post() {
  const { t } = useTranslation();
  const { tag } = useParams();

  return (
    <Container>
      <h1>{`${t('tags')} : ${tag}`}</h1>
      {<Posts filter={(p) => p.tags.includes(tag!)} />}
    </Container>
  );
}

export default Post;
