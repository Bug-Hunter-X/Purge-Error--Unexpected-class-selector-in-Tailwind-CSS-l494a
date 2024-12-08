# Tailwind CSS Purge Error: Unexpected class selector

This repository demonstrates a common, yet sometimes tricky-to-debug, issue in Tailwind CSS:  the "Unexpected class selector" error stemming from the purge process.

## The Problem

Tailwind's purge feature optimizes your CSS by removing unused classes. However, if you're not careful, it can inadvertently remove classes you actually need. This often manifests as the "Unexpected class selector" error during build or runtime.

The `bug.js` file shows a simple example where this might occur.  It's not an error in itself, but it demonstrates an area where problems might show up in larger, more complex projects.

## The Solution

The `bugSolution.js` demonstrates several ways to fix this common issue.

1. **Proper Configuration of `tailwind.config.js`:** Ensure that you're correctly configuring the `purge` option.  This frequently overlooked step often is the cause of the error.
2. **Using `@layer` and the `safelist` (if necessary):** If you have classes that should always be included, regardless of usage in your source code, use the `safelist` option. This helps to protect your classes from being purged.
3. **Double-check class names:** Typos or simple mistakes in the class names can lead to unused class names being purged.
4. **Inspect your build:** The build process helps you determine what exactly got purged and why.

This repository provides a simple demonstration to help understand and resolve this error. Remember to consult the official Tailwind CSS documentation for detailed information and best practices.