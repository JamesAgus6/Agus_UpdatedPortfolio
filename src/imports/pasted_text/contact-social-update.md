[ROLE & TASK]
Act as an elite Creative Frontend Developer and Web Experience Architect. Update the comprehensive single-page website prompt to completely overhaul the Contact and Social connection sections. You will swap out the standard minimal contact form shown in "image_c84072.png" with an interactive, fully functioning **Glassmorphism Guestbook & Comment Engine** inspired by "image_c83d83.png". Additionally, you will replace the simple typography contact card from "image_c8448c.png" with a bento-style **Social Network Matrix** inspired by "image_c8446f.png", specifically customized to match James's personal social targets.

[DESIGN SYSTEM & STYLE INTERPRETATION]
- Palette Consistency: All new modules must strictly adapt the established "Velvet Glass Void" aesthetic.
  * Container Backgrounds: Semi-translucent frosted glass (`rgba(17, 17, 21, 0.65)` with `backdrop-filter: blur(32px);`).
  * Structural Rules: Crisp 1px inner-border frames using linear gradients catch lines (`rgba(244, 124, 124, 0.4)` down to `rgba(255, 207, 225, 0.1)`).
  * Accent Brand Glows: Interactive elements, state borders, and button components utilize a vibrant Coral Rose Gold (#F47C7C).

---

[CONTACT PAGE PRODUCTION OVERHAUL (`#contact`)]

### 1. REVISION A: THE GLASSMORPHISM ENGAGEMENT & COMMENT ENGINE (REPLACING "IMAGE_C84072.PNG" WITH "IMAGE_C83D83.PNG")
- Component Structure: Reconstruct the layout from "image_c83d83.png" into a premium, frosted glass engagement widget module.
  * Section Header: Left-aligned horizontal grouping featuring a sleek conversation bubble icon next to the title text **Comments (222)** rendered in high-contrast off-white display typography.
  * Form Fields:
    - **Name Input**: A minimalist frosted card box overlay captioned with an asterisk marker (`Name *`). The field contains the placeholder text "Enter your name".
    - **Message Input**: A larger, multi-line container box captioned with an asterisk marker (`Message *`). The field contains the placeholder text "Write your message here...".
    - **Profile Photo Upload (Optional)**: A dedicated drag-and-drop or file selector container block matching the dotted border framework from the reference image. Features an uppercase file selection icon next to the action text "Choose Profile Photo" with a constraint subtitle reading "Max file size: 5MB".
  * Primary Action Button: Replace the purple theme button from the source image with a full-width solid Coral Rose Gold (#F47C7C) action button. The block hosts a centralized paper-plane vector icon followed by the uppercase text **Post Comment**.
  * Back-End Mail Integration (Functional Redirect Engine): When a visitor interacts with this block, completes the fields, and clicks "Post Comment", a dual-action script triggers:
    1. It appends the comment locally to the underlying scrollable thread stream layout.
    2. It triggers a secure serverless form-handler redirect running an API action listener to forward the sender's input text details instantly to James’s email address: `valmadridjamie@gmail.com`.
  * Live Thread Feed Stream: Positioned directly beneath the action button, render a vertically scrollable, fine-bordered comment stack area mimicking the live examples in "image_c83d83.png":
    - **Pinned Comment Card**: Highlighted with an anchor/pin icon badge. Shows James's avatar asset, a custom tag reading `ekizr [Admin]`, a timestamp string, and the welcome message: *"Thank you for visiting! If you have any questions, feel free to DM me on IG @ekizr_"*.
    - **User Comment Blocks**: Layered frosted cards displaying generic visitor entries, custom placeholder user icons, and dynamic relative timestamps (e.g., "1d ago", "3d ago") over a subtle dark background rule line.

### 2. REVISION B: THE BENTO SOCIAL NETWORK MATRIX (REPLACING "IMAGE_C8448C.PNG" WITH "IMAGE_C8446F.PNG")
- Component Structure: Replace the typography-only contact details view card with a modern asymmetric multi-card grid system inspired directly by the bento block design seen in "image_c8446f.png".
  * Section Title Grouping: An elegant linear accent highlight marker running horizontally right into the main bold header: **Connect With Me**.
  * Grid Card Layout Rules (Customized Hierarchy):
    - **Card 1: LinkedIn (Featured Full-Width Row)**: A large, top-anchored prominent glass rectangle card holding a bold vector LinkedIn brand icon. It features crisp display typography reading **Let's Connect** with the subtext subtitle line reading "on LinkedIn".
    - **Card 2: Instagram (Left Grid Column)**: A square frosted container box hosting an Instagram icon background, with the bold header name **Instagram** and account label text `@ekizr_`.
    - **Card 3: Facebook (Right Grid Column - Replaced YouTube)**: Swap the YouTube module shown in the source image with a Facebook connection block. The card hosts a sleek Facebook branding vector icon, with the bold header name **Facebook** and a clean text link to his profile channel.
    - **Card 4: GitHub (Lower Left Grid Column)**: A square frosted container box hosting a minimalist GitHub vector brand icon, with the bold header name **Github** and account label text `@EkiZR`.
    - **Modifications**: Ensure that the TikTok block from the original reference layout image is completely deleted and removed from the active grid layer stack.
  * Hover Interactive Effects: Each independent social media network block responds to user cursor proximity with a magnetic alignment micro-tilt, shifts its container border gradient to full opacity, and scales up smoothly (`scale(1.03)`) to provide a highly interactive, responsive feedback experience.

[OUTPUT CONFIGURATION]
Generate the revised functional HTML layout blocks, Tailwind CSS container styling configurations, and the form submission listener script blocks required to embed this complete guestbook comment module and modified social network grid.