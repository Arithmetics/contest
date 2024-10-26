import { Link } from '@chakra-ui/react';
import NextLink from 'next/link';

interface ChakraLinkProps {
  title: string;
  href: string;
  children?: JSX.Element;
}
export default function ChakraLink({ href, title, children }: ChakraLinkProps): JSX.Element {
  return (
    <NextLink href={href} as={href}>
      <Link _hover={undefined} color="btbets.500">
        {children ? children : title}
      </Link>
    </NextLink>
  );
}

// https://github.com/chakra-ui/chakra-ui/issues/132
