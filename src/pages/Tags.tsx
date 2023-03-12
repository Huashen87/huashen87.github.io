import { useTranslation } from 'react-i18next';
import Tag from '../components/Tag';
import posts from '../data/posts';

function Tags() {
  const { t } = useTranslation();
  const tags = new Map<string, number>();
  posts.forEach((p) => p.tags.forEach((t) => tags.set(t, (tags.get(t) || 0) + 1)));
  const sortedTags: { tag: string; count: number }[] = [];
  tags.forEach((v, k) => sortedTags.push({ tag: k, count: v }));
  sortedTags.sort((a, b) => b.count - a.count);

  return (
    <>
      <h1>{t('tags')}</h1>
      {sortedTags.map((t, i) => (
        <Tag to={t.tag} content={`${t.tag} (${t.count})`} key={i} />
      ))}
    </>
  );
}

export default Tags;
