include ./.storybook/caller.mk
include ./ci/caller.mk
include ./cd/caller.mk


RED="\033[0;31m"
GREEN="\033[0;32m"
YELLOW="\033[1;33m"
BLUE="\033[0;34m"
PURPLE="\033[0;35m"
NC="\033[0m"

define echo_red
    echo -e ${RED}$1${NC}
endef

define echo_green
    echo -e ${GREEN}$1${NC}
endef

define echo_yellow
    echo -e ${YELLOW}$1${NC}
endef

define echo_blue
    echo -e ${BLUE}$1${NC}
endef

define echo_purple
    echo -e ${PURPLE}$1${NC}
endef

git-sync-prod:
	@echo "Syncing with prod branch"
	git fetch origin production:production

git-sync-dev:
	@echo "Syncing with dev branch"
	git fetch origin development:development
