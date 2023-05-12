install: ;@echo "Installing....."; \
	npm ci

 brain-games: ;@echo "Run brain-games....."; \
    node bin/brain-games.js

 publish: ;@echo "Publish brain-games....."; \
    npm publish --dry-run