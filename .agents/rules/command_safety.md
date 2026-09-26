# Command Safety & Non-Destructive Execution Rules

## Overview
This rule restricts agent command execution to non-destructive actions and explicitly requires user confirmation before running any command that could destroy, overwrite, or permanently alter data, files, or repository state.

## Strict Guidelines

### 1. Prohibited Automatic Actions (Destructive Commands)
The agent MUST NOT execute any of the following types of commands automatically without explicit user review and written approval:
- **File & Directory Deletion**: `rm`, `unlink`, `rmdir`, `del`, `rd`, `Remove-Item` (especially with `-r`, `-f`, or recursive/force flags).
- **Destructive Git Operations**: `git reset --hard`, `git clean -f`, `git push --force`, `git checkout .`, `git rebase -i`, `git branch -D`.
- **System & Disk Mutations**: Formatting partitions, altering disk volume structures, modifying system-wide environment variables, or executing administrative elevated scripts (`sudo`, `runas`).
- **Database & State Destruction**: `dropdb`, `prisma migrate reset`, dropping tables/databases, or clearing persistent caches/data stores.
- **Bulk Overwrites / Destructive Piping**: Indiscriminate file modifications or dangerous shell redirection (`>`) over critical source or configuration files without backup.

### 2. Allowed Non-Destructive Actions
The agent is permitted to propose and execute standard non-destructive development commands, including:
- **Build & Compilation**: `npm run build`, `next build`, `tsc`, `go build`, etc.
- **Testing & Linting**: `npm test`, `npx eslint .`, `jest`, `pytest`.
- **Read-Only / Inspection**: `ls`, `dir`, `cat`, `git status`, `git diff`, `git log`, `node -v`.
- **Package Installation**: `npm install`, `yarn add`, `pip install` (adding dependencies safely).

### 3. Procedure for Destructive Commands
If a task genuinely requires a destructive operation (e.g. cleaning a stale build cache, resetting a branch, or deleting a deprecated file):
1. Stop and explain to the user why the action is necessary.
2. Provide the exact command string to the user.
3. Wait for the user's explicit confirmation before proceeding.
