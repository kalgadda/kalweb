# Professional Portfolio Website

A beautiful, modern single-page portfolio website with dark/light mode support that automatically switches based on system preferences.

## Features

- ✨ Beautiful, responsive single-page design
- 🌓 Automatic dark/light mode switching based on system settings
- 🎨 Manual theme toggle with persistent preference
- 📱 Fully responsive for mobile, tablet, and desktop
- 🚀 Optimized performance
- 📄 PDF resume download capability
- 🖼️ Professional headshot integration

## Quick Start

1. **Add your headshot image:**
   - Replace `headshot.jpg` with your professional photo
   - Recommended size: 640x640px or larger (square format)
   - Supported formats: JPG, PNG

2. **Add your PDF resume:**
   - Add your resume as `resume.pdf` in the root directory

3. **Update contact email:**
   - In `index.html`, find `mailto:your.email@example.com`
   - Replace with your actual email address

## Deployment to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top-right corner
3. Select "New repository"
4. Name your repository (e.g., `portfolio` or `yourname.github.io`)
5. Make it **Public**
6. Click "Create repository"

### Step 2: Upload Your Files

**Option A: Using GitHub Web Interface**

1. On your repository page, click "uploading an existing file"
2. Drag and drop all files from this folder:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `headshot.jpg` (your photo)
   - `resume.pdf` (your resume)
   - `README.md`
3. Click "Commit changes"

**Option B: Using Git Command Line**

```bash
# Navigate to this folder
cd ani-portfolio-site

# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial portfolio website"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Select branch: `main` and folder: `/ (root)`
6. Click "Save"

Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

If you named your repo `yourname.github.io`, it will be at: `https://yourname.github.io/`

## Connecting Custom Domain from GoDaddy

### Step 1: Configure GitHub Pages for Custom Domain

1. In your GitHub repository, go to Settings → Pages
2. Under "Custom domain", enter your domain (e.g., `yourname.com`)
3. Click "Save"
4. Check "Enforce HTTPS" (wait for DNS to propagate first)

### Step 2: Configure DNS in GoDaddy

1. Log in to your [GoDaddy account](https://www.godaddy.com)
2. Go to "My Products" → "DNS" for your domain
3. Configure DNS records:

**For apex domain (yourname.com):**

Add 4 A records pointing to GitHub's IP addresses:
```
Type: A
Name: @
Value: 185.199.108.153
TTL: 600

Type: A
Name: @
Value: 185.199.109.153
TTL: 600

Type: A
Name: @
Value: 185.199.110.153
TTL: 600

Type: A
Name: @
Value: 185.199.111.153
TTL: 600
```

**For www subdomain:**

Add a CNAME record:
```
Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
TTL: 600
```

### Step 3: Wait for DNS Propagation

- DNS changes can take 24-48 hours to propagate
- Check propagation status at: https://dnschecker.org
- Once propagated, your site will be live at your custom domain!

### Step 4: Enable HTTPS

1. Return to GitHub Settings → Pages
2. Check the "Enforce HTTPS" checkbox
3. Wait a few minutes for the SSL certificate to be issued

## Customization

### Changing Colors

Edit `styles.css` in the `:root` section to change the color scheme:

```css
:root {
    --accent-primary: #2563eb;  /* Primary blue */
    --accent-secondary: #3b82f6; /* Secondary blue */
    /* ... other colors */
}
```

### Adding Content

All content is in `index.html`. Simply find the section you want to edit and update the text.

### Metrics

Your current metrics are displayed in the "Proven Impact" section:
- 10+ team members led
- $3M+ budget managed
- 40% incident reduction
- MTTR improvements (8m → 3m response, 120m → 37m resolution)
- Built SREOps, ProdOps, SREEngg programs from scratch

## Testing Locally

To test the website on your computer before deploying:

1. Simply open `index.html` in your web browser
2. Or use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Then visit: http://localhost:8000
```

## Troubleshooting

### GitHub Pages not loading
- Check that the repository is public
- Verify GitHub Pages is enabled in Settings
- Wait 5-10 minutes after first deployment

### Custom domain not working
- Verify DNS records are correct in GoDaddy
- Check DNS propagation at dnschecker.org
- Make sure you saved the custom domain in GitHub Pages settings

### Images not showing
- Ensure `headshot.jpg` is in the same folder as `index.html`
- Check file name matches exactly (case-sensitive)
- Verify image is not corrupted

### Resume download not working
- Ensure `resume.pdf` is in the same folder as `index.html`
- Check file name matches exactly

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

This template is free to use for personal and commercial purposes.

## Support

For questions or issues:
1. Check the troubleshooting section above
2. Review GitHub Pages documentation: https://docs.github.com/pages
3. Review GoDaddy DNS documentation: https://www.godaddy.com/help/manage-dns-records-680

---

Built with ❤️ for showcasing professional excellence in Quality Engineering, Performance Testing, and Site Reliability Engineering.
