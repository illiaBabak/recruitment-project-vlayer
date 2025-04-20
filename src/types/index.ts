export type Construction = {
  image: string;
  name: string;
  location: string;
  price: number;
  type?: 'House' | 'Apartment';
};

export type Testimonial = {
  testimonial: string;
  authorName: string;
  authorImage: string;
  authorRole: 'Renter';
};

export type ConstructionCategory = 'Houses' | 'Apartments';
