import { useTranslation } from 'react-i18next';
import { Container, Header } from 'semantic-ui-react';

function Works() {
  const { t } = useTranslation();

  return (
    <Container>
      <h1>{t('works')}</h1>
    </Container>
  );
}

export default Works;
