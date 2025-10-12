# InboundHero Component

A responsive, accessible hero section component that displays statistics cards with carousel functionality alongside a prominent headline and call-to-action.

## Features

- 📱 **Responsive Design**: Two-column layout on desktop, stacked on mobile
- ♿ **Accessibility**: Full keyboard navigation, ARIA labels, screen reader support
- 🎨 **Customizable**: Theme support, flexible content, decorative gradients
- 🎯 **Interactive**: Clickable carousel dots, keyboard navigation, optional auto-advance
- ⚡ **Performance**: Lazy loading, CSS-only animations with motion preferences
- 🎭 **Animations**: Subtle entrance animations with `prefers-reduced-motion` support

## Quick Start

```tsx
import InboundHero from './components/inbound-hero'

const stats = [
  { id: '1', number: '350+', label: 'SPEAKERS' },
  { id: '2', number: '50K+', label: 'ATTENDEES' },
  { id: '3', number: '100+', label: 'SESSIONS' }
]

export default function HomePage() {
  return (
    <InboundHero
      headline="What is INBOUND?"
      description="Better growth starts here. Experience three days of game-changing insights..."
      stats={stats}
      onLearnMore={() => console.log('Learn more clicked!')}
    />
  )
}
```

## Props

### `InboundHeroProps`

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `headline` | `string` | `"What is INBOUND?"` | Main headline text |
| `description` | `string` | **Required** | Descriptive paragraph text |
| `stats` | `StatCard[]` | **Required** | Array of statistics to display |
| `initialIndex` | `number` | `0` | Initial card to display |
| `onLearnMore` | `() => void` | `undefined` | Callback for CTA button click |
| `className` | `string` | `''` | Additional CSS classes |
| `autoAdvanceMs` | `number` | `undefined` | Auto-advance interval in milliseconds |
| `theme` | `'default' \| 'custom'` | `'default'` | Color theme variant |

### `StatCard`

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | `string` | ✅ | Unique identifier |
| `number` | `string` | ✅ | Statistic number (e.g., "350+") |
| `label` | `string` | ❌ | Label text (e.g., "SPEAKERS") |
| `accentImg` | `string` | ❌ | URL for accent image |

## Usage Examples

### Basic Usage
```tsx
<InboundHero
  description="Your compelling description here"
  stats={[
    { id: '1', number: '100+', label: 'USERS' }
  ]}
/>
```

### With Auto-advance
```tsx
<InboundHero
  description="Statistics change every 5 seconds"
  stats={multipleStats}
  autoAdvanceMs={5000}
/>
```

### Custom Theme
```tsx
<InboundHero
  description="Using custom color scheme"
  stats={stats}
  theme="custom"
/>
```

### With Accent Images
```tsx
const statsWithImages = [
  { 
    id: '1', 
    number: '350+', 
    label: 'SPEAKERS',
    accentImg: '/icons/speaker.svg'
  }
]

<InboundHero
  description="Enhanced with visual accents"
  stats={statsWithImages}
/>
```

## Accessibility Features

- **Keyboard Navigation**: Arrow keys navigate carousel when focused
- **Screen Readers**: Proper ARIA labels and semantic HTML
- **Focus Management**: Visible focus indicators on interactive elements
- **Motion Preferences**: Respects `prefers-reduced-motion` setting
- **Color Contrast**: WCAG compliant color combinations

### Keyboard Controls

| Key | Action |
|-----|--------|
| `Tab` | Focus carousel area |
| `←` / `→` | Navigate between cards |
| `Space` / `Enter` | Activate focused dot |

## Responsive Behavior

- **Desktop (≥1024px)**: Two-column layout (40% cards, 60% content)
- **Tablet (768px-1023px)**: Stacked layout with adjusted spacing
- **Mobile (<768px)**: Full-width stacked layout

## Styling

The component uses Tailwind CSS classes exclusively. Key design tokens:

- **Colors**: Teal-800 text, Orange-500 accents, gradient decorations
- **Typography**: Bold headlines (text-4xl to text-6xl), readable body text
- **Spacing**: Consistent padding and margins using Tailwind scale
- **Shadows**: Subtle card shadows with `shadow-lg`
- **Borders**: Rounded corners with `rounded-2xl` and `rounded-full`

## Performance Notes

- Images use `loading="lazy"` for better performance
- Animations are CSS-based with minimal JavaScript
- Component is tree-shakeable and has no heavy dependencies
- Decorative elements are properly marked as `aria-hidden`

## Browser Support

Works in all modern browsers that support:
- CSS Grid and Flexbox
- CSS Custom Properties
- ES2018+ JavaScript features

## Testing

The component includes comprehensive accessibility features that can be tested with:
- Screen readers (NVDA, JAWS, VoiceOver)
- Keyboard-only navigation
- Automated accessibility testing tools
- Responsive design testing across devices