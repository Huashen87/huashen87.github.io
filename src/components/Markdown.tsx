import remarkGfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Segment, Button, Icon } from 'semantic-ui-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function LinkRenderer(props: any) {
  return (
    <a href={props.href} target="_blank" rel="noreferrer">
      {props.children}
    </a>
  );
}

function CodeRenderer({ node, inline, className, children, ...props }: any) {
  const match = /language-(\w+)/.exec(className || '');
  const [copied, setCopied] = useState<boolean>(false);
  const { t } = useTranslation();

  const content = String(children).replace(/\n$/, '');

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
  };

  return !inline && match ? (
    <Segment textAlign="right" secondary>
      <Button onClick={handleCopy} size="mini" compact positive={copied}>
        {`${t(copied ? 'copied' : 'click-to-copy')}  `}
        <Icon name={copied ? 'check' : 'copy'} fitted />
      </Button>
      <SyntaxHighlighter
        children={content}
        style={vscDarkPlus}
        language={match[1]}
        PreTag="div"
        {...props}
      />
    </Segment>
  ) : (
    <Segment secondary>
      <code className={className} {...props}>
        {children}
      </code>
      <Button
        onClick={handleCopy}
        size="mini"
        compact
        positive={copied}
        floated="right"
      >
        {`${t(copied ? 'copied' : 'click-to-copy')}  `}
        <Icon name={copied ? 'check' : 'copy'} fitted />
      </Button>
    </Segment>
  );
}

function Markdown({ children }: { children: string }) {
  return (
    <ReactMarkdown
      children={children}
      remarkPlugins={[remarkGfm]}
      components={{
        a: LinkRenderer,
        code: CodeRenderer,
      }}
    />
  );
}

export default Markdown;
