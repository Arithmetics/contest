import React from 'react';

export const LineCardFooterTicketCutouts = ({ useBorder }: { useBorder: boolean }): JSX.Element => (
  <>
    <div
      style={{
        position: 'absolute',
        height: '12px',
        width: '12px',
        left: '-13px',
        top: '-6px',
        backgroundColor: '#1a202c',
        borderRadius: '0px 6px 6px 0px',
        borderTop: useBorder ? '1px #319795 solid' : 'none',
        borderRight: useBorder ? '1px #319795 solid' : 'none',
        borderBottom: useBorder ? '1px #319795 solid' : 'none',
      }}
    />
    <div
      style={{
        position: 'absolute',
        height: '12px',
        width: '12px',
        right: '-13px',
        top: '-6px',
        backgroundColor: '#1a202c',
        borderRadius: '6px 0px 0px 6px',
        borderTop: useBorder ? '1px #319795 solid' : 'none',
        borderLeft: useBorder ? '1px #319795 solid' : 'none',
        borderBottom: useBorder ? '1px #319795 solid' : 'none',
      }}
    />
  </>
);
