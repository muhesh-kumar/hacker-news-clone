# Hacker News Clone

## Setting up the Development Environment

1. Clone the repo
1. Install dependencies `yarn`
1. Setup precommit hooks `yarn husky install`
1. Create a .husky/pre-commit file and fill it with the following contents
1. ```
   #!/usr/bin/env sh
   . "$(dirname -- "$0")/_/husky.sh"

   # yarn tsc --noEmit && yarn eslint . && yarn prettier --write .
   yarn lint-staged
   ```

1. Make .husky/pre-commit executable `chmod +x .husky/pre-commit`
1. Start the development server `yarn dev`

1. Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

## Future Work

- Add Loading Animation
- Add Authentication
- Add Responsiveness
- Implement all the features present in the original Hacker News website

## Tech Stack

- ReactJS
- TypeScript
- TailwindCSS
- Vite

## Design Credits

- https://dribbble.com/shots/10472146-Hacker-News-Redesigned

## Design

- https://cdn.dribbble.com/users/2969840/screenshots/10472146/media/c50908689b25c5c4c332ed10d9195516.png

## References

- [Hacker News API](https://hn.algolia.com/api)
- [How to setup path aliases in Vite + TS Environment](https://www.youtube.com/watch?v=h2ZS5rTsuRQ)
- [React Router Dom does not work on Vercel](https://stackoverflow.com/questions/64815012/why-does-react-router-not-works-at-vercel)
