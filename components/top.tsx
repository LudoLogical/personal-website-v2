import { FC } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import Link from 'next/link';

const titleStyles = 'mb-3 text-5xl font-bold text-center';
const tabStyles = 'tab tab-bordered text-lg px-1 mx-2';
const tabOptions = ['Main', 'About', 'Résumé', 'Contact'];
const tabDestinations = ['/', '/about', '', '/contact'];

function getTabStyles(isActive: boolean): string {
  return tabStyles + (isActive ? ' tab-active !border-accent' : '');
}

const Top: FC<{
  mainText: string
}> = ({ mainText }) => {
  return (
    <>
      <h1 className={titleStyles}>{mainText}</h1>
      <div className={'tabs mx-auto'}>
        {
          tabOptions.map((option, index) => {
            const isActive = (option === mainText || (option === 'Main' && mainText === 'Daniel DeAnda'));
            return <Link key={option} href={tabDestinations[index]}>
              {option === 'Résumé' ? (
                <a
                  href={'/Resume.pdf'}
                  target={'_blank'}
                  rel={'noreferrer'}
                  className={getTabStyles(isActive)}
                >
                  {option}
                  <FiExternalLink className={'ml-2'} />
                </a>
              ) : (
                <a
                  className={getTabStyles(isActive)}
                >
                  {option}
                </a>
              )}

            </Link>;
          })
        }
      </div>
    </>
  )
}

export default Top;