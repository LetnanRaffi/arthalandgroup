/**
 * Build otomatis untuk Cloudflare Workers Builds.
 *
 * Kenapa ada: project Cloudflare ini menjalankan `npx wrangler deploy`
 * sebagai deploy command TANPA build command (setting dashboard kosong),
 * sehingga folder `out/` belum ada saat wrangler mencari static assets.
 *
 * Cloudflare selalu menjalankan `npm clean-install` sebelum deploy, dan
 * npm menjalankan `postinstall` setelahnya. Jadi build ditempel di sini.
 *
 * Hanya jalan di CI/Cloudflare — `npm install` di laptop tidak ikut build.
 */
import { execSync } from "node:child_process";

const isCi = Boolean(
  process.env.CI ||
    process.env.WORKERS_CI ||
    process.env.CF_PAGES ||
    process.env.CLOUDFLARE_ACCOUNT_ID,
);

if (!isCi) {
  console.log("[cloudflare-build] bukan lingkungan CI — build dilewati.");
  process.exit(0);
}

console.log("[cloudflare-build] menjalankan next build...");
execSync("npx next build", { stdio: "inherit" });
