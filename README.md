# Sprint Challenge: Authentication - Dad Jokes

## Description

In this challenge, you build a real wise-guy application. _Dad jokes_ are all the rage these days. Currently the application is trying to receive some `Dad Jokes`, however we are locked out.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment, please work on it alone. It is an opportunity to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

If the instructions are not clear, please seek support from your TL and Instructor on Slack.

The Minimum Viable Product must be completed in three hours.

Follow these steps to set up and work on your project:

- [ ] Create a forked copy of this project.
- [ ] Add your _Team Lead_ as collaborator on Github.
- [ ] Clone your forked version of the Repository.
- [ ] Create a new Branch on the clone: git checkout -b `firstName-lastName`.
- [ ] Implement the project on this Branch, committing changes regularly.
- [ ] Push commits: git push origin `firstName-lastName`.

Follow these steps for completing your project.

- [ ] Submit a Pull-Request to merge `firstName-lastName` branch into `master` on your fork. **Please don't make Pull Requests against Lambda's repository**.
- [ ] Please don't merge your own pull request.
- [ ] Add your _Team Lead_ as a Reviewer on the Pull-request
- [ ] Your _Team Lead_ will count the challenge as done by merging the branch into _master_.

## Commits

Commit your code regularly and use descriptive messages. This helps both you (in case you ever need to return to old code) and your Team Lead.

## Self-Study/Essay Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

- [ ] What is the purpose of using _sessions_?

HTTP by default is stateless. It doesn't store who logged in when or anything. If you logged into an app without sessions and navigated to another section of the same app, you would have to log in over and over because without sessions, the app cannot keep track of who is logged in. This would make using this app a terrible experience. Using sessions keeps track of who logged in and when.

- [ ] What does bcrypt do to help us store passwords in a secure manner.

bcrypt takes passwords and encodes/encrypts them using an algorithm then hashes the passwords multiple times (rounds).

- [ ] What does bcrypt do to slow down attackers?

bcrypt uses cryptographic hashing and time to slow down attackers also known as a Key Derivation Function(KDF). bcrypt also repeats the process many times or rounds.

- [ ] What are the three parts of the JSON Web Token?

The three parts of a JSON Web Token(JWT) are the Header, where the information about the algorithm used and the token type are stored, the Payload where some data is held, the convention being an ID of some sort but never any sensitive data or information and finally the Signature that encodes the header and payload together in base64 and signs it with a secret.

## Minimum Viable Product

Implement an User Authentication System. Hash user's passwords before saving them to the database. Use `JSON Web Tokens` or `Sessions and Cookies` to persist authentication across requests.

- [ ] Implement the `register` and `login` functionality inside `/auth/auth-router.js`. A `user` has `username` and `password`. Both properties are required.
- [ ] Implement the `authenticate` middleware inside `/auth/authenticate-middleware.js`.
- [ ] Write a **minimum o 2 tests** per API endpoint. Write more tests if you have time.

**Note**: the database already has the users table, but if you run into issues, the migrations are available.

## Stretch Problem

Build a front end to show the jokes.

- [ ] Add a React client that connects to the API and has pages for `Sign Up`, `Sign In` and showing a list of `Jokes`.
- [ ] Once you have the functionality down, style it!
