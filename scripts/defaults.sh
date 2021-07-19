# Stop when no branch was specified
if [[ -z "$1" ]]; then
  echo "Please specify the branch to pull from eg. 'npm run <task> <main>'"
  exit 1
fi
# Get env variables (See: https://stackoverflow.com/a/30969768/440201)
set -o allexport
source "./.env"
set +o allexport
