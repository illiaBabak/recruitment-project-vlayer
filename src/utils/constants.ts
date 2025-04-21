import { Construction, Testimonial } from 'src/types';

export const FEATURED_CONSTRUCTION: Construction = {
  image: '/apartment3.png',
  name: 'Beverly Springfield',
  location: '2821 Lake Sevilla, Palm Harbor, TX',
  price: 2700,
};

export const FOOTER_LINKS = ['Help Center', 'FAQ', 'Terms & Privacy'] as const;

export const SOCIAL_MEDIA = [
  'facebook',
  'instagram',
  'twitter',
  'linkedin',
] as const;

export const SECTIONS = [
  'Rent',
  'Buy',
  'Sell',
  'Manage Property',
  'Resources',
] as const;

export const CONSTRUCTIONS: Construction[] = [
  {
    image: '/house1.png',
    name: 'Palm Harbor',
    location: '2699 Green Valley, Highland Lake, FL',
    price: 3440,
    type: 'House',
  },
  {
    image: '/house2.png',
    name: 'St. Crystal',
    location: '210 US Highway, Highland Lake, FL',
    price: 6550,
    type: 'House',
  },
  {
    image: '/house3.png',
    name: 'Faulkner Aver',
    location: '909 Woodland St, Michigan, IN',
    price: 4950,
    type: 'House',
  },
  {
    image: '/apartment1.png',
    name: 'Tarpon Bay',
    location: '103 Lake Shores, Michigan, IN',
    price: 2140,
    type: 'Apartment',
  },
  {
    image: '/apartment2.png',
    name: 'Cove Red',
    location: '243 Curlew Road, Palm Harbor, TX',
    price: 1450,
    type: 'Apartment',
  },
  {
    image: '/apartment3.png',
    name: 'Beverly Springfield',
    location: '2821 Lake Sevilla, Palm Harbor, TX',
    price: 3850,
    type: 'Apartment',
  },
] as const;

export const TESTIMONIALS: Testimonial[] = [
  {
    testimonial:
      '"Estatery is the platform I go to on almost a daily basis for 2nd home and vacation condo shopping, or to just look at dream homes in new areas. Thanks for fun home shopping and comparative analyzing, Estatery!"',
    authorName: 'Mira Culos',
    authorImage: '/avatar1.png',
    authorRole: 'Renter',
  },
  {
    testimonial:
      '"I check Estatery almost every day — whether I\'m seriously house hunting or just daydreaming about future getaways. It makes exploring new locations and comparing properties incredibly easy and enjoyable."',
    authorName: 'Mark Brown',
    authorImage: '/avatar2.png',
    authorRole: 'Renter',
  },
  {
    testimonial:
      '"Estatery turns home shopping into a daily delight. Whether I\'m planning for the future or just exploring what\'s out there, I always find something exciting and new."',
    authorName: 'Jake White',
    authorImage: '/avatar3.png',
    authorRole: 'Renter',
  },
] as const;
