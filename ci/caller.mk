ci-test:
	@$(call echo_yellow, "--> Jest Testing...")
	@npx jest

ci-lint:
	@$(call echo_yellow, "--> Linting...")
	@npx eslint src/

ci-lint-fix:
	@$(call echo_yellow, "--> Linting and fixing...")
	@npx eslint src/ --fix

ci-tsc:
	@$(call echo_yellow, "--> Compiling...")
	@npx tsc

ci-local-all:
	@$(call echo_blue, "--> Running all local CI tasks...") 
	@make -s ci-lint 
	@$(call echo_green, "--> Linting done.")
	@make -s ci-tsc 
	@$(call echo_green, "--> Compiling done.")
	@make -s ci-test 
	@$(call echo_green, "--> Testing done.")

	@$(call echo_purple, "--> Checking integrity of builds...")
	@make -s cd-build-storybook
	@$(call echo_green, "--> Storybook build successfull.")
	@make -s cd-build-package
	@$(call echo_green, "--> Package build successfull.")
	@$(call echo_purple, "--> Build integrity checked.")
	
	@$(call echo_blue, "--> All local CI tasks done.")