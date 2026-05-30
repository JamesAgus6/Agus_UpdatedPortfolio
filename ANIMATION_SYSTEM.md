# Portfolio Animation System - Implementation Guide

## Overview
This document outlines the comprehensive animation system implemented for the portfolio, featuring scroll-tracking navigation, hero animations, section transitions, tab controllers, and micro-interactions.

---

## New Hooks

### 1. `useScrollAnimation`
**Purpose:** Detects when an element enters the viewport using Intersection Observer.

```typescript
const { elementRef, isVisible } = useScrollAnimation({
  threshold: 0.1,
  rootMargin: '0px',
  onIntersect: () => console.log('Element visible'),
  onLeave: () => console.log('Element hidden'),
});

return <div ref={elementRef} className={isVisible ? 'animate-fade-in-up' : ''}></div>;
```

### 2. `useScrollTracker`
**Purpose:** Tracks active sections for navigation highlighting based on scroll position.

```typescript
const activeSection = useScrollTracker([
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'contact', label: 'Contact' },
]);

// Use activeSection to highlight nav items
```

### 3. `useCounter`
**Purpose:** Animated number counting when element enters viewport.

```typescript
const { count, elementRef, isVisible } = useCounter({
  end: 8,
  duration: 1000,
  threshold: 0.1,
});

return <div ref={elementRef} className="counter-animate">{count}</div>;
```

### 4. `useStagger`
**Purpose:** Applies staggered animations to child elements.

```typescript
const { elementRef, getAnimationClass, isVisible } = useStagger({
  count: 5,
  threshold: 0.1,
  staggerDelay: 0.1,
});

return (
  <div ref={elementRef}>
    {items.map((item, index) => (
      <div key={index} className={getAnimationClass(index)}>
        {item}
      </div>
    ))}
  </div>
);
```

---

## New Components

### 1. `TextRotator`
**Purpose:** Animated typing and deleting text effect.

```typescript
<TextRotator
  texts={['Innovate', 'Create', 'Develop']}
  typingSpeed={80}
  deletingSpeed={40}
  pauseDuration={1500}
  className="text-primary text-xl"
  cursorClassName="text-primary"
/>
```

**Features:**
- Types text character by character
- Pauses at completion
- Deletes text character by character
- Cycles through multiple texts
- Animated cursor

---

## CSS Animation Classes

### Hero Split-Grid Animations
```html
<!-- Left content slides in from left -->
<div class="hero-content-left">Content</div>

<!-- Right content slides in from right -->
<div class="hero-content-right">Illustration</div>

<!-- Staggered chip animations -->
<div class="hero-subtitle-chip">Chip 1</div>
<div class="hero-subtitle-chip">Chip 2</div>
```

### Section Transitions
```html
<!-- Exit animation for leaving section -->
<div class="section-exit">Exiting content</div>

<!-- Enter animation for incoming section -->
<div class="section-enter">Entering content</div>
```

### Tab Controller
```html
<!-- Tab indicator that slides to active tab -->
<div class="tab-slider" style="--slider-offset: 100px;"></div>
```

### Card Grid Crossfade
```html
<!-- Cards exiting -->
<div class="card-exit">Card</div>

<!-- Cards entering -->
<div class="card-enter">Card</div>
```

### Hover Effects
```html
<!-- Interactive hover lift effect -->
<button class="hover-lift">Hover Me</button>
```

### Counter Animations
```html
<!-- Glowing counter effect -->
<div class="counter-animate">8</div>
```

---

## Scroll Snap Architecture

The portfolio uses CSS Scroll Snap for smooth section navigation:

```html
<div class="scroll-container">
  <section class="scroll-section" id="home">Home</section>
  <section class="scroll-section" id="about">About</section>
  <section class="scroll-section" id="portfolio">Portfolio</section>
  <section class="scroll-section" id="contact">Contact</section>
</div>
```

**CSS Properties:**
- `scroll-snap-type: y mandatory;` - Enables snap scrolling
- `scroll-snap-align: start;` - Snaps sections to top
- `scroll-snap-stop: always;` - Forces stop at each section

---

## Implementation Example: Hero Section

```typescript
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { TextRotator } from '../TextRotator';

export function HeroSection() {
  const { elementRef: leftRef, isVisible: leftVisible } = useScrollAnimation();
  const { elementRef: rightRef, isVisible: rightVisible } = useScrollAnimation();

  return (
    <section id="home" className="scroll-section min-h-screen flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1440px] mx-auto">
        
        {/* Left Column */}
        <div ref={leftRef} className={leftVisible ? 'hero-content-left' : 'opacity-0'}>
          <div className="hero-subtitle-chip">Ready to Innovate</div>
          <h1 className="text-5xl font-bold mt-4">Master Frontend Developer</h1>
          <TextRotator
            texts={['React Expert', 'Animation Master', 'UI Specialist']}
            className="text-2xl text-primary mt-2"
          />
        </div>

        {/* Right Column */}
        <div ref={rightRef} className={rightVisible ? 'hero-content-right' : 'opacity-0'}>
          <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl" />
        </div>
      </div>
    </section>
  );
}
```

---

## Implementation Example: About Metrics

```typescript
import { useCounter } from '../../hooks/useCounter';

export function MetricsSection() {
  const { count: projectsCount, elementRef: projectsRef } = useCounter({ end: 8, duration: 1000 });
  const { count: certCount, elementRef: certRef } = useCounter({ end: 1, duration: 1000 });
  const { count: yearsCount, elementRef: yearsRef } = useCounter({ end: 2, duration: 1000 });

  return (
    <section id="about" className="scroll-section min-h-screen flex items-center">
      <div className="grid grid-cols-3 gap-6 max-w-[1440px] mx-auto">
        <div ref={projectsRef} className="counter-animate text-center">
          <div className="text-5xl font-bold text-primary">{projectsCount}+</div>
          <p className="text-muted-foreground">Projects</p>
        </div>
        <div ref={certRef} className="counter-animate text-center">
          <div className="text-5xl font-bold text-primary">{certCount}</div>
          <p className="text-muted-foreground">Certificate</p>
        </div>
        <div ref={yearsRef} className="counter-animate text-center">
          <div className="text-5xl font-bold text-primary">{yearsCount}+</div>
          <p className="text-muted-foreground">Years</p>
        </div>
      </div>
    </section>
  );
}
```

---

## Implementation Example: Tab Controller

```typescript
import { useState } from 'react';

export function PortfolioTabs() {
  const [activeTab, setActiveTab] = useState('projects');
  const [tabOffset, setTabOffset] = useState(0);

  const tabs = [
    { id: 'projects', label: 'Projects' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'tech', label: 'Tech Stack' },
  ];

  const handleTabChange = (tabId: string, index: number) => {
    setActiveTab(tabId);
    setTabOffset(`${index * 150}px`);
  };

  return (
    <section id="portfolio" className="scroll-section min-h-screen">
      <div className="relative flex items-center gap-6 mb-12">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id, index)}
            className={`text-lg font-semibold transition-colors ${
              activeTab === tab.id ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            [{tab.label}]
          </button>
        ))}
        <div 
          className="tab-slider" 
          style={{ '--slider-offset': tabOffset } as any}
        />
      </div>

      {/* Tab Content */}
      <div className={activeTab === 'projects' ? 'card-enter' : 'card-exit'}>
        {/* Render projects */}
      </div>
    </section>
  );
}
```

---

## Key Animation Parameters

| Property | Value | Use Case |
|----------|-------|----------|
| `typing-speed` | 80ms | Text character animation |
| `deleting-speed` | 40ms | Character deletion |
| `pause-duration` | 1500ms | Text pause time |
| `section-transition` | 0.6s | Page exit/enter |
| `tab-transition` | 0.35s | Tab switch animation |
| `hover-scale` | 1.03 | Interactive elements |
| `stagger-delay` | 0.1s | Child element cascade |

---

## Performance Optimizations

1. **Hardware Acceleration:** All transforms use `transform` and `opacity` for GPU acceleration
2. **Intersection Observer:** Only animates visible elements
3. **RequestAnimationFrame:** Counters use RAF for smooth updates
4. **Smooth Scroll:** Native CSS `scroll-behavior: smooth`
5. **CSS Snap:** Native scroll snapping without JS overhead

---

## Browser Support

- ✅ Chrome/Edge (90+)
- ✅ Firefox (88+)
- ✅ Safari (15+)
- ✅ Mobile browsers (recent versions)
- ✅ Graceful degradation for older browsers

---

## Quick Start Checklist

- [x] Add scroll-container class to main layout
- [x] Add scroll-section class to sections
- [x] Import hooks where needed
- [x] Use TextRotator for dynamic text
- [x] Apply hover-lift to interactive elements
- [x] Set up useCounter for metrics
- [x] Implement tab controller with slider animation
- [x] Test on mobile and desktop
- [x] Monitor performance in DevTools
