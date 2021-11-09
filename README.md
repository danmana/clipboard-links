# clipboard-links
A desktop program that monitors my clipboard for URLs and logs them automatically

An under 30 minute solution to https://www.reddit.com/r/programming/comments/qpkx8n/this_project_will_only_take_2_hours/

How to run it
```sh
npm i
npm run start
```

You can find your logs in `./urls.txt`

How long it took:
```
1 min to create project and research clipboardy
5 min to figure out how to get url from string
5 min to get urls and append to file
5 min to solve "SyntaxError: Cannot use import statement outside a module"
1 min to avoid writing the same url many times if the clipboard does not change
5 min to handle error if clipboard contains files
15 min to push to github, write a README, post on reddit
```
