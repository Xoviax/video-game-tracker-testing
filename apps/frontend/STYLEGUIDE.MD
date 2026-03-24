# TAILWIND DOCUMENTATION CAN BE FOUND AT https://tailwindcss.com/docs IF YOU ARE UNSURE WHAT A CLASS DOES, LOOK IT UP THERE


## Color Palette

### Background Colors
- **Primary Background**: `bg-neutral-950` - Main app background
- **Surface**: `bg-neutral-900` - Cards, panels, elevated surfaces
- **Elevated Surface**: `bg-neutral-800` - Like when you hover or select items

### Text Colors
- **Primary Text**: `text-neutral-100` - Headings, titles, important stuff
- **Secondary Text**: `text-neutral-400` - Body text, descriptions
- **Muted Text**: `text-neutral-500` - Footers, things you don't want people to focus on that still have to be there

### Accent Colors
- **Primary Accent**: `text-neutral-50` / `bg-neutral-50` 
- **Border**: `border-neutral-800` - dividers and outlines

## Fonts and Text

- **Page Title (h1)**: `text-3xl font-bold text-neutral-100`
- **Heading (h2)**: `text-2xl font-semibold text-neutral-100`
- **Card Title (h3)**: `text-lg font-medium text-neutral-100`
- **Body Text**: `text-base text-neutral-400`
- **Small Text**: `text-sm text-neutral-500`

## Spacing

- **Page Container**: `max-w-6xl mx-auto px-4 py-8`
- **Section Spacing**: `space-y-8` between sections
- **Card Padding**: `p-6`
- **Navbar**: `py-8 px-4`
- **Header**: `py-8`

## Components

### Card Pattern
```
bg-neutral-900 rounded-lg p-6 border border-neutral-800 hover:bg-neutral-800
```

### Navigation Bar
```
flex justify-between items-center px-4 py-8 bg-neutral-900 border-b border-neutral-800
```

### Navigation Links
```
text-neutral-400 hover:text-neutral-100
```

### Primary Button
```
bg-neutral-50 text-neutral-950 px-4 py-2 rounded-md font-medium hover:bg-neutral-200
```

### Header
```
flex flex-col items-center gap-2 py-8 border-b border-neutral-800
```
