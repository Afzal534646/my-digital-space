# তোমার Portfolio তে কি কি Change করতে হবে - Checklist

এই ফাইল টা তোমার জন্য বানানো, যাতে সহজে বুঝতে পারো কোথায় কি change করবে।

## 1. BASIC INFO (index.html এর ভিতরে)

### Line 8-9 : Page Title
```html
<title>Afzal | Creative Graphic Designer...</title>
```
-> তোমার নাম দাও

### Line 16-24 : Logo
```html
<span class="logo-icon">A</span>
<span class="logo-text">Afzal<span...
```
-> `A` আর `Afzal` তোমার নামের প্রথম অক্ষর ও নাম দাও

### Line 36-45 : Hero Section
- `HELLO, I'M AFZAL` -> তোমার নাম
- `Creative Graphic Designer & Digital Service Provider` -> তোমার title
- নিচের description change করো

### Line 76-77 : Hero Image
```html
<img src="https://images.unsplash.com/photo-...">
```
-> তোমার নিজের ছবির লিংক দাও। চাইলে `images/` ফোল্ডারে ছবি রেখে `images/my-photo.jpg` দিতে পারো

### Line 132-168 : About Section
- তোমার About লেখা
- Name, Location, Profession
- Stats: 100+ Projects, 50+ Clients etc - তোমার real সংখ্যা দাও

### Line 362-392 : Contact Section
- Email: `afzal@example.com` -> তোমার email
- Phone: `+880 10XX-XXXXXX` -> তোমার ফোন
- Location
- Social Links (Facebook, Instagram, Behance etc)

---

## 2. PORTFOLIO IMAGES (index.html)

Line 258-330 এর মধ্যে 6 টা portfolio item আছে।
প্রতিটার:
- `img src="..."` -> তোমার কাজের ছবি
- `h4` -> কাজের নাম
- `span` -> category

চাইলে `images/portfolio/` ফোল্ডার বানিয়ে সেখানে ছবি রাখো।

---

## 3. SERVICES

যদি তোমার service আলাদা হয়, `My Services` section এ card গুলো edit করো।

---

## 4. COLORS & DESIGN (style.css)

উপরে `:root` এ color আছে:
```css
--primary:#7c3aed;  /* main purple color */
--secondary:#06b6d4; /* blue accent */
```
চাইলে color change করতে পারো।

---

## 5. কিভাবে Live করবে?

এটা GitHub Pages এ already live হবে যদি তুমি main branch এ push করো।
Settings > Pages > Source: main branch / root

---

## তোমার পরবর্তী Step:

আমাকে বলো:
1. তোমার পুরো নাম কি দিবো?
2. তোমার Profession কি? (Graphic Designer নাকি অন্য কিছু?)
3. তোমার Email / Phone / Location?
4. তোমার ছবি আছে? থাকলে upload করো, আমি লাগিয়ে দিবো
5. Portfolio তে তোমার real কাজের ছবি আছে?

আমি সাথে সাথে সব update করে দিবো!
