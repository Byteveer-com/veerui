# 🤝 Contributing to Veer UI

We welcome contributions from the community! Please follow these guidelines:

## Branching Strategy

- Always work on your changes in a separate branch.
- Branch naming conventions:
  - Features: `feat/describe`
  - Bug fixes: `bug/describe-fix`
  - Hotfixes: `hotfix/describe-fix`
  - Release: `release/v0.0.0`
  - Docs: `docs/`
- Version: `MAJOR.MINOR.PATCH`

## Pull Request Workflow

❌ **Do NOT merge directly into the `main` branch!**  
✅ **Instead:**
1. Push your branch:
   ```bash
   git push origin feat/new-feature
   ```
2. Create a Pull Request (PR) on GitHub.
3. Request a code review.
4. Once approved, we will merge your PR.

### Best practice to ensure local `main` branch is up to date

1. **Checkout** to `main`
   ```bash
   git checkout main
   ```
   Ensures you're working on the correct branch before updating anything.

2. **Fetch** latest changes from the remote repo
   ```bash
   git fetch origin
   ```
   Retrieves updates from GitHub, including branches that were deleted remotely.

3. **Pull** the latest `main` updates
   ```bash
   git pull origin main
   ```
   Ensures your local `main` branch matches the latest version on GitHub.

4. **Delete** the merged branch locally
   ```bash
   git branch -d <branch_name>
   ```
   Cleans up your workspace by removing the branch that was already merged.

5. ( optional ) **Remove** stale remote references
   If the deleted branch still appears in git branch -a, run:
   ```bash
   git fetch --prune
   ```

---

**Back to the [README](README.md) file!**