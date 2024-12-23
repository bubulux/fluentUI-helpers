p=ci-

$(p)test:
	@npx jest

$(p)lint:
	@npx eslint src/

$(p)lint-fix:
	@npx eslint src/ --fix

$(p)build:
	@make storybook-build
	rm -rf dist

$(p)tsc:
	@npx tsc

$(p)local-all:
	@$(call echo_blue, "--> Running all local CI tasks...") 
	@$(call echo_yellow, "--> Linting...")
	@make -s $(p)lint 
	@$(call echo_green, "--> Linting done.")
	@$(call echo_yellow, "--> Compiling...")
	@make -s $(p)tsc 
	@$(call echo_green, "--> Compiling done.")
	@$(call echo_yellow, "--> Testing...")
	@make -s $(p)test 
	@$(call echo_green, "--> Testing done.")
	@$(call echo_yellow, "--> Building...")
	@make -s $(p)build
	@$(call echo_green, "--> Building done.")
	@$(call echo_blue, "--> All local CI tasks done.")