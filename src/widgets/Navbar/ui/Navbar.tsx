import { classNames } from 'shared/lib';
import { Button, ButtonTheme } from 'shared/ui';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const { t } = useTranslation();

  const onCloseModal = useCallback(() => setIsAuthModalOpen(false), []);

  const onShowModal = useCallback(() => setIsAuthModalOpen(true), []);

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onShowModal}
      >
        {t('Войти')}
      </Button>
      <LoginModal isOpen={isAuthModalOpen} onClose={onCloseModal} />
    </div>
  );
}
