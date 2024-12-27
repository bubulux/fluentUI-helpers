p=cd-

$(p)-package-build:
	@$(call echo_yellow, "--> Building package...")
	@npx vite build