import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.resolve(__dirname, '..', 'dist');

// Rename sitemap-0.xml to sitemap.xml
const sitemap0Path = path.join(distPath, 'sitemap-0.xml');
const sitemapPath = path.join(distPath, 'sitemap.xml');
const sitemapIndexPath = path.join(distPath, 'sitemap-index.xml');

if (fs.existsSync(sitemap0Path)) {
  fs.copyFileSync(sitemap0Path, sitemapPath);
  console.log('✓ Created sitemap.xml from sitemap-0.xml');
  
  // Remove sitemap-index.xml and sitemap-0.xml (we only want sitemap.xml)
  if (fs.existsSync(sitemapIndexPath)) {
    fs.unlinkSync(sitemapIndexPath);
    console.log('✓ Removed sitemap-index.xml');
  }
  // Keep sitemap-0.xml for now, but we could remove it if needed
  // fs.unlinkSync(sitemap0Path);
  // console.log('✓ Removed sitemap-0.xml');
} else if (fs.existsSync(sitemapIndexPath)) {
  // If only sitemap-index.xml exists, copy it to sitemap.xml
  fs.copyFileSync(sitemapIndexPath, sitemapPath);
  console.log('✓ Created sitemap.xml from sitemap-index.xml');
}
