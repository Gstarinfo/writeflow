# Development Guide

## Prerequisites
- Node.js >= 18 (Node 24 recommended)
- npm >= 9

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Web Editor Locally**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

3. **Build All Packages & Extension**:
   ```bash
   npm run build
   ```

4. **Load Browser Extension in Chrome/Edge/Brave**:
   - Navigate to `chrome://extensions/`
   - Enable **Developer mode**
   - Click **Load unpacked**
   - Select `apps/browser-extension/dist` (or `apps/browser-extension`)

5. **Run Tests**:
   ```bash
   npm test
   ```
