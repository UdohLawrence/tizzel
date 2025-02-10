import { z } from 'zod';
import { formatNumberWithDecimal } from './utils';

const currency = z
  .string()
  .refine(
    (value) => /^\d+(\.\d{2})?$/.test
    (formatNumberWithDecimal(Number(value))), 'Price must have exactly 2 decimal places (e.g. 12.34)'
  );

export const insertProductSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters'),
  slug: z.string().min(3, 'Slug must be at least 3 characters'),
  category: z.string().min(3, 'Category must be at least 3 characters'),
  brand: z.string().min(3, 'Brand must be at least 3 characters'),
  description: z.string().min(3, 'Description must be at least 3 characters'),
  subCategory: z.string().min(3, 'SubCategory must be at least 3 characters'),
  stock: z.coerce.number(),
  images: z.array(z.string()).min(1, 'Product must have at least 1 image'),
  isFeatured: z.boolean(),
  banner: z.string().nullable(),
  price: currency
});

export const signInFormSchema = z.object({
  email: z.string().email('Invalid email address.').min(8, 'Email must be at least 8 characters'),
  password: z.string().min(8, 'Password must be at least 8 characters')
});
export const signUpFormSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters'),
  email: z.string().min(8, 'Email must be at least 8 characters'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string().min(8, 'Confirmed password must be up to 8 characters')
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword']
})