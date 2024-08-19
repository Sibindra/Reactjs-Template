import { it, expect, describe } from 'vitest';
import Button from '../Button';

describe('Button', () => {
  it('should render a button', () => {
    expect(Button).toBeDefined();
  });

  it('should render a button with primary variant of size md and text Button', () => {
    expect(
      Button({ variant: 'primary', size: 'md', children: 'Button' })
    ).toBeDefined();
  });

  it('should render a button with secondary variant of size md and text Button', () => {
    expect(
      Button({ variant: 'secondary', size: 'md', children: 'Button' })
    ).toBeDefined();
  });

  it('should render a button with loading variant of size md and text Button', () => {
    expect(
      Button({ variant: 'loading', size: 'md', children: 'Button' })
    ).toBeDefined();
  });
});
