p=storybook-

npx_s=npx storybook

dev_port=39047
preview_port=8080
export dist=.storybook/dist

$(p)dev:
	@$(call echo_yellow, "--> Running Storybook in development mode...")
	$(run) $(npx_s) dev --no-open -p $(dev_port)

$(p)build:
	@$(call echo_yellow, "--> Building Storybook...")
	$(run) $(npx_s) build --docs -o $(dist)

$(p)preview-build-locally:
	@$(call echo_yellow, "--> Starting server to preview storybook locally...")
	npx http-server $(dist) -p $(preview_port)
