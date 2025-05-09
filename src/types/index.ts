export type Construction = {
  image: string;
  name: string;
  location: string;
  price: number;
  type?: ConstructionCategory;
};

export type Testimonial = {
  testimonial: string;
  authorName: string;
  authorImage: string;
  authorRole: string;
};

export type ConstructionCategory = 'House' | 'Apartment';
