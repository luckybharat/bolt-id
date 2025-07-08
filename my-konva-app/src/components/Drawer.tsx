import React from 'react';

export interface DrawerProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Drawer: React.FC<DrawerProps> = ({ open, onClose, children }) => {
  return (
    <div
      className={`fixed inset-0 z-50 transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'} bg-black/50`}
      style={{ pointerEvents: open ? 'auto' : 'none' }}
      onClick={onClose}
    >
      <div
        className="absolute right-0 top-0 h-full w-80 bg-white shadow-lg p-6"
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};