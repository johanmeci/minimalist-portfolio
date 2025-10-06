# SEO Implementation Guide

## Overview
This portfolio has been optimized with comprehensive SEO best practices to maximize visibility in search engines and social media platforms.

## Implemented Features

### 1. **Meta Tags & SEO Component** (`src/components/SEO.astro`)
- **Primary Meta Tags**: Title, description, canonical URLs
- **Open Graph Tags**: Optimized for Facebook, LinkedIn, and other social platforms
- **Twitter Cards**: Large image cards for better Twitter sharing
- **Additional SEO**: Author, robots, language, keywords

### 2. **Structured Data (Schema.org)**
- JSON-LD format for Person schema
- Includes professional information, skills, education, and contact details
- Helps search engines understand your professional profile

### 3. **Sitemap Generation**
- Automatic sitemap generation via `@astrojs/sitemap`
- Located at: `https://johanmeneses.dev/sitemap-index.xml`
- Updates automatically on build

### 4. **Robots.txt**
- Allows all crawlers
- References sitemap location
- Polite crawl-delay setting

### 5. **Image Optimization**
- Descriptive alt text for all images
- Lazy loading for non-critical images
- Eager loading for hero image
- Width and height attributes to prevent layout shift

### 6. **Accessibility & Performance**
- Semantic HTML structure
- `rel="noopener noreferrer"` on external links
- Proper heading hierarchy
- Mobile-responsive viewport settings

## Configuration

### Update Site URL
In `astro.config.mjs`, update the site URL to your actual domain:
```javascript
site: 'https://your-actual-domain.com'
```

### Update robots.txt
In `public/robots.txt`, update the sitemap URL:
```
Sitemap: https://your-actual-domain.com/sitemap-index.xml
```

### Customize SEO Component
In `src/components/SEO.astro`, update:
- Default title and description
- Social media handles (Twitter)
- Structured data information
- Theme colors

## Usage

### Basic Usage (uses defaults)
```astro
<Layout />
```

### Custom Page SEO
```astro
<Layout 
  title="Custom Page Title"
  description="Custom page description"
  image="/custom-image.jpg"
/>
```

## Testing Your SEO

### 1. **Google Rich Results Test**
- URL: https://search.google.com/test/rich-results
- Test your structured data

### 2. **Facebook Sharing Debugger**
- URL: https://developers.facebook.com/tools/debug/
- Test Open Graph tags

### 3. **Twitter Card Validator**
- URL: https://cards-dev.twitter.com/validator
- Test Twitter Cards

### 4. **Lighthouse SEO Audit**
- Run in Chrome DevTools
- Should score 90+ for SEO

## Best Practices Implemented

✅ Unique, descriptive titles (50-60 characters)
✅ Compelling meta descriptions (150-160 characters)
✅ Canonical URLs to prevent duplicate content
✅ Structured data for rich snippets
✅ Mobile-friendly viewport
✅ Fast loading times with lazy loading
✅ Semantic HTML structure
✅ Descriptive alt text for images
✅ XML sitemap for search engines
✅ Robots.txt for crawler guidance
✅ Social media optimization
✅ HTTPS ready (configure on deployment)

## Next Steps

1. **Submit Sitemap to Search Engines**
   - Google Search Console: https://search.google.com/search-console
   - Bing Webmaster Tools: https://www.bing.com/webmasters

2. **Monitor Performance**
   - Set up Google Analytics
   - Track search rankings
   - Monitor Core Web Vitals

3. **Content Optimization**
   - Regularly update portfolio projects
   - Add blog posts if applicable
   - Keep skills and experience current

4. **Build Backlinks**
   - Share on professional networks
   - Contribute to open source
   - Write technical articles

## Technical Details

### Generated Files on Build
- `/sitemap-index.xml` - Main sitemap index
- `/sitemap-0.xml` - Page sitemap

### Meta Tags Priority
1. Page-specific props (highest priority)
2. SEO component defaults
3. Layout defaults (fallback)

### Image Requirements
- Profile image: 190x240px minimum
- OG image: 1200x630px recommended
- Format: JPG, PNG, or WebP

## Troubleshooting

**Issue**: Sitemap not generating
- **Solution**: Ensure `site` is configured in `astro.config.mjs`

**Issue**: Social media preview not showing
- **Solution**: Use absolute URLs for images, clear cache

**Issue**: Structured data errors
- **Solution**: Validate with Google Rich Results Test

## Resources

- [Astro SEO Guide](https://docs.astro.build/en/guides/integrations-guide/sitemap/)
- [Google SEO Starter Guide](https://developers.google.com/search/docs/beginner/seo-starter-guide)
- [Schema.org Person](https://schema.org/Person)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
