# Boilerplate and Starter for Next.js 14+, Lucia-Auth, Tailwind CSS, Typescript, i18n Translation

NextJS Boiler is a minimalist boilerplate that includes the below features. This project was developed as an aide to help with my personal micro-sass development. I have made this public to benefit others with a hit the ground running template.

## FEATURES

- [Next.js](https://nextjs.org/docs/app) with APP router support
- Full [Typescript](https://www.typescriptlang.org/) implementation with type checking
- [Tailwind CSS](https://tailwindcss.com/)
- Authentication using [Lucia Auth](https://lucia-auth.com/): Sign up, Sign in, Sign out, Forgot password and Email verification
- [Vitest](https://vitest.dev/) for component testing
- Multi-language (i18n) with [next-intl](https://next-intl-docs.vercel.app/): EN, PT supplied
- Form handling with [React Hook Form](https://react-hook-form.com/)
- Form validation using [Zod](https://zod.dev/)
- [Husky](https://typicode.github.io/husky/) for Git Hooks
- Code Formatting with [Prettier](https://prettier.io/)
- [Lint-staged](https://github.com/lint-staged/lint-staged) for running linters on Git staged files
- Responsive minimalist starter theme
- Features folder with encapsulated code
- Send emails using [Resend](https://resend.com/docs/introduction)
- Email templates using [react-email](https://react.email/docs/introduction)
- Absolute Imports using @ prefix
- SEO metadata

## Getting started

### Clone and install dependencies

Run the following command on your local environment

```
git clone https://github.com/brymed88/next-boiler.git my-project-name
cd my-project-name
npm install
```

### Sign up for [Resend](https://resend.com/signup)

Note: If you do not have a domain to link then use the test from address
'Acme <onboarding@resend.dev>'

### Setup your database

Project is shown using a mysql database. Changing prisma adapter to PostGreSQL may require additional changes within project

[How to install Mysql](https://dev.mysql.com/doc/mysql-getting-started/en/)

### Update both .env.development & .env.production files

```
NODE_ENV="development"
DATABASE_URL="mysql://username:password@url:port/DB_NAME"

RESEND_API_KEY="resend-key"
RESEND_FROM_EMAIL="resend-from-email"

NEXT_PUBLIC_SITE_URL="http://localhost:3000"
NEXT_PUBLIC_SITE_NAME="TestSite"
NEXT_PUBLIC_SUPPORT_EMAIL="support@test.com"
```

### Migrate the database

Development

```
npm run dbMigrateDev
```

OR

Production

```
npm run dbMigratePrd
```

### Install Husky and setup lint-staged

run the below command

```
npm run prepare
```

### Conclusion

Installation is now complete!

run the below to see your new project at http://localhost:3000

```
npm run dev
```
