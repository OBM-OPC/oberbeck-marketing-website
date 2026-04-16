# GitHub OAuth Setup for Oberbeck Marketing CMS

## ✅ Current Setup
- GitHub OAuth app created with client_id: `Ov23lijnapdE3q73H1by`
- CMS config updated to use Netlify OAuth proxy
- Site rebuilt and ready to deploy

## 🔐 GitHub OAuth App Configuration

The GitHub OAuth app must be configured with the correct callback URL:

1. Go to **GitHub → Settings → Developer Settings → OAuth Apps**
2. Find **"Oberbeck Marketing CMS"**
3. Update the **Authorization callback URL** to:
   ```
   https://api.netlify.com/auth/callback
   ```

**Important:** The callback URL must exactly match what's used in the CMS. Since Decap CMS uses Netlify's OAuth endpoint (`https://api.netlify.com/auth`), the callback needs to be set to the Netlify callback URL.

## 📦 Deployment

The `dist/` folder is ready. Upload it to your FTP server at `w01e5344.kasserver.com`.

## 🧪 Testing

1. Visit: https://oberbeck-marketing.de/admin/
2. Click "Login with GitHub"
3. Authorize the app
4. You'll be redirected back to the CMS

## 🔧 How It Works

- Main site: Hosted on your FTP server (`oberbeck-marketing.de`)
- OAuth flow: Uses Netlify's OAuth endpoint (`api.netlify.com`)
- The GitHub OAuth app callback goes to Netlify, which then redirects back to your site

This setup works because Decap CMS has built-in support for Netlify's OAuth service, which acts as a proxy for GitHub authentication.

## 🚨 Troubleshooting

If authentication fails:
1. Check that the GitHub OAuth callback URL is set to `https://api.netlify.com/auth/callback`
2. Ensure your GitHub account has write access to `OBM-OPC/oberbeck-marketing-website`
3. Clear browser cache and try again

## 📁 Files

- `/public/admin/config.yml` - CMS configuration with GitHub backend
- `/dist/` - Built site ready for FTP upload