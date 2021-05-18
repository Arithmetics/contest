import { relationship, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';
import { cloudinaryImage } from '@keystone-next/cloudinary';
import { isAdmin } from '../keystoneTypeAugments';

export const cloudinary = {
  cloudName: process.env.CLOUDINARY_CLOUD_NAME || '',
  apiKey: process.env.CLOUDINARY_KEY || '',
  apiSecret: process.env.CLOUDINARY_SECRET || '',
  folder: 'contests',
};

export const ContestImage = list({
  access: {
    create: isAdmin,
    read: true,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: {
    image: cloudinaryImage({
      cloudinary,
      label: 'Source',
    }),
    altText: text(),
    contest: relationship({ ref: 'Contest.image' }),
  },
  ui: {
    listView: {
      initialColumns: ['image', 'altText', 'contest'],
    },
  },
});
