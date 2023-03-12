import { useTranslation } from 'react-i18next';
import { Container } from 'semantic-ui-react';
import SomePosts from '../components/SomePosts';

function Posts() {
  const { t } = useTranslation();

  return (
    <Container>
      <h1>{t('posts')}</h1>
      {<SomePosts />}
    </Container>
  );
}

export default Posts;
