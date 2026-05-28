[ROLE & TASK]
Act as an elite UI/UX Design Lead & Design Systems Architect. Generate a high-fidelity, premium responsive website design system (Desktop 1440px / Mobile 390px) for "James Agus" (Jamie). Retain 100% of his core bio data and asset links, completely overhauling them into a high-fashion, premium iOS glassmorphism magazine aesthetic.

[DESIGN SYSTEM & GLASSMORPHISM AESTHETIC]
- Philosophy: Premium dark fashion editorial magazine meets clean iOS frosted glass layering. The interface relies heavily on depth, high blur values, smooth liquid-style transitions, and razor-sharp border light reflections.
- Palette ("Velvet Glass Void"): 
  * Background Canvas: Deep Midnight Black (#08080A) with dark, low-contrast ambient gradient orbs bleeding subtly underneath layout grids.
  * iOS Frosted Glass Containers: Semi-translucent panels (`background: rgba(17, 17, 21, 0.65)` with `backdrop-filter: blur(32px); webkit-backdrop-filter: blur(32px);`).
  * Structural Boundaries: Crisp 1px inner-border frames using subtle linear gradients (`rgba(244, 124, 124, 0.4)` down to `rgba(255, 207, 225, 0.1)`) mimicking light catch on modern curved glass layers.
  * Core Highlights: Coral Rose Gold (#F47C7C) — dedicated exclusively to micro-lines, active interaction states, navigation markers, and chip selections.
  * Secondary Text / Typography Accents: Soft Blush Pink Tint (#FFCFE1).
  * Massive Headings / Layout Numbers: High-Contrast Off-White (#F3F4F6).
- Typography System:
  * Display Scale: Ultra-bold, dramatic Serif (Ogg, Editorial New, or Playfair Display) with tight tracking and heavy scale shifts.
  * Sub-headers/Metadata: Razor-sharp geometric Monospace (JetBrains Mono) in clean, widely-spaced all-caps.
  * Body Copy: Minimal, hyper-legible Sans-Serif (PP Neue Montreal or Inter) at 15px/1.6em.

[MOTION & INTERACTION FRAMEWORK]
- Page Transitions: Implement an ultra-smooth, premium slide-and-fade transition ("Liquid Page Transition") between screens, using an elegant cubic-bezier curve (e.g., `cubic-bezier(0.25, 1, 0.5, 1)`) with subtle glass surface reflections tracking across the viewport as the tab shifts.
- Hover States: All glass containers feature a continuous magnetic snap effect on mouse proximity, brightening the 1px light-catch border to full opacity and casting an ultra-soft Coral Rose underglow (`box-shadow: 0 20px 40px rgba(244, 124, 124, 0.1)`).
- Active States: Navigation items and links utilize an expanding geometric accent bar that draws natively out from the center text point.

---

[GLOBAL ARCHITECTURE & COMPONENTS]

1. STICKY GLASS HEADER & BALANCED FOOTER
- Top Nav Bar: Floating, rounded iOS capsule structural bar built with the 32px frosted glass style and 1px light-catch border. Left: Serif text branding "JAMES AGUS — CHRONICLES". Right: Text-only links [HOME, ABOUT, PROJECTS, CONTACT] showing seamless Coral Rose tint highlights on hover. Includes an elegant, hidden iOS mobile navigation drawer button.
- Global Editorial Footer: Bounded inside a grounded glass layer block. 
  * Col 1: Clean text links (Home, About Me, Projects, Contact Me). 
  * Col 2: Monospace text block showing phone number (09610603914), address string (53 Sebastian Compound, Bagbaguin Valenzuela City, Philippines), and unified vector social icons (Facebook, Instagram, Telegram). 
  * Col 3: Brand frame holding primary asset window ("Images/LOGO2.jpg"). 
  * Bottom Strip: Perfect horizontal rules bounding a centered copyright micro-line: "COPYRIGHT 2025 | ALL RIGHTS RESERVED".

2. THE FIXED SYSTEM THEME DOCK (BUG FIXED)
- Execution: Replace old, broken theme scripts with a pristine, pixel-perfect sliding capsule toggle dock floating fixed near the viewport margin.
- State Visuals: 
  * Dark Mode State: Active capsule toggle position glowing with a soft, translucent micro-border, featuring a Coral Rose crescent moon icon.
  * Light Mode State: A clean system layout preview showing how the UI cleanly flips background surfaces to an off-white glass layer (`rgba(245, 245, 247, 0.7)`) with high-contrast dark ink text (#08080A), beautifully adapting Apple's operating system logic while maintaining the magazine layout structure.

3. ADVANCED ACTIONS CONCIERGE CHATBOT HUB ("ai-assistant")
- Entry State: A minimalist circular glass badge floating on the lower edge, hosting a clean robot vector icon and a subtle callout bubble stating "Chat with my AI".
- Expanded Interface Panel ("ai-chat-interface"): Slides open into an ultra-premium, tall iOS-style floating sidebar container block featuring heavy blurring (`blur(40px)`) and glossy glass styling.
- Interactive Conditional Rules:
  * Dedicated Quick-Action Chips: Build three functional, prominent pill buttons: ["View Skills", "Latest Projects", "Contact James"].
  * Click Action "Contact James": Instantly prompts and formats James’s exact contact card inside the message stream dynamically (Phone, Email, Address, and quick-copy links).
  * Click Action "View Skills": Instantly triggers a smooth page transition anchor right into the Skills zone on the About page.
  * Click Action "Latest Projects": Performs a direct fluid jump navigation into the Projects section dashboard.
  * Input Dock: A borderless frosted glass text field containing an explicit, accent-colored paper-plane icon action key.

---

[PAGE-SPECIFIC MOCKUPS & COHESIVE GRIDS]

1. THE IMMERSIVE CAPTIVATING HOME VIEW (index.html)
- Backdrop Engine: Deep canvas space viewport rendering an interactive, responsive Three.js 3D particle shader cloud loop (particle size: 0.2, colors: #FC9F5B / #F47C7C, blending: Additive). The particle cloud shifts organic velocity dynamically based on mouse vectors and scroll depth.
- Interactivity Architecture: The background moves fluidly against the foreground layout elements. Users can hover over the interactive layers to manipulate ambient neon light orbs floating beneath the content panels.
- Feature Cleanups: Ensure the old typing-effect border lines, the AR Portfolio trigger button (`arTrigger`), and the physical microphone voice button component are fully deleted from the layer tree.
- Editorial Split Grid Layout:
  * Left Panel: Asymmetric, floating frosted glass frame block showcasing the headshot asset "Profile.jpg" with a dual-line light-catch border treatment.
  * Right Panel: Massive display scale serif heading text "Hola, I'm James Agus".
  * Smooth Text Animation Effect: Modern "Liquid Fade & Drift-Up" transition layer stack for title text swaps. The text rotator module ("text-rotator") cycles seamlessly through titles: ["Graphic Designer", "Web Developer", "3D Artist", "UI/UX Designer"].
  * Main Bio Narrative: "Hello, I'm James Agus, an aspiring creative professional with a passion for blending technology and art. I specialize in creating visually compelling designs that tell stories and solve problems."
- CTA Layout: A clean, direct premium group containing a primary action button labeled "Hire Now" (solid filled block with rich Coral Rose background) and a secondary button "Watch My Demo Reel" (housed inside an outline frosted glass tag ring with play icon asset, pointing to "Videos/DemoReels.mp4").

2. THE NEW REVOLUTIONARY EDITORIAL ABOUT EXPERIENCE (about.html)
- Layout Overhaul: Completely eliminate the 20-image photo gallery masonry wall and old mixed-media grid sections. Replace them with an elegant, downward-scrolling single-page editorial funnel crafted from nested iOS-style glass layers split into 5 distinct zones:
  * ZONE 1: About Me (The Hook) -> Large serif text layout introduces "Jamie". Side-by-side presentation columns embed three smooth video loops as micro-illustrations ("Videos/aboutmeVideo03.mp4", "Videos/aboutmeVideo2.mp4", "Videos/aboutmeVideo1.mp4") displaying his multi-dimensional side (IT student at Pamantasan ng Lungsod ng Valenzuela, Volleyball player, Anime/K-Drama fan).
  * ZONE 2: Skills Matrix -> Title renamed to "Skills". Features a multi-tiered glass card structure grouping items seamlessly into functional lists:
    - **Programming & Development**: HTML, CSS, Java, C#
    - **Design & Prototyping**: Figma, Canva
    - **Technical Skills**: System Testing, Technical Documentation, Responsive Web Design
    - **Productivity Tools**: Microsoft Word, Microsoft Excel
    - **Soft Skills Grid** (Rendered directly underneath as minimal glowing badges): Communication, Teamwork and Collaboration, Problem-Solving, Adaptability, Time Management, Attention to Detail, Critical Thinking, Organizational Skills, Willingness to Learn, Responsibility.
  * ZONE 3: Background (The Chronicle) -> Chronological educational timeline stack tracking his formal milestones. Corrected Entry: Senior High School (SHS) block title updated to **HUMSS** (Humanities and Social Sciences), Year range configured to **2021-2022**, and School named clearly as **Lady of Lourdes Hospital and Colleges of Caybiga**.
  * ZONE 4: Goals -> A beautiful two-column statement layout layer defining his future design aspirations to create highly immersive web architectures, interactive UI mockups, and software systems that seamlessly fuse engineering with beautiful aesthetics.
  * ZONE 5: CTA -> A massive, full-bleed glass banner panel reading "Let's Shape the Digital Canvas Together." driving users instantly toward his contact form channels.

3. KINETIC PRODUCTION ARCHIVE / PROJECTS (projects.html)
- Section Intro: Massive display header "02 / SELECTED WORKS" set in tight serif typography.
- Enhanced Kinetic Carousel: Widescreen aspect-ratio carousel deck displaying project images: "Project1.jpg", "Project2.jpg", "Project3.png", "Project5.jpg", "Project6.jpg", "Project7.jpg", "Project8.jpg". 
  * Carousel Interaction: Incorporate a deep parallax spatial effect on transition. Images float inside layered glass viewports that shift independent 3D viewing depths when navigated, featuring soft motion blur transitions, snap indicators, and sleek corner arrow toggles.
- Exhibition Grid: A balanced, technical 8-card structural layout. Each card details an asset container, a monospace numeric index counter (e.g., WORK_01), and prominent typography titles:
  * P1: "Project1.jpg" | "Profile Designing using Adobe Photoshop"
  * P2: "Project2.jpg" | "Registration Form using C#"
  * P3: "Project3.png" | "3D Logo Making using Blender."
  * P4: Video node placeholder "Videos/Project4.mp4" | "Character Designing and Animation using Adobe Character Animator"
  * P5: "Project5.jpg" | "Using Clipping Mask in a Photo"
  * P6: "Project6.jpg" | "Kape Mulat Poster"
  * P7: "Project7.jpg" | "Making a Product Package Dieline"
  * P8: "Project8.jpg" | "Product Designing"

4. FUNCTIONAL DISPATCHES / CONTACT VIEW (contact.html)
- Section Intro: Massive display header "03 / DISPATCHES".
- Balanced Split Layout:
  * Left Column: Monospace data text layer string detailing: Phone: `09610603914` | Mail: `valmadridjamie@gmail.com` | Address: `53 Sebastian Compound, Bagbaguin, Valenzuela City, Philippines`. 
  * Embedded Map Module: A beautiful dedicated glass frame completely nesting an active, interactive custom dark-skinned monochrome embedded map widget under the clean label "Find Me Here".
  * Right Column (Functional Contact Form): A high-fidelity input interface engine. Input blocks for [Name], [Email], and [Message] are structured as clean, minimalist single-line rule borders over glass backing. The borders seamlessly bloom into solid Coral Rose accents when targeted by user input focus. 
  * Active Form Endpoint: The form's system controller links directly to an action listener redirect module endpoint configured to securely send input details directly to `valmadridjamie@gmail.com` via mail API architecture upon hitting the solid premium [Send Message] block button asset.

[OUTPUT CONFIGURATION]
Generate the final layout frame architecture, parent-child component constraints, responsive canvas configurations, and alignment steps to model this exact user interface manually inside Figma.