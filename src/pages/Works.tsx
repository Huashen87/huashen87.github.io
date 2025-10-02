import { useTranslation } from 'react-i18next';
import { Card, Container } from 'semantic-ui-react';
import Work from '../components/Work';
import works from '../data/works';

function Works() {
  const { t } = useTranslation();

  return (
    <Container>
      <h1>{t('works')}</h1>
      <Card.Group itemsPerRow={2} stackable>
        {works.map((w, i) => (
          <Work img={w.img} title={w.title} link={w.link} desc={w.desc} key={i} />
        ))}
      </Card.Group>
    </Container>
  );
}

export default Works;
