[ROLE & TASK]
Act as an elite Creative Frontend Developer and Web Animation Architect. Generate a high-fidelity, production-ready implementation prompt to construct **Section 2 (About & Performance Matrix)** and **Section 3 (Portfolio Showcase)** on a single-page layout. Seamlessly extract, clone, and merge the exact UI components, spatial layout constraints, and visual assets from the reference files **image_bce708.png** and **image_bceb06.jpg** into an ultra-premium iOS glassmorphism magazine design system.

[DESIGN SYSTEM & LAYER STYLING]
- Palette ("Velvet Glass Void"): 
  * Background Canvas: Deep Midnight Black (#08080A) with dark, low-contrast ambient gradient orbs bleeding subtly underneath the section layouts.
  * iOS Frosted Glass Containers: Semi-translucent panels (`background: rgba(17, 17, 21, 0.65)` with `backdrop-filter: blur(32px); webkit-backdrop-filter: blur(32px);`).
  * Structural Boundaries: Crisp 1px inner-border frames using subtle linear gradients (`rgba(244, 124, 124, 0.4)` down to `rgba(255, 207, 225, 0.1)`) mimicking light catch on curved glass layers.
  * Core Highlights: Coral Rose Gold (#F47C7C) — dedicated exclusively to active interaction states, navigation markers, and tab selections.

---

[COMPONENT STRUCTURAL IMPLEMENTATION ENGINE]

### 1. THE EDITORIAL ABOUT & PERFORMANCE MATRIX (`#about`)
- Reveal Effect: As this section scrolls into view, the entire container triggers a hardware-accelerated **Kinetic Blur Reveal** shifting from `opacity: 0; filter: blur(20px); transform: translateY(40px);` to fully crisp and centered using a smooth `cubic-bezier(0.25, 1, 0.5, 1)` easing curve.
- Layout Funnel: Split into three distinct, staggered horizontal subsections:
  * ZONE 1: About Me (The Hook) -> Large serif text layout introduces "Jamie". Side-by-side presentation columns embed three smooth video loops as micro-illustrations ("Videos/aboutmeVideo03.mp4", "Videos/aboutmeVideo2.mp4", "Videos/aboutmeVideo1.mp4") displaying his multi-dimensional side (IT student at Pamantasan ng Lungsod ng Valenzuela, Volleyball player, Anime/K-Drama fan).
  * ZONE 2: High-Impact Performance Metrics (Exact Structural Clone of "image_bce708.png"):
    - Build a horizontal row of 3 beautifully proportioned glass card containers, mimicking the exact spatial composition, left-aligned circular vector outline icon badges, and giant right-aligned numeric font sizes from the reference image.
    - **Card 1 (Total Projects)**: Left side hosts a `< >` code symbol icon within a dark translucent circle. Right side features a giant animated typographic display counter counting up to **8** upon intersection reveal. Lower text labels read uppercase **TOTAL PROJECTS** with the subtext "Innovative web solutions crafted".
    - **Card 2 (Certificates)**: Left side hosts a ribbon/badge vector icon within a dark translucent circle. Right side features a giant typographic display counter showing **1**. Lower text labels read uppercase **CERTIFICATES** with the subtext "Professional skills validated".
    - **Card 3 (Years of Experience)**: Left side hosts a wireframe globe vector icon within a dark translucent circle. Right side features a giant typographic display counter showing **2**. Lower text labels read uppercase **YEARS OF EXPERIENCE** with the subtext "Continuous learning journey".
    - Hover Interaction: On cursor proximity, each card applies a micro-magnetic pull, brightens its 1px light-catch border, casts a soft Coral Rose neon backing glow, and fades a clean structural arrow indicator (`↗`) into full view in the lower right corner.
  * ZONE 3: Skills Matrix -> Title named to "Skills". Features a multi-tiered glass card structure grouping items seamlessly into functional lists:
    - **Programming & Development**: HTML, CSS, Java, C#
    - **Design & Prototyping**: Figma, Canva
    - **Technical Skills**: System Testing, Technical Documentation, Responsive Web Design
    - **Productivity Tools**: Microsoft Word, Microsoft Excel
    - **Soft Skills Grid** (Rendered directly underneath as minimal glowing badges): Communication, Teamwork and Collaboration, Problem-Solving, Adaptability, Time Management, Attention to Detail, Critical Thinking, Organizational Skills, Willingness to Learn, Responsibility.
  * ZONE 4: Background (The Chronicle) -> Chronological educational timeline stack tracking his formal milestones. Corrected Entry: Senior High School (SHS) block title updated to **HUMSS** (Humanities and Social Sciences), Year range configured to **2021-2022**, and School named clearly as **Lady of Lourdes Hospital and Colleges of Caybiga**.

### 2. THE INTERACTIVE PORTFOLIO SHOWCASE SCREEN (`#portfolio`)
- Layout Composition (Exact Cloned Architecture from "image_bceb06.jpg"):
  * Section Headers: Centered Section title "Portfolio Showcase" in bold violet/off-white shifting typography, with the subtitle "Explore my journey through projects, certifications, and technical expertise. Each section represents a milestone in my continuous learning path."
  * Master Sub-Navigation Toggle Bar: Position a full-width segment controller exactly like the one in "image_bceb06.jpg" containing three distinct, beautifully proportioned tabular selectors with vector micro-icons: `[ Projects ]`, `[ Certificates ]`, and `[ Tech Stack ]`. 
  * Tab Interaction: Clicking different selectors dynamically filter-swaps the underlying card array content below it using an elegant, hardware-accelerated crossfade fade animation effect.
- Exhibition Card Grid Layout (As displayed in image_bceb06.jpg): Render a balanced, premium 3-column masonry grid layout structure. Each card features a sharp rectangular asset container mask at the top, a crisp primary typography title, a descriptive text field block, and an explicit action row with custom links for `Live Demo ↗` and a micro-bordered button for `Details →`. Map James's production assets onto this structural display:
  * Card 1: "Project1.jpg" | "Profile Designing using Adobe Photoshop"
  * Card 2: "Project2.jpg" | "Registration Form using C#"
  * Card 3: "Project3.png" | "3D Logo Making using Blender."
  * Card 4: Video node placeholder "Videos/Project4.mp4" | "Character Designing and Animation using Adobe Character Animator"
  * Card 5: "Project5.jpg" | "Using Clipping Mask in a Photo"
  * Card 6: "Project6.jpg" | "Kape Mulat Poster"
  * Card 7: "Project7.jpg" | "Making a Product Package Dieline"
  * Card 8: "Project8.jpg" | "Product Designing"
- Interactive Micro-Animations: On hover, each individual portfolio card scales up smoothly (`scale(1.02)`), dampens back-layer opacity to isolate visual focus, and transitions the text link elements seamlessly into a solid Coral Rose color state.

[OUTPUT CONFIGURATION]
Generate the structural HTML boilerplate, tailwind/CSS configuration layout rules, and the tab filtering JS logic required to deploy these two specific sections.