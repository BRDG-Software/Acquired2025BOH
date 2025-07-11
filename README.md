BOH PC SETUP

1. install node v22.17.0 (or more recent)
	-download windows 64bit installer from nodejs website
	-run installer, keeping all default settings

2. install git-2.50.1 (or more recent)
	-download windows 64bit install from git website
	-run installer, keeping all default settings

3. verify with 
	-in cli: "node --version"
	-in cli: "git --version"

4. install app
	-in cli in local app folder: "git clone [thisRepoURL]"
	-cd into github folder then:
		-npm install
			this will install all dependencies from package.json

	setup env file
	-create .env file at root
	-create variable "KIOSK=[kiosk ID]"
		you can find the correct kiosk id by checking the database 
		this will tether this BOH hardware to the correct FOH paypad 


	-npm run dev
		serving on localhost:3232

5. enable the app to run as a process on startup
	-install pm2 (node process manager)


	POLLTIME_STOCK=10000
POLLTIME_ORDER=10000