# Mission:

> Thank you for taking on this activity to demonstrate your knowledge of React. What we are primarily looking for in your submission will be functionality and code cleanliness. However, creating a well-presented application experience will be noticed and appreciated. You may use any approach, packages, patterns, CSS libraries that you prefer to augment or extend the capabilities of the main framework that you are using. It is entirely valid to use an off-the-shelf CLI interface to generate your project. Use whichever tools and techniques you prefer to help you to achieve the task as cleanly and quickly as possible.

> For this assignment, we will use the JSON placeholder API, [found here](https://jsonplaceholder.typicode.com/). This service provides a freely available endpoint that we can use to prototype applications. Data in your application should be dynamically retrieved from this endpoint. The API supports typical RESTful routing and methods. It will also give realistic responses to these request types. However, because it is a publicly available shared resource, it will not persist your changes. For purposes of this exercise, it is acceptable to update the UI optimistically based upon any responses that you receive. The routes that are of interest to us in this exercise will be the `posts` and `comments`.

> Now for the task: Using the publicly available JSON placeholder API, create an application using the front end framework that lists post entities with a title. When a user taps on one of the posts in the list, the app should navigate to a detail page that displays the title at the top of the screen as well as the body content of the post. This post detail screen should have the ability to navigate back to the posts list view. Below the body content section of the post detail screen, display all of the comments that are associated with that post. For each comment, show the body, name, and email address.

To recap, we are looking for 2 screens that are wired up to the API:

- a `posts` list view with a title that navigates to the detail view
- a `post` detail view with title, body, and a list of related comments at the bottom

Optional Bonus Activities:

- Unit tests for core application features
- The ability to look up all posts by an author
- A search filter to filter posts on the main screen
- A comment field for users to submit a comment (may submit a POST to API and update the UI, but will not persist on API)

## What is inside?

- [TypeScript](https://www.typescriptlang.org/)
- [NextJS](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Storybook](https://storybook.js.org/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Commands

- `dev`: runs your application on `localhost:3000`
- `build`: creates the production build version
- `start`: starts a simple server with the build production code
- `lint`: runs the linter in all components and pages
- `test`: runs jest to test all components and pages
- `test:watch`: runs jest in watch mode
- `generate ComponentName`: to generate a component structure
- `storybook`: runs storybook on `localhost:6006`
- `build-storybook`: create the build version of storybook

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
