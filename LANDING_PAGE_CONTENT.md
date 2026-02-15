# DDTechnologies Landing Page – Full Content Inventory

**Purpose:** This document lists all text, media, and structural content on the DDTechnologies landing page for content review and improvement.

---

## 1. PAGE META & GLOBAL

| Element | Content |
|---------|---------|
| **Page Title** | DDTechnologies |
| **Favicon** | External image: `https://i.pinimg.com/originals/2a/d4/41/2ad4416d7426ae525b7b971245112492.jpg` |
| **Fonts** | Poppins (body), Roboto Flex (accent/italic) |
| **Accent Element (id="design")** | Uses Roboto Flex, italic – applied to: "design", "projects" |

---

## 2. NAVBAR

| Element | Content |
|---------|---------|
| **Brand/Logo** | DDTechnologies |
| **Menu** | Hamburger icon only (no menu items) |

---

## 3. HERO SECTION

**Headline (3 lines):**
- Line 1: **We are a digital**
- Line 2: **[video] design** and
- Line 3: **motion agency**

**Media:** Hero video (`https://cdn.cuberto.com/cb/home/hero/1.mp4`)

---

## 4. REEL SECTION

**Content:** Full-width video only, no text overlay  
**Media:** Showreel video (`https://cdn.cuberto.com/cb/showreel/2.mp4`)

---

## 5. SERVICES SECTION

**Description paragraph:**
> DDTechnologies is a leading digital product agency focused on branding, UI/UX design, mobile, and web development.

**CTA Button Text:**  
> How we work

**Media:** Summary video (`https://cdn.cuberto.com/cb/home/summary/1.mp4?3`)

---

## 6. FEATURED PROJECTS SECTION

**Section heading:**  
- **Featured**  
- **projects** (accent/italic styling)

**Project names (10 total, 2 columns):**

| Left column | Right column |
|------------|--------------|
| Punto Pago | Kelvin Zero |
| Riyadh | Magma |
| Qvino | Flipaclip |
| Zelt | Potion |
| Cisco | Ferrumpipe |

**Media:** Each project uses a video cover from Cuberto CDN (e.g. `puntopago/cover.mp4`, etc.)

---

## 7. PHILOSOPHY SECTION

**Section heading:**
- **Our**
- **philosophy** (accent/italic)

**Body copy (2 paragraphs):**

> In our team, developers work alongside designers, strategists and analysts. DDTechnologies doesn't do cookie-cutter solutions and we build products exactly as they were during the design phase, No short cuts or simplifications.

> We're driven by user-centered design that drives productivity and increases revenue. Our expertise and ingenuity are remarkable, yet we always strive to outdo and outperform our previous achievements.

**Media:** Philosophy video (`https://cdn.cuberto.com/cb/home/summary/2.mp4?3`)

---

## 8. FOLLOW US SECTION

**Repeating text:** Follow Us (with icons: Twitter, LinkedIn, GitHub, and one without icon)  
**Platforms:** Twitter / X, LinkedIn, GitHub (icons only – no links in this section)

---

## 9. SOCIAL MEDIA AND CONTACTS SECTION

**Section label:**  
> SOCIAL MEDIA AND CONTACTS

**Links (4):**

| Label | URL |
|-------|-----|
| Twitter | https://x.com/vikas_ipar?t=xdfw_bSJLdFN8dykcCSWZw&s=08 |
| LinkedIn | https://www.linkedin.com/in/vikas-ipar/ |
| GitHub | https://github.com/vikasipar |
| Portfolio | https://vikasipar.me |

**Note:** These links still reference vikas_ipar / vikas-ipar / vikasipar – likely need to be updated for DDTechnologies.

---

## 10. CONTACT DETAILS SECTION

| Type | Value |
|------|-------|
| **Email** | dhruval.ddtechnologies@gmail.com |
| **Phone** | +91 8238818899 |

Both are shown as pill-style, hoverable buttons.

---

## CONTENT NOTES & ISSUES FOR REVIEW

### Potential corrections
1. **Philosophy copy:** "No short cuts" → "No shortcuts" (one word is standard).
2. **Philosophy copy:** "No short cuts" may be intended to start a new sentence – consider punctuation (e.g. "phase. No shortcuts or simplifications.").
3. **Social links:** URLs point to vikas_ipar / vikas-ipar / vikasipar – confirm if these should be DDTechnologies or personal profiles.

### Consistency and branding
- **Brand name:** "DDTechnologies" is used for title, navbar, Services, Philosophy, and email domain.
- **Voice:** Professional, agency-focused; emphasizes custom work, design, development, and user-centered approach.

### Missing or unclear content
1. **Navbar menu:** Only a hamburger icon; no menu items or navigation links.
2. **Reel section:** No title, caption, or call-to-action – video only.
3. **Follow Us:** Platform names/icons shown but no click-through links in this block.
4. **Project cards:** Only project names; no short descriptions, case-study links, or categories.
5. **Meta:** No meta description or Open Graph tags for SEO/social sharing.
6. **Legal / Footer:** No privacy policy, terms, or copyright notice.

### Media summary
- **Hero:** 1 video  
- **Reel:** 1 video  
- **Services:** 1 video  
- **Philosophy:** 1 video  
- **Featured projects:** 1 header video + 10 project cover videos  
- **Source:** All from `https://cdn.cuberto.com/` (external CDN)

---

## PAGE SECTION ORDER

1. Navbar (fixed)
2. Hero
3. Reel
4. Services
5. Featured Projects
6. Philosophy
7. Follow Us
8. Social Media and Contacts
9. Contact Details

---

## FILE REFERENCE

| Content | File |
|---------|------|
| Meta, title | `index.html` |
| Navbar | `src/components/Navbar.tsx` |
| Hero | `src/components/Hero.tsx` |
| Reel | `src/components/Reel.tsx` |
| Services | `src/components/Services.tsx` |
| Projects | `src/components/Projects.tsx` |
| Philosophy | `src/components/Philosophy.tsx` |
| Follow Us | `src/components/FollowUs.tsx` |
| Social Links | `src/components/SocialMediaLinks.tsx` |
| Contact Details | `src/components/ContactDetails.tsx` |
