import { text } from '@keystone-next/keystone/fields';
import { list } from '@keystone-next/keystone';
import { cloudinaryImage } from '@keystone-next/cloudinary';
import { isAdmin, isSignedIn } from '../keystoneTypeAugments';

export const cloudinary = {
  cloudName: process.env.CLOUDINARY_CLOUD_NAME || '',
  apiKey: process.env.CLOUDINARY_KEY || '',
  apiSecret: process.env.CLOUDINARY_SECRET || '',
  folder: 'contests',
};

export const CloudImage = list({
  access: {
    operation: {
      create: isSignedIn,
      query: () => true,
      update: isAdmin,
      delete: isAdmin,
    },
  },
  fields: {
    image: cloudinaryImage({
      cloudinary,
      label: 'Source',
    }),
    altText: text({ validation: { isRequired: false } }),
  },
  ui: {
    listView: {
      initialColumns: ['image', 'altText'],
    },
  },
});
