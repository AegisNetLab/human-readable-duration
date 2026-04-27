# GitHub Upload Guide

## 1. Create a new repository on GitHub

1. Go to GitHub.
2. Click **New repository**.
3. Repository name: `human-readable-duration`
4. Visibility: Public or Private.
5. Do not initialize with README, because this project already contains one.

## 2. Initialize Git locally

```bash
git init
```

## 3. Add files

```bash
git add .
```

## 4. Commit files

```bash
git commit -m "Initial commit - Human readable duration solution"
```

## 5. Rename branch to main

```bash
git branch -M main
```

## 6. Add remote repository

Replace `YOUR_USERNAME` with your GitHub username.

```bash
git remote add origin https://github.com/YOUR_USERNAME/human-readable-duration.git
```

## 7. Push to GitHub

```bash
git push -u origin main
```

## 8. Install dependencies

```bash
npm install
```

## 9. Run tests

```bash
npm test
```
