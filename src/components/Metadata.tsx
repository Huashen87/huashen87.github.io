import { useTranslation } from 'react-i18next';
import posts from '../data/posts';
import Tag from './Tag';

function Metadata({ title }: { title: string }) {
  const { t } = useTranslation();
  const metadata = posts.filter((p) => p.title === title)[0] || {
    title: '',
    tags: [],
    publishAt: '',
  };

  return (
    <>
      <p>{`${t('publish-at')} : ${metadata.publishAt}  `}</p>
      {metadata.tags.map((t, i) => (
        <Tag to={t} key={i} />
      ))}
    </>
  );
}

export default Metadata;
