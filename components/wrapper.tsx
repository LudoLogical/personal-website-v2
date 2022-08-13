import React, { FC } from 'react';

const Wrapper: FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <div className={'absolute table top-0 w-full h-full'}>
      <div className={'table-cell align-middle'}>
        {children}
      </div>
    </div>
  )
}

export default Wrapper;