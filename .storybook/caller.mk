p=storybook-

npx_s=npx storybook

dev_port=39047
preview_port=8080
dist=dist/storybook

$(p)dev:
	$(run) $(npx_s) dev --no-open -p $(dev_port)

$(p)build:
	$(run) $(npx_s) build --docs -o $(dist)

$(p)preview-build-locally:
	npx http-server $(dist) -p $(preview_port)

$(p)deploy:
	npx gh-pages -d $(dist) -u "github-actions-bot <support+actions@github.com>"