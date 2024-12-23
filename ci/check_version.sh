#!/bin/bash

# Function to extract version numbers into an array
parse_version() {
    local version=$1
    if [[ $version =~ ^([0-9]+)\.([0-9]+)\.([0-9]+)$ ]]; then
        echo "${BASH_REMATCH[1]} ${BASH_REMATCH[2]} ${BASH_REMATCH[3]}"
    else
        echo "0 0 0"
    fi
}

# Get development version
DEV_VERSION=$(cat package.json | jq -r .version)

# Get production version - using package.json from main branch
git fetch origin main >/dev/null 2>&1
PROD_VERSION=$(git show origin/production:package.json | jq -r .version)

echo "Development version: $DEV_VERSION"
echo "Production version: $PROD_VERSION"

# Exit if versions are the same
if [ "$DEV_VERSION" == "$PROD_VERSION" ]; then
    echo "Error: Development version ($DEV_VERSION) is the same as Production version ($PROD_VERSION)"
    exit 1
fi

# Parse versions into arrays
read -r dev_major dev_minor dev_patch <<< "$(parse_version $DEV_VERSION)"
read -r prod_major prod_minor prod_patch <<< "$(parse_version $PROD_VERSION)"

# Check version bumps
if [ "$dev_major" -gt "$prod_major" ]; then
    if [ "$dev_minor" -ne 0 ] || [ "$dev_patch" -ne 0 ]; then
        echo "Error: Invalid major version bump. Minor and patch versions must be 0"
        echo "Expected: $((prod_major + 1)).0.0"
        echo "Got: $DEV_VERSION"
        exit 1
    fi
elif [ "$dev_minor" -gt "$prod_minor" ] && [ "$dev_major" -eq "$prod_major" ]; then
    if [ "$dev_patch" -ne 0 ]; then
        echo "Error: Invalid minor version bump. Patch should be 0"
        echo "Expected: $prod_major.$((prod_minor + 1)).0"
        echo "Got: $DEV_VERSION"
        exit 1
    fi
elif [ "$dev_patch" -gt "$prod_patch" ] && [ "$dev_major" -eq "$prod_major" ] && [ "$dev_minor" -eq "$prod_minor" ]; then
    :  # Valid patch bump
else
    echo "Error: New version ($DEV_VERSION) is not greater than production version ($PROD_VERSION)"
    exit 1
fi

echo "Version bump is valid"
exit 0