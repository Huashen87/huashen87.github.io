import { useTranslation } from 'react-i18next';
import { Container, Divider, List, Segment } from 'semantic-ui-react';

function Footer() {
  const { t } = useTranslation();

  return (
    <Segment
      inverted
      vertical
      style={{
        margin: '3em 0em 0em',
        padding: '3em 0em',
        position: 'absolute',
        button: 0,
        height: '160px',
        width: '100%',
      }}
    >
      <Container textAlign="center">
        <p>Copyright © 2023 by Huashen87</p>
        <Divider inverted />
        <List horizontal inverted link size="small">
          <List.Item>{`${t('contact-me')} :`}</List.Item>
          <List.Item as="a" href="mailto:HuashenCoding@gmail.com">
            E-mail
          </List.Item>
          <List.Item as="a" href="https://Github.com/Huashen87" target="_blank">
            Github
          </List.Item>
          <List.Item
            as="a"
            href="https://www.linkedin.com/in/huashen87"
            target="_blank"
          >
            LinkedIn
          </List.Item>
        </List>
      </Container>
    </Segment>
  );
}

export default Footer;
