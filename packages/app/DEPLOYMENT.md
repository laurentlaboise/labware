# Deploying Labware App to Vercel

## Quick Deploy (5 Minutes)

### Step 1: Install Vercel CLI (Optional)
```bash
npm install -g vercel
```

### Step 2: Deploy via Vercel Dashboard (Recommended)

1. **Go to Vercel:**
   - Visit: https://vercel.com
   - Sign up or login with your GitHub account

2. **Import Project:**
   - Click "Add New..." → "Project"
   - Select "Import Git Repository"
   - Choose `laurentlaboise/labware`
   - Authorize Vercel to access your repository

3. **Configure Project:**
   ```
   Framework Preset: Next.js
   Root Directory: packages/app
   Build Command: npm run build (auto-detected)
   Output Directory: .next (auto-detected)
   Install Command: npm install (auto-detected)
   ```

4. **Environment Variables:**
   Add these in the Vercel dashboard:
   ```
   NEXT_PUBLIC_API_URL = https://api.labware.icu
   NEXT_PUBLIC_APP_URL = https://app.labware.icu
   ```

5. **Deploy:**
   - Click "Deploy"
   - Wait 2-3 minutes for build to complete

6. **Add Custom Domain:**
   - Go to Project Settings → Domains
   - Add: `app.labware.icu`
   - Configure DNS (see DNS Configuration below)

---

## Alternative: Deploy via CLI

```bash
# From packages/app directory
cd packages/app

# Login to Vercel
vercel login

# Deploy to production
vercel --prod

# Follow prompts:
# - Link to existing project or create new
# - Confirm settings
# - Deploy
```

---

## DNS Configuration

After deploying, you need to point `app.labware.icu` to Vercel:

### If Using Cloudflare/Other DNS:

Add a **CNAME record**:
```
Type: CNAME
Name: app
Target: cname.vercel-dns.com
Proxy: DNS only (if Cloudflare)
TTL: Auto
```

### If Using Domain Registrar DNS:

Add a **CNAME record**:
```
Host: app
Points to: cname.vercel-dns.com
TTL: 3600
```

**Verification Time:** 5 minutes to 24 hours depending on DNS propagation

---

## Vercel Build Settings

The following are automatically detected by Vercel:

- **Framework:** Next.js 14
- **Node Version:** 18.x (auto-detected)
- **Package Manager:** npm
- **Build Output:** `.next` directory

### Custom Build Configuration (vercel.json)

Already configured in `packages/app/vercel.json`:

```json
{
  "buildCommand": "cd ../.. && npm install && cd packages/app && npm run build",
  "framework": "nextjs",
  "outputDirectory": ".next"
}
```

This handles the monorepo workspace setup automatically.

---

## Environment Variables

### Required (Add in Vercel Dashboard):

```bash
NEXT_PUBLIC_API_URL=https://api.labware.icu
NEXT_PUBLIC_APP_URL=https://app.labware.icu
```

### Optional (For Future Backend Integration):

```bash
DATABASE_URL=postgresql://...
JWT_SECRET=your-secret-key-here
REDIS_URL=redis://...
```

---

## Post-Deployment Checklist

After deployment completes:

- [ ] Visit `https://your-project.vercel.app` (temporary URL)
- [ ] Verify app loads with office view
- [ ] Test clicking on agents (chat panel should open)
- [ ] Test Team View button (modal should open)
- [ ] Test floor filtering
- [ ] Add custom domain `app.labware.icu`
- [ ] Configure DNS CNAME record
- [ ] Wait for DNS propagation (5min - 24hrs)
- [ ] Visit `https://app.labware.icu`
- [ ] Verify custom domain works

---

## Troubleshooting

### Build Fails with "Cannot find module '@labware/shared'"

**Solution:** The build command in `vercel.json` handles this by installing workspace dependencies from the root.

### App Shows 404 on Routes

**Solution:** Vercel automatically handles Next.js routing. If you see 404s, check that:
- `next.config.js` exists
- `app/` directory has `page.tsx`

### Custom Domain Not Working

**Solution:**
1. Check DNS propagation: https://dnschecker.org
2. Verify CNAME points to `cname.vercel-dns.com`
3. In Vercel dashboard, go to Domains and verify domain is added
4. Wait up to 24 hours for full DNS propagation

### Environment Variables Not Working

**Solution:**
- Make sure they're prefixed with `NEXT_PUBLIC_` for client-side access
- Redeploy after adding environment variables
- Check Vercel dashboard → Settings → Environment Variables

---

## Continuous Deployment

Vercel automatically redeploys on every push to `main` branch.

**To deploy from a different branch:**
1. Go to Vercel Dashboard → Settings → Git
2. Change "Production Branch" to your preferred branch
3. Or deploy preview branches for testing before merging

---

## Performance Optimization

Vercel automatically handles:
- ✅ CDN distribution (global edge network)
- ✅ Automatic HTTPS/SSL
- ✅ Image optimization
- ✅ Code splitting
- ✅ Caching headers
- ✅ Brotli compression

No additional configuration needed!

---

## Monitoring

View deployment logs and analytics:
- Dashboard: https://vercel.com/dashboard
- Logs: Real-time build and runtime logs
- Analytics: Page views, performance metrics
- Functions: Monitor API performance (when backend is added)

---

## Cost

**Hobby Plan (Free):**
- Unlimited deployments
- 100 GB bandwidth/month
- Custom domains
- Automatic HTTPS

**Pro Plan ($20/mo):**
- Unlimited bandwidth
- Analytics
- Team collaboration
- Priority support

**Recommendation:** Start with Hobby plan, upgrade when you have users.

---

## Support

**Vercel Documentation:** https://vercel.com/docs
**Next.js Documentation:** https://nextjs.org/docs
**Contact:** support@vercel.com

---

## Next Steps After Deployment

1. ✅ App is live at `app.labware.icu`
2. ⏭️ Build backend API (Express.js + PostgreSQL)
3. ⏭️ Connect AI providers (Claude, GPT-4)
4. ⏭️ Implement authentication
5. ⏭️ Deploy backend to Railway/Render
6. ⏭️ Connect frontend to backend

---

**Questions?** Refer to this guide or check Vercel's comprehensive documentation.

Happy deploying! 🚀
