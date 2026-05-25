# IMPORTANT: Setup Guide for Images

## 📁 Moving Your Images

Your company has two image files:
- `logo.png` - ROBOTEC logo
- `Home_page-_IMG.png` - Hero/robot image

### Step 1: Copy Images to Public Folder

**Windows**
```bash
copy logo.png robotec-website\client\public\
copy Home_page-_IMG.png robotec-website\client\public\home-page-img.png
```

**Mac/Linux**
```bash
cp logo.png robotec-website/client/public/
cp Home_page-_IMG.png robotec-website/client/public/home-page-img.png
```

### Step 2: File Organization
After copying, your public folder should look like:
```
client/
└── public/
    ├── index.html
    ├── logo.png           ← Your logo
    └── home-page-img.png  ← Your hero image
```

## 🖼️ How Images Are Used

### Logo
- **Location in code**: `Header.js`
- **Reference**: `<img src="/logo.png" alt="ROBOTEC Logo" />`
- **Dimensions**: Automatically scaled to fit (height: 50px on desktop, 40px on mobile)
- **Displayed in**: Header, Footer

### Hero Image
- **Location in code**: `HeroSection.js`
- **Reference**: `<img src="/home-page-img.png" alt="AI Robot" />`
- **Dimensions**: Responsive, scales with container
- **Displayed in**: Hero section of home page
- **Note**: File renamed from `Home_page-_IMG.png` to `home-page-img.png` (lowercase, no spaces)

## ✅ Verification Checklist

After moving images:

1. **Start the application**
   ```bash
   npm run dev
   ```

2. **Check in Browser**
   - Open http://localhost:3000
   - Logo should appear in header
   - Hero image should appear in hero section
   - Both should be clearly visible

3. **If Images Don't Show**
   - Check file paths in public folder
   - Verify file names match (case-sensitive on Linux/Mac)
   - Check browser console for 404 errors
   - Clear browser cache and reload

## 🎨 Optional: Image Optimization

### Compress Logo
```bash
# Using online tool or ImageMagick:
convert logo.png -quality 85 logo-optimized.png
```

### Optimize Hero Image
```bash
# Resize if too large
convert Home_page-_IMG.png -resize 1000x1000 home-page-img.png
```

## 📱 Image Responsive Behavior

- **Desktop**: Full size, max 500px for hero image
- **Tablet**: Scales down proportionally
- **Mobile**: Takes full width with proper aspect ratio

## 🔗 Reference These Files

When needed to reference images in new components:
```javascript
// Logo
<img src="/logo.png" alt="ROBOTEC" />

// Hero Image
<img src="/home-page-img.png" alt="Hero" />
```

## 🚨 Common Issues

| Issue | Solution |
|-------|----------|
| Logo not showing | Check `client/public/logo.png` exists |
| Hero image broken | Verify file is `home-page-img.png` (lowercase) |
| Images blurry | Image might be too small, try higher resolution |
| Images not responsive | CSS is already responsive, check image size |

## 💡 Pro Tips

1. **Always use lowercase filenames** for web compatibility
2. **Keep images in public folder**, not src folder
3. **Optimize image sizes** before deployment
4. **Use descriptive alt text** for accessibility
5. **Consider WebP format** for better compression

---

After setting up images, you're ready to customize the website! 🎉
