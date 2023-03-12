import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Markdown from '../components/Markdown';

function Home() {
  const { i18n } = useTranslation();
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    (async () => {
      const req = await fetch(`/me-${i18n.language}.md`);
      const text = await req.text();
      setContent(text);
    })();
  }, [i18n.language]);

  return <Markdown children={content} />;
}

export default Home;
