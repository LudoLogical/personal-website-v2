import React, { FC } from 'react';

const Wrapper: FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <div className={'absolute table top-0 w-full h-full'}>
      <div className={'table-cell align-middle'}>
        <div className={'my-14'}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Wrapper;