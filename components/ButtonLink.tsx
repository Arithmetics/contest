import { Link, Button } from '@chakra-ui/react';
import NextLink from 'next/link';

interface ButtonLinkProps {
  title: string;
  href: string;
}
export default function ButtonLink({ href, title }: ButtonLinkProps): JSX.Element {
  return (
    <NextLink href={href} as={href}>
      <Link _hover={undefined} href={href}>
        <Button variant="ghost" colorScheme="teal">
          {title}
        </Button>
      </Link>
    </NextLink>
  );
}

// https://github.com/chakra-ui/chakra-ui/issues/132
