import { useState, useEffect } from 'react';
import { Navigate, useParams } from 'react-router';
import { Container } from 'semantic-ui-react';
import Markdown from '../components/Markdown';
import Metadata from '../components/Metadata';
import posts from '../data/posts';

function Post() {
  const { title } = useParams();
  const valid = posts.some((p) => p.title === title);
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    (async () => {
      const req = await fetch(`/files/${title}.md`);
      const text = await req.text();
      setContent(text);
    })();
  }, [title]);

  return valid ? (
    <Container>
      <Markdown>{content}</Markdown>
      {<Metadata title={title!} />}
    </Container>
  ) : (
    <Navigate to="/posts" />
  );
}

export default Post;
