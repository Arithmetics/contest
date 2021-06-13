import { Link, Button, ThemingProps, LayoutProps } from '@chakra-ui/react';
import NextLink from 'next/link';
import { ReactElement } from 'react';

interface ButtonLinkProps {
  title: string;
  href: string;
  buttonTheme: ThemingProps<'Button'>;
  leftIcon?: ReactElement;
  layoutProps?: LayoutProps;
}
export default function ButtonLink({
  href,
  title,
  buttonTheme,
  layoutProps,
  leftIcon,
}: ButtonLinkProps): JSX.Element {
  return (
    <NextLink href={href} as={href}>
      <Link _hover={undefined} href={href}>
        <Button
          variant={buttonTheme.variant}
          colorScheme={buttonTheme.colorScheme}
          leftIcon={leftIcon}
          w={layoutProps?.w}
        >
          {title}
        </Button>
      </Link>
    </NextLink>
  );
}
// https://github.com/chakra-ui/chakra-ui/issues/132
