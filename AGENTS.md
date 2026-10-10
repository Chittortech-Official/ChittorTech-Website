<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:cloudflare-purge-rule -->
# Cloudflare Cache Purge Rule
**MANDATORY POST-PUSH ACTION**:
Whenever code, sitemaps, verification files, or pages are pushed to `main` via `git push` or deployed for `chittortech.in`, ALWAYS explicitly remind the user to **Purge Cloudflare Cache** (Cloudflare Dashboard ➔ `chittortech.in` ➔ Caching ➔ Configuration ➔ **Purge Everything**) so that live users and search engine bots see the updated files immediately.
<!-- END:cloudflare-purge-rule -->
