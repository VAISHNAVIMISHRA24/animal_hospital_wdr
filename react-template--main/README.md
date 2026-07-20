# Vet & Pet Care Landing Page (React)

A responsive React recreation of the veterinarian/pet-care landing page, split into one component per section.

## Structure

```
src/
  components/
    Navbar.jsx           + Navbar.css
    Hero.jsx              + Hero.css        (yellow hero, headline + dog photo)
    AboutSection.jsx      + AboutSection.css (vet + dog, video thumbnail)
    ServicesSection.jsx   + ServicesSection.css (3-card service grid)
    CTASection.jsx        + CTASection.css  (bottom video + text block)
  assets/                 <- put your images here (see below)
  App.jsx / App.css
  index.js / index.css
public/
  index.html
package.json
```

Each section is a standalone component with its own CSS file, so you can reorder, reuse, or restyle a section without touching the others.

## Setup

```bash
npm install
npm start
```

Opens at http://localhost:3000. Fully responsive: 3-column grid collapses to 2 then 1 column, nav becomes a hamburger menu below 768px, and hero/about/CTA rows stack vertically below 900px.

## Images

The components import images from `src/assets/`. Add your own files with these names (or edit the `import` paths in each component):

| File | Used in | Suggested size |
|---|---|---|
| `dog-hero.jpg` | Hero.jsx | 420×500 |
| `vet-with-dog.jpg` | AboutSection.jsx | 480×400 |
| `service-1.jpg`, `service-2.jpg`, `service-3.jpg` | ServicesSection.jsx | 400×300 each |
| `baby-with-dog.jpg` | CTASection.jsx | 480×400 |

## Customizing

- Brand color (`#f5b301`), teal accent (`#1bafc4`), and dark text (`#1f2a44`) are repeated across each component's CSS — swap them there to re-theme.
- Copy currently uses Lorem ipsum placeholders matching the original mock — replace with real content in each `.jsx` file.
