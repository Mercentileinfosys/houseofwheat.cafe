# Deployment Instructions for House of Wheat Café Website

## Prerequisites
- Node.js 18 or higher installed
- Git installed (for version control)
- GitHub account (optional, for Vercel/Netlify)

## Local Development

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```
   - Open http://localhost:3000
   - Changes will auto-reload

3. **Build for Production**
   ```bash
   npm run build
   ```

## Deployment Options

### Option 1: Vercel (Recommended - Free & Easy)

**Why Vercel?**
- Built by Next.js creators
- Zero configuration needed
- Automatic SSL certificates
- Global CDN
- Free tier available

**Steps:**

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to https://vercel.com
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js settings
   - Click "Deploy"
   - Your site will be live in ~2 minutes!

3. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed
   - SSL automatically configured

### Option 2: Netlify

1. **Build the Project**
   ```bash
   npm run build
   ```

2. **Deploy via Netlify CLI**
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify deploy --prod
   ```

3. **Or Deploy via Netlify Dashboard**
   - Go to https://netlify.com
   - Drag and drop your `.next` folder
   - Configure build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`

### Option 3: Traditional Web Hosting (cPanel/DirectAdmin)

**Note:** Next.js requires Node.js runtime. Not all shared hosting supports this.

1. **Build Static Export** (if your host doesn't support Node.js)
   
   Update `next.config.js`:
   ```js
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true,
     },
   }
   ```

   Then build:
   ```bash
   npm run build
   ```
   
   Upload the `out` folder to your host's public_html directory.

2. **If your host supports Node.js:**
   - Upload all files to your server
   - SSH into your server
   - Run: `npm install && npm run build`
   - Start with: `npm start`
   - Use PM2 to keep it running: `pm2 start npm --name "wheat-cafe" -- start`

### Option 4: Self-Hosted VPS (AWS, DigitalOcean, etc.)

1. **Setup Server**
   ```bash
   # Update system
   sudo apt update && sudo apt upgrade -y
   
   # Install Node.js
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt install -y nodejs
   
   # Install PM2
   sudo npm install -g pm2
   ```

2. **Deploy Application**
   ```bash
   # Clone your repository
   git clone YOUR_REPO_URL
   cd "brown wheat cafe"
   
   # Install dependencies
   npm install
   
   # Build
   npm run build
   
   # Start with PM2
   pm2 start npm --name "wheat-cafe" -- start
   pm2 save
   pm2 startup
   ```

3. **Setup Nginx Reverse Proxy**
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

4. **Setup SSL with Let's Encrypt**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d your-domain.com
   ```

## Post-Deployment Checklist

- [ ] Website loads correctly on all devices
- [ ] All images are loading
- [ ] Navigation menu works
- [ ] Contact form is functional
- [ ] Google Maps is showing correct location
- [ ] All animations are smooth
- [ ] SEO meta tags are correct
- [ ] Favicon is displaying
- [ ] SSL certificate is active (HTTPS)
- [ ] Custom domain is connected (if applicable)

## Performance Optimization

After deployment, check your site performance:

1. **Google PageSpeed Insights**
   - Visit: https://pagespeed.web.dev
   - Test your site URL
   - Aim for 90+ score

2. **Lighthouse Audit**
   - Open Chrome DevTools
   - Go to Lighthouse tab
   - Run audit

## Troubleshooting

**Issue: Images not loading**
- Check image URLs in components
- Ensure Next.js Image component is properly configured

**Issue: Animations not working**
- Verify Framer Motion is installed: `npm list framer-motion`
- Check browser console for errors

**Issue: Build fails**
- Clear cache: `rm -rf .next node_modules`
- Reinstall: `npm install`
- Try build again: `npm run build`

## Support

For technical support:
- Email: houseofwheatcafe@gmail.com
- Phone: +60 3-9134 6668

## Updates

To update the website:
1. Make changes locally
2. Test with `npm run dev`
3. Commit changes: `git add . && git commit -m "Description"`
4. Push to GitHub: `git push`
5. Vercel/Netlify will auto-deploy

For manual deployments, repeat the build and deploy steps.
