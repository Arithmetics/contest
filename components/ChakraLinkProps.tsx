import { Link } from '@chakra-ui/react';
import NextLink from 'next/link';

interface ChakraLinkProps {
  title: string;
  href: string;
}
export default function ChakraLink({ href, title }: ChakraLinkProps): JSX.Element {
  return (
    <NextLink href={href} as={href}>
      <Link _hover={undefined} color="teal.500">
        {title}
      </Link>
    </NextLink>
  );
}

// https://github.com/chakra-ui/chakra-ui/issues/132
