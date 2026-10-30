# Pocopie Games

A self-contained static landing page for Picture Puzzle. Production files live in `dist/`; no build or package installation is required.

Live website: https://epallab.github.io/pocopie-games/

## Local preview

Run `node preview.mjs` and open the printed address for local preview. The server binds only to the local machine. Stop it with Ctrl+C.

All download links open https://play.google.com/store/apps/details?id=com.pocopie.picturepuzzle. Supplied artwork and the locally bundled font are served from `dist/assets/`.

The site uses the bundled Nunito font, licensed under the SIL Open Font License; see `dist/assets/OFL.txt`.

## GitHub Pages deployment

Push changes to `main` to deploy automatically. The workflow in `.github/workflows/deploy-pages.yml` publishes only `dist/` through GitHub Actions. It can also be run manually from the repository's Actions tab. No custom secrets or build dependencies are needed.

In repository Settings → Pages, the publishing source is **GitHub Actions**. Local asset URLs are relative so they work under the `/pocopie-games/` project path. If the domain or repository name changes, update the canonical and social sharing URLs in `dist/index.html`.

The existing `.openai/hosting.json` retains the original Sites deployment identity and is not included in the GitHub Pages artifact.
