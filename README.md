
# Some notes on OAK API 

Units have tags
Lessons within units have keywords
Lesson search can be narrowed to a specific unit


## Proposed search method:

**Plan A** - API is adaptable and supports query strings that match more than just tags

e.g. "simplify" may appear in Maths Fractions and Maths Algebra
We can specify the subject but not the unit. We can try passing "Simplify Algebra"

If not able to match then **Plan B**:

Pull all unit tags for the subject and matching unit slug

First match our keywords with the unit tag and get the unit slug e.g. Algebra


Search lessons for "Simplify" in lesson search but narrow to unit that matched for Algebra


Either way once lesson identified use lesson to find quiz

Each lesson has 2 quizzes

Starter Quiz and Exit quiz.
Starter quiz is easier - typically 6 questions

We can use these 6 and end the week with a harder question from the exit quiz.

------

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm install

npm run dev-proxy
# or
yarn dev-proxy
# or
pnpm dev-proxy
# or
bun dev-proxy
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

