inside main folder on local machine
- git clone [repoURL]
- cd into github folder then:
	npm install
	-install all dependencies from package.json

	setup env file
	-create .env file at root
	-create variable KIOSK=1 
	-1 or 2 depending on kiosk. this will tie it to a specific paypad app

	npm run dev
	-serving on localhost:3232

- setup script to open app in fullscreen from startup