# Kuwait Visa Validity Checker

A complete, SEO-optimized, AdSense-friendly website for checking Kuwait visa validity with comprehensive guides and tools.

## 🌟 Features

- **Visa Validity Checker Tool** - Check visa status, expiry date, and remaining days
- **Comprehensive Visa Guides** - Work visa, visit visa, residence permit, family visa
- **FAQ Section** - Answers to common Kuwait visa questions
- **SEO Optimized** - Kuwait-focused keywords, structured data, meta tags
- **AdSense Ready** - Proper ad placements and content structure
- **Bilingual Support** - English and Arabic content
- **Mobile Responsive** - Modern UI with Tailwind CSS
- **Legal Pages** - Privacy Policy, Terms of Service, Disclaimer

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Navigate to project directory
cd kuwait-visa-checker

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build for Production

```bash
# Build the project
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
kuwait-visa-checker/
├── public/
│   ├── robots.txt          # Search engine crawling rules
│   └── sitemap.xml         # XML sitemap for SEO
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with SEO metadata
│   │   ├── page.tsx        # Homepage
│   │   ├── visa-checker/   # Visa checker tool page
│   │   ├── visa-guide/     # Comprehensive visa guides
│   │   ├── faq/            # FAQ page with schema markup
│   │   ├── about/          # About page
│   │   ├── contact/        # Contact page
│   │   ├── privacy-policy/ # Privacy policy
│   │   ├── terms-of-service/
│   │   └── disclaimer/
│   ├── components/
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Footer.tsx      # Site footer
│   │   ├── AdBanner.tsx    # AdSense placeholder
│   │   ├── VisaCheckerTool.tsx
│   │   └── FAQAccordion.tsx
│   └── globals.css         # Global styles
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## 🔍 SEO Features

### Target Keywords (Kuwait-focused)
- Kuwait visa check / Kuwait visa validity
- Kuwait visa status / Kuwait visa expiry
- MOI Kuwait visa / Kuwait work visa
- Kuwait visit visa / Kuwait residence permit
- تأشيرة الكويت / صلاحية التأشيرة
- فحص التأشيرة الكويت / إقامة الكويت

### Implemented SEO Elements
- ✅ Meta titles and descriptions for all pages
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card meta tags
- ✅ Canonical URLs
- ✅ XML Sitemap
- ✅ robots.txt
- ✅ Schema.org structured data (WebApplication, FAQPage, Organization)
- ✅ Semantic HTML structure
- ✅ Mobile-responsive design
- ✅ Fast loading (Next.js optimized)

## 💰 AdSense Compliance

### Content Requirements Met
- ✅ Original, valuable content (2000+ words per main page)
- ✅ Clear navigation and site structure
- ✅ Privacy Policy page
- ✅ Terms of Service page
- ✅ Contact page
- ✅ About page
- ✅ No prohibited content
- ✅ Mobile-friendly design

### Ad Placement Guidelines
- Ad slots are marked with `AdBanner` component
- Proper spacing between content and ads
- No more than 3 ads per page view
- Ads clearly labeled as "Advertisement"

### To Enable AdSense
1. Replace `ca-pub-XXXXXXXXXXXXXXXX` in `layout.tsx` with your AdSense publisher ID
2. Update `AdBanner.tsx` component with actual ad unit codes
3. Follow Google AdSense policies

## 🎨 Customization

### Colors (Kuwait Theme)
- Primary Green: `#007A3D` (Kuwait flag)
- Accent Red: `#CE1126` (Kuwait flag)
- Neutral grays for text and backgrounds

### Fonts
- Inter (Latin text)
- Noto Sans Arabic (Arabic text)

## 📝 Important Notes

### Disclaimer
This is an informational website. The visa checker tool is for guidance only and should NOT be considered official verification. Users must verify visa status through the official Ministry of Interior Kuwait website (moi.gov.kw).

### Before Deployment
1. Update `metadataBase` URL in `layout.tsx`
2. Add your Google AdSense publisher ID
3. Add Google Analytics tracking code
4. Update contact email in Contact page
5. Generate and add favicon/logo images
6. Test all pages on mobile devices

## 🔗 Official Kuwait Resources

- [Ministry of Interior Kuwait](https://www.moi.gov.kw)
- [Kuwait e-Visa Portal](https://evisa.moi.gov.kw)
- [PACI Kuwait (Civil ID)](https://www.paci.gov.kw)

## 📄 License

This project is for educational and informational purposes.

---

Built with Next.js 14, React 18, Tailwind CSS, and Lucide Icons.
