import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { Menu, MenuItemProps } from 'semantic-ui-react';
import i18n from '../i18n';

const pages: string[] = ['home', 'about', 'posts', 'works'];

function AppBar() {
  const [activeItem, setActiveItem] = useState<string>('home');
  const [isEng, setIsEng] = useState<boolean>(true);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleItemClick = (_: any, d: MenuItemProps) => {
    const name = d.name!;
    setActiveItem(name);
    navigate(name);
  };

  useEffect(() => {
    i18n.changeLanguage(isEng ? 'en' : 'zh');
  }, [isEng]);

  return (
    <Menu inverted>
      {pages.map((name, i) => (
        <Menu.Item
          key={i}
          name={name}
          active={activeItem === name}
          onClick={handleItemClick}
          content={t(name)}
        />
      ))}
      <Menu.Item icon={'language'} position="right" onClick={() => setIsEng(!isEng)} />
    </Menu>
  );
}

export default AppBar;
