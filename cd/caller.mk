cd-build-package:
	@$(call echo_yellow, "--> Building package...")
	@npx vite build

cd-build-storybook:
	@$(call echo_yellow, "--> Building Storybook...")
	@$(run) $(npx_s) build --docs -o $(dist)