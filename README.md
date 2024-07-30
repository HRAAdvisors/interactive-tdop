# The Texas Digital Opportunity Hub

The Texas Digital Opportunity Hub is a web application built by [HR&A Advisors](https://www.hraadvisors.com/) for the [Texas Broadband Development Office](https://comptroller.texas.gov/programs/broadband/). 

## Technology Stack

The Hub uses the following technologies:
- [Node.js](https://nodejs.org/en) for building and working on the app.
- [TypeScript](https://typescriptlang.org) for static types.
- [React](https://react.dev/) for front-end component development. 
- [TailwindCSS](https://tailwindcss.com/) for styling components. 
- [AWS S3](https://aws.amazon.com/) for data warehousing and server-side storage. 
- [HR&A's Housing App](https://www.hrahousing.app/) for charts, data serving, and content management. 
- [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/guides) for client side map rendering.
- [Mapbox Studio](https://www.mapbox.com/mapbox-studio) for map tile rendering.
- [Prettier](https://prettier.io) for code formatting.
- [ESLint](https://eslint.org) for linting.
- [Vercel](https://vercel.com/) for app deployment and hosting. 

## Development Workflow
This app requires [Node.js](https://nodejs.org/en), [Git](https://git-scm.com/), and [Yarn](https://yarnpkg.com/). Please install prior to starting development. 

1. To run this app locally, developers must pull their Github personal token. For information on how to do this, review Github's [documentation](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) on personal access tokens. 
2. Execute the command *export NPM_TOKEN=github_personal_access_token* in a Terminal window. Be sure the change "github_personal_access_token" for the personal access token you pulled in step 1. 
3. Ensure that VITE_MAPBOX_ACCESS_TOKEN in the .env file is set to a current, accurate, and live Mapbox Studio token. This can be configured on [Mapbox Studio](https://www.mapbox.com/mapbox-studio). 
4. Once the above has been verified, run *yarn install*
5. Run *npm i*
6. Run *npm run dev*

This project uses branches and Github's pull request feature for development collaboration. Contributions should follow the following structure:
1. Create a new local branch running *git checkout --b newBranch*
2. Write new code on the new branch and test locally
3. Add new code by running *git add files*, and commit code with a description by running *git commit -m 'Message Description'* 
4. Push new code to the remote with *git push origin -u newBranch*
5. On Github, open a pull request with your updated code. Flag any necessary reviewers
6. When code is merged to the main branch, it will trigger a new build on Vercel which will deploy live. 
 
## Deployment Workflow
The app is currently deployed through Vercel at https://www.digitalopportunityfortexas.com/. On Vercel, DNS settings have been configured to point the app to that URL. Also on Vercel, the NPM_TOKEN has been set to the lead developer's personal Github access token. For changes in deployment structure, this will need to be updated. 

The [site URL](https://www.digitalopportunityfortexas.com/) is owned through HR&A's GoDaddy account and can be configured by contacting the firm's GoDaddy administrators. 
