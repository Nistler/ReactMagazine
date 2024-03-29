import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className?: string;
}
export function LangSwitcher({ className }: LangSwitcherProps) {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      theme={ButtonTheme.CLEAR_INVERTED}
      onClick={toggleLanguage}
      className={classNames(cls.LangSwitcher, {}, [className])}
    >
      {t('Язык')}
    </Button>
  );
}
