p=ci-

$(p)test:
	@$(call echo_yellow, "--> Jest Testing...")
	@npx jest

$(p)lint:
	@$(call echo_yellow, "--> Linting...")
	@npx eslint src/

$(p)lint-fix:
	@$(call echo_yellow, "--> Linting and fixing...")
	@npx eslint src/ --fix

$(p)builds:
	@$(call echo_purple, "--> Checking integrity of builds...")
	@make -s storybook-build
	@make -s cd-build-package

$(p)tsc:
	@$(call echo_yellow, "--> Compiling...")
	@npx tsc

$(p)local-all:
	@$(call echo_blue, "--> Running all local CI tasks...") 
	@make -s $(p)lint 
	@$(call echo_green, "--> Linting done.")
	@make -s $(p)tsc 
	@$(call echo_green, "--> Compiling done.")
	@make -s $(p)test 
	@$(call echo_green, "--> Testing done.")
	@make -s $(p)builds
	@$(call echo_green, "--> Building done.")
	@$(call echo_blue, "--> All local CI tasks done.")