import { useTranslation } from 'react-i18next';

function Posts() {
  const { t } = useTranslation();

  return <h1>{t('posts')}</h1>;
}

export default Posts;
