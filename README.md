# YC Directory - A Simplified Forum for Startup Owners

> A feature-rich, dynamic forum inspired by YC Combinator, empowering startup owners with an interactive space to connect and share insights.

## Overview

YC Directory is a full-stack application, crafted as a simplified clone of the YC Combinator forum for startup owners. It offers essential functionalities like post creation, personal dashboards, and an Editor’s Pick section, all built with bleeding-edge technologies to ensure high performance and scalability.

## Demo

A live demo of YC Directory can be accessed here: [YC Directory](https://yc-directory-blond.vercel.app/)

## Tech Stack

- Fullstack Framework: Next.js v15
- Leveraging experimental features: Partial Pre-rendering, Parallel Data - Fetching, and Incremental Static Regeneration.
- Language: TypeScript
- Compiler/Transpiler: Turbopack & SWC
- Component Library: React v19
- Styling: Tailwind CSS
- Authentication: GitHub OAuth/Auth.js
- Backend: Sanity
- Explored for flexible content management.
- Code Quality: ESLint & SonarLint

## Project Architecture

(Include an architecture diagram to highlight your understanding of design patterns and flow.)

- Frontend: Built with Next.js and TypeScript, with parallel data fetching for efficient data handling.
- Backend: Sanity CMS for structured content management.
- Auth & Security: OAuth-based GitHub authentication.

(Diagram suggestion: A layered architecture showing frontend, backend, and GitHub authentication interactions.)

## Setup Guide

- Clone the Repository: `git clone https://github.com/khaledCSE/yc-directory`
- Install Dependencies: `npm install`
- Environment Variables: Configure **GitHub OAuth** and **Sanity API** in `.env.local`.
- Run Locally: `npm run dev`
  (Include an image or flowchart here to simplify setup steps visually.)

### Example `.env.local`

```
AUTH_SECRET=

# Github
AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
SANITY_API_READ_TOKEN=
SANITY_WRITE_TOKEN=
```

## Usage

- Login: Users can log in securely with GitHub.
- Create & View Posts: Simple UI for creating and managing posts.
- Editor’s Pick: Highlighted posts from the admin/editor.
- Sanity Studio Available at: `http://localhost:3000/studio`

## Future Enhancements

- Advanced Search: Implement filters based on tags, date, and user.
- Real-time Notifications: For new comments or upvotes.

## Contact

Feel free to reach out if you have questions, feedback, or collaboration opportunities:

[LinkedIn](https://linkedin.com/in/khaledCSE10) | [Email](mailto:khaledcse30@gmail.com)
