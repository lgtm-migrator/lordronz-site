import { motion, Variants } from 'framer-motion';
import { useRouter } from 'next/router';

import clsxm from '@/lib/clsxm';

import UnstyledLink from './links/UnstyledLink';

export type NavigationItemProps = {
  href: string;
  title: string;
  variants: Variants;
  initial: string;
  animate: string;
  customDelay: number;
};

const NavigationItem = ({
  href,
  title,
  variants,
  initial,
  animate,
  customDelay,
}: NavigationItemProps) => {
  const { asPath } = useRouter();
  const isActive = asPath.startsWith(href);

  return (
    <motion.li
      variants={variants}
      initial={initial}
      animate={animate}
      custom={customDelay}
    >
      <UnstyledLink
        href={href}
        className={clsxm(
          isActive
            ? 'text-off-black dark:text-off-white font-bold'
            : 'text-grey-700 md:text-grey-500 hover:text-off-black dark:hover:text-off-white font-medium',
          'animated-underline relative block whitespace-nowrap text-2xl transition md:text-lg'
        )}
      >
        {title}
      </UnstyledLink>
    </motion.li>
  );
};

export default NavigationItem;
