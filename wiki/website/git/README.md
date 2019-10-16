# GIT

## Xóa cache

`
git rm -r --cached .
`

## Bổ sung nội dung vào commit trước đó (only local)

`
git commit —amend '...'
`

## Xóa commit (mất commit trong git log)

`
git reset —hard HEAD/commit name
`

`
git reset —hard ORIG_HEAD
`

## Xóa local branch

`
git branch -d feature/login
`

## Xóa remote branch

`
git push origin --delete feature/login
`

## Lấy lại file đã xóa

- ### Commited

`
git checkout -- <file>
`

- ### Uncommited

`
git rev-list -n 1 HEAD -- <file> 
`

`
git checkout <commit>^ -- <file>
`

## Lấy list file đã xóa

`
git ls-files --deleted
`

### In case you are looking for the path of the file to recover, the following command will display a summary of all deleted files.

`
git log --diff-filter=D --summary
`

## gitignore

``` md
.DS_Store
node_modules
/dist
/build

# local env files
.env.local
.env.*.local

# Log files
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Editor directories and files
.idea
.vscode
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
```