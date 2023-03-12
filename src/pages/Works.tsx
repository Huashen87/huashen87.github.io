import { useTranslation } from 'react-i18next';

function Works() {
  const { t } = useTranslation();

  return <h1>{t('works')}</h1>;
}

export default Works;
