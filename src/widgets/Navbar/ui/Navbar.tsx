import { classNames } from 'shared/lib';
import { Button, ButtonTheme, Modal } from 'shared/ui';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const { t } = useTranslation();

  const onToggleModal = useCallback(() => setIsAuthModalOpen((prev) => !prev), []);

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onToggleModal}
      >
        {t('Войти')}
      </Button>
      { /* eslint-disable-next-line i18next/no-literal-string */ }
      <Modal isOpen={isAuthModalOpen} onClose={onToggleModal}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </Modal>
    </div>
  );
}
