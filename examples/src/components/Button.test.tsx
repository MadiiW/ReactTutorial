import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import { Button } from './Button';


describe('Button', () => {
 it('zeigt den Button-Text an', () => {
   render(<Button />);
   expect(screen.getByText('Click me')).toBeInTheDocument();
 });
});
