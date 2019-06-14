messenger-dark-theme.zip: MessengerDarkTheme/styles.css MessengerDarkTheme/manifest.json
	cd MessengerDarkTheme; \
	zip -ur messenger-dark-theme.zip *; \
	cd ..; \
	mv MessengerDarkTheme/messenger-dark-theme.zip messenger-dark-theme.zip
