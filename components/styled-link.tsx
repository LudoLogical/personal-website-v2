import { FC } from 'react';
import Link from 'next/link';

const StyledLink: FC<{
  href: string,
  text: string
}> = ({ href, text }) => {
  return (
    <Link href={href}><a className={'text-base-content'}>{text}</a></Link>
  )
}

export default StyledLink;