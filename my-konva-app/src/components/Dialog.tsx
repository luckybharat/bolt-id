import * as React from 'react';
import * as RadixDialog from '@radix-ui/react-dialog';
import { Button } from './Button';

export interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: React.ReactNode;
  description?: React.ReactNode;
  children: React.ReactNode;
  trigger?: React.ReactNode;
  footer?: React.ReactNode;
}

export const Dialog: React.FC<DialogProps> = ({
  open,
  onOpenChange,
  title,
  description,
  children,
  trigger,
  footer,
}) => {
  return (
    <RadixDialog.Root open={open} onOpenChange={onOpenChange}>
      {trigger && <RadixDialog.Trigger asChild>{trigger}</RadixDialog.Trigger>}
      <RadixDialog.Portal>
        <RadixDialog.Overlay className="fixed inset-0 z-50 bg-black/50" />
        <RadixDialog.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 shadow-lg focus:outline-none">
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