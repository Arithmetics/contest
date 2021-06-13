import { Avatar, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

interface AvatarLinkProps {
  title: string;
  size: string;
  href: string;
  name: string;
  src: string;
}
export default function AvatarLink({ href, size, name, src }: AvatarLinkProps): JSX.Element {
  return (
    <NextLink href={href} as={href}>
      <Link _hover={undefined} href={href}>
        <Avatar size={size} name={name} src={src} />
      </Link>
    </NextLink>
  );
}
