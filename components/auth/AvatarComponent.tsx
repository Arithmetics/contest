// components/terminal-component
import { ChangeEvent } from 'react';
import Avatar from 'react-avatar-edit';

type AvatarComponentProps = {
  onFileLoad?: (data: File | ChangeEvent<HTMLInputElement>) => void;
  onCrop: (data: string) => void;
};

export default function AvatarComponent({ onFileLoad, onCrop }: AvatarComponentProps): JSX.Element {
  return (
    <Avatar width={400} imageWidth={300} height={300} onFileLoad={onFileLoad} onCrop={onCrop} />
  );
}
