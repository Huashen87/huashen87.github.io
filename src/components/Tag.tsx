import { Link } from 'react-router-dom';
import { Label } from 'semantic-ui-react';

function Tag({ to, content }: { to: string; content?: string }) {
  return (
    <Link
      style={{ margin: '5px 5px' }}
      to={`/tags/${to}`}
      children={<Label content={content || to} />}
    />
  );
}

export default Tag;
