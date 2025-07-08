import * as React from 'react';
import * as RadixDialog from '@radix-ui/react-dialog';
import { Button } from './Button';

export interface DrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: React.ReactNode;
  description?: React.ReactNode;
  children: React.ReactNode;
  trigger?: React.ReactNode;
  footer?: React.ReactNode;
  side?: 'left' | 'right' | 'top' | 'bottom';
}

export const Drawer: React.FC<DrawerProps> = ({
  open,
  onOpenChange,
  title,
  description,
  children,
  trigger,
  footer,
  side = 'right',
}) => {
  const sideClass = {
    right: 'right-0 top-0 h-full w-80',
    left: 'left-0 top-0 h-full w-80',
    top: 'top-0 left-0 w-full h-80',
    bottom: 'bottom-0 left-0 w-full h-80',
  }[side];

  return (
    <RadixDialog.Root open={open} onOpenChange={onOpenChange}>
      {trigger && <RadixDialog.Trigger asChild>{trigger}</RadixDialog.Trigger>}
      <RadixDialog.Portal>
        <RadixDialog.Overlay className="fixed inset-0 z-50 bg-black/50" />
        <RadixDialog.Content className={`fixed z-50 bg-white shadow-lg p-6 transition-transform duration-300 ${sideClass} rounded-none focus:outline-none`}>
          {title && <RadixDialog.Title className="text-lg font-bold mb-2">{title}</RadixDialog.Title>}
          {description && <RadixDialog.Description className="mb-4 text-muted-foreground">{description}</RadixDialog.Description>}
          <div>{children}</div>
          {footer && <div className="mt-4">{footer}</div>}
          <RadixDialog.Close asChild>
            <Button variant="ghost" className="absolute top-2 right-2">✕</Button>
          </RadixDialog.Close>
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
};