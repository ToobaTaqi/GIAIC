### Since a single monorepo can host only 10 live projects on Vercel, I deployed the remaining projects from this monorepo directly using the CLI (written as a note for future reference).

## Steps:

1. **Install Vercel CLI:**  
   Install Vercel globally on your system:

   ```bash
   npm install -g vercel
   ```

2. **Log in to Vercel:**  
   Authenticate your Vercel account using the CLI:

   ```bash
   vercel login
   ```

3. **Navigate to Your Project Directory:**  
   Move to the specific project folder inside your monorepo:

   ```bash
   cd path/to/your/project
   ```

4. **Deploy Your Project:**  
   Run the Vercel deployment command:

   ```bash
   vercel
   ```

5. **Follow the Prompts:**

   - Specify the project name.
   - Select **"No"** when asked to link to a Git repository.
   - Confirm the root directory for the project.

6. **Finalize Deployment:**  
   After the build completes, Vercel will provide a live URL for your deployed project.
