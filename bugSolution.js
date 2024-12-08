```javascript
// bugSolution.js
// ... other imports ...
import { safelist } from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    safelist([
      // add classes to safelist that might be purged mistakenly
      'bg-gray-200',
      'p-4',
      'rounded-lg',
      'shadow-md',
      'text-xl',
      'font-bold',
      'mb-2',
    ]),
  ],
}
```