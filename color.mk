RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
NC='\033[0m'

define echo_red
	echo ${RED}$1${NC}
endef

define echo_green
	echo ${GREEN}$1${NC}
endef

define echo_yellow
	echo ${YELLOW}$1${NC}
endef

define echo_blue
	echo ${BLUE}$1${NC}
endef

define echo_purple
	echo ${PURPLE}$1${NC}
endef

