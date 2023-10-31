# Logging

- log git commits using pretty
  - `git log --pretty=format:"%h - %an, %ar : %s"`

# Tag Operations

- `git tag -a v1.4 -m "my version 1.4"` : This command adds a tag using tag message
- `git tag` : lists all the tags
- `git show v1.4`: this prints tag details like commit id, message

# Tasks

1. create a tag on a specific commit id.
   - `git tag -a v1.2 9fceb02` : This command adds a tag on specific commit
2. pushing tags to remote
   - `git push origin v1.5` : this command pushes a specific tag to the remote shared service
   - `git push origin --tags` : this command pushes all tags to the remote shared service
3. create a new branch from specific commit-id.
   - `git checkout -b <branch_name> <commit_id>`
