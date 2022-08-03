# App Idea:

Twootr – React Version

# User Stories:

# Story 1 (Twoots Form):

As a user, I want to create a new twoot so that I can make publications.

When I create my twoot, I want all my followers to be able to see the content of my post.

# Story 2 (Account Twootr):

As a user, as a user, I want to see my twoots and the twoots of other users I follow.

When I entry in my twootr page, I want to be able to see the twoots I have created and see the twoots of the other users I follow.

# Story 3 (Change Name):

As a user, I want to change the name in my account.

when I change my name, I want to be able see it reflected on my twootr page.

# Story 4 (Like Twoots):

As a user, I want to like other twoots posted.

When I like a twoot, I want to be able to see that like reflected in the chosen twoot.

# Story 5 (Save Twoots):

As a user, I want to be able to save the twoots that interest me.

When I save a twoot, I would like to be able to store it and view it whenever I want.

# Story 6 (Reply Twoots):

As a user, I want to be able to reply the twoots that I want.

When I reply to a twoot, I want to be able to see the reply in the twoot that I retwoot.

# Story 7 (Date Twoots):

As a user, I want to see how many days ago the twoots were posted.

When I read a twoot, I want to be able to see how many days ago it was posted.

# Data Structure:

```js
//account
const account = {
id: 0,
name: ''
}

//list of accounts
const accounts = [account1, account2, account3, ...]

//twoots
const newToowts = {
author: '',
content: '',
authorSlug: '',
dateAdded: ''
}

//list of twoots
const twoots = [twoots1, twoot2, twoot3, ...]
```

# HTML Structure:

- Body
  - Header
    - H1 title
    - Section change name
      - Form change name
  - Main
    - Section new twoot
      - Form new twoot
    - Section view twoots
      - ul
        - li twoots
    - section saved twoots
      - ul
        - li twoots

# Component Structure:

- App
  - Header (change name)
    - Change name
  - Main (new twoots, view twoots, saved twoots)
    - New twoot
    - View twoot
    - Saved twoot

# Data Map:
