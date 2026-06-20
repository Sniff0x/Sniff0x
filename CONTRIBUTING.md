# Contributing to Sniff0x 🐶

Thank you for helping make the Clanker ecosystem safer!

## Getting Started

1. **Fork** the repository on GitHub
2. **Clone** your fork: `git clone https://github.com/YOUR_USERNAME/Sniff0x.git`
3. **Create a branch**: `git checkout -b feat/your-feature`
4. **Install deps**: `npm install`
5. **Copy env**: `cp .env.example .env.local`

## Development

```bash
npm run dev       # Start dev server on localhost:3000
npm run lint      # Check for lint errors
npm run type-check # TypeScript check
npm run test      # Run test suite
```

## Pull Request Guidelines

- Use [conventional commits](https://www.conventionalcommits.org/):
  - `feat:` — new feature
  - `fix:` — bug fix
  - `chore:` — maintenance
  - `docs:` — documentation
  - `refactor:` — code refactoring

- Keep PRs focused and small
- Add tests for new functionality
- Ensure `npm run lint` and `npm run type-check` pass

## Issues

- Use GitHub Issues for bugs and feature requests
- Include contract address examples when reporting scanner issues
- Tag issues appropriately: `bug`, `enhancement`, `documentation`

## Code Style

- TypeScript strict mode — no `any` unless absolutely necessary
- Tailwind CSS for styling — no inline styles
- Components in `components/`, utilities in `lib/`
- Follow existing file naming conventions

## Security

Found a vulnerability? Please **do not** open a public issue. DM [@Sniff0x on X](https://x.com/Sniff0x) directly.

---

**Made with ❤️ for the Clanker Ecosystem**
