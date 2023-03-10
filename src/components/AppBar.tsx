import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { Menu, MenuItemProps } from 'semantic-ui-react';
import i18n from '../i18n';

const pages: string[] = ['home', 'posts', 'tags', 'works'];

function AppBar() {
  const [activeItem, setActiveItem] = useState<string>('home');
  const [isEng, setIsEng] = useState<boolean>(true);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleItemClick = (_: any, d: MenuItemProps) => {
    const name = d.name!;
    setActiveItem(name);
    navigate(name === 'home' ? '/' : name);
  };

  const handleChangeLang = () => {
    localStorage.setItem('lng', !isEng ? 'en' : 'zh');
    setIsEng(!isEng);
  };

  useEffect(() => {
    setActiveItem(window.location.pathname.replace('/', '') || 'home');
  }, [window.location.pathname]);

  useEffect(() => {
    setIsEng(localStorage.getItem('lng') !== 'zh');
  }, []);

  useEffect(() => {
    i18n.changeLanguage(isEng ? 'en' : 'zh');
  }, [isEng]);

  return (
    <>
      <Menu inverted size="huge" widths={6} fixed="top">
        {pages.map((name, i) => (
          <Menu.Item
            key={i}
            name={name}
            active={activeItem === name}
            onClick={handleItemClick}
            content={t(name)}
          />
        ))}
        <Menu.Item
          icon={'world'}
          name="change-lang"
          position="right"
          onClick={handleChangeLang}
          content={t('change-lang')}
        />
      </Menu>
      <div style={{ height: 60 }} />
    </>
  );
}

export default AppBar;
