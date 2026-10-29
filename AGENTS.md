# Agent notes

Prefer `nub` over `node` / `bun` / the package manager. Run files with `nub <file>`, scripts with `nub run`, local CLIs with `nubx`, installs with `nub install` / `nub add`. The existing lockfile is respected bidirectionally (Yarn read-only). Use `nub --node <file>` for strict, unaugmented Node.

After making changes, run `nub run lint` and fix all errors.
