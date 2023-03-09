import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t('about')}</h1>
      {Array(20)
        .fill(1)
        .map((_, i) => (
          <h2 key={i}>test</h2>
        ))}
    </>
  );
}

export default About;
