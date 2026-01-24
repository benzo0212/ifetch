import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductCard from '../components/ProductCard';
import { BrowserRouter } from 'react-router-dom';

const sample = {
  id: 'test-1',
  displayName: 'iPhone Mock 64GB',
  storageVariant: '64GB',
  price: 'R1234',
  priceNumber: 1234,
  shortDescription: 'Pre-loved',
  imageUrls: ['/assets/iphone11.jpg']
};

test('renders product card with title and price', () => {
  render(<BrowserRouter><ProductCard product={sample} /></BrowserRouter>);
  expect(screen.getByText(/iPhone Mock 64GB/)).toBeInTheDocument();
  expect(screen.getByText(/R1234/)).toBeInTheDocument();
});
