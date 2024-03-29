import { text } from '@keystone-6/core/fields';
import { list } from '@keystone-6/core';
import { cloudinaryImage } from '@keystone-6/cloudinary';
import { isAdmin, isSignedIn } from '../keystoneTypeAugments';
import { Lists } from '.keystone/types';

export const cloudinary = {
  cloudName: process.env.CLOUDINARY_CLOUD_NAME || '',
  apiKey: process.env.CLOUDINARY_KEY || '',
  apiSecret: process.env.CLOUDINARY_SECRET || '',
  folder: 'contests',
};

export const CloudImage: Lists.CloudImage = list({
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
