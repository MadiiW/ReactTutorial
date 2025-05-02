
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { Counter } from './Counter';
import '@testing-library/jest-dom';

describe('Counter', () => {
 it('zeigt den Anfangszähler', () => {
   render(<Counter />);
   expect(screen.getByText('Count: 0')).toBeInTheDocument();
 });

 it('erhöht den Zähler bei Klick', async () => {
   render(<Counter />);
   const button = screen.getByRole('button', { name: 'Increment' });

   await userEvent.click(button);
   expect(screen.getByText('Count: 1')).toBeInTheDocument();
 });

 it('zeigt eine Nachricht nach 5 Klicks', async () => {
   render(<Counter />);
   const button = screen.getByRole('button', { name: 'Increment' });

   for (let i = 0; i < 5; i++) {
     await userEvent.click(button);
   }

   expect(screen.getByText("You've clicked a lot!")).toBeInTheDocument();
 });
});

