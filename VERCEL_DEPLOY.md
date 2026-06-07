Vercel deployment notes

Quick summary

- Build command: npm run build
- Output directory: dist/client
- Edge function: api/index.ts (configured as edge in vercel.json)

Steps to deploy via Vercel (web UI)

1. Push your project to a Git provider (GitHub/GitLab/Bitbucket).
2. Go to https://vercel.com/new and import the repository.
3. In the "Root Directory" set the project root where this `package.json` lives (if you connect the monorepo root). For this project the root is the repository folder containing `package.json`.
4. Set the Build Command to: `npm run build`
5. Set the Output Directory to: `dist/client`
6. Leave Environment Variables blank unless you need any runtime secrets; add them in Vercel Project Settings.
7. Deploy. Vercel will run the build and publish static files, while `api/index.ts` will be deployed as an Edge Function per `vercel.json`.

Deploy via Vercel CLI (optional)

- Install the Vercel CLI:

```bash
npm i -g vercel
```

- From the project root run (first-time will prompt to link/create a project):

```bash
vercel
# or to deploy production directly
vercel --prod
```

Notes & troubleshooting

- `npm run build` succeeds locally and generates `dist/client` and `dist/server`.
- If the deployment serves an unexpected path, confirm the Vercel project "Root Directory" is the folder with `package.json` and `vercel.json`.
- Large chunks warning from Vite is a performance note only — consider code-splitting if you want smaller bundles.

If you want, I can:

- Create a Git repository and push it to GitHub for you.
- Run `vercel` from this environment to trigger a deployment (you will need to authenticate interactively).
- Double-check Vercel settings after you connect the project (I can list recommended settings).