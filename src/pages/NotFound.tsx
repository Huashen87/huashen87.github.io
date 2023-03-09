import { useTranslation } from 'react-i18next';

function NotFound() {
  const { t } = useTranslation();

  return (
    <>
      <h1>404 - Page Not Found!</h1>
      <h3>{t('pnf-description')}</h3>
    </>
  );
}

export default NotFound;
