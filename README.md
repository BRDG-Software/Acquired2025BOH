BOH PC SETUP

1. install node v22.17.0 (or more recent)
	-download windows 64bit installer from nodejs website
	-run installer, keeping all default settings

2. install git-2.50.1 (or more recent)
	-download windows 64bit install from git website
	-run installer, keeping all default settings

3. verify with 
	-in cli: "node -v"
	-in cli: "git -v"

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
	
	install pm2 (node process manager):
	-npm pm2 install -g
	-pm2 list (lists processes)
	-pm2 kill (kills all processes)

	build deployment server:
	-npm run build

	run the link in pm2-dev to preview it:
	-pm2-dev .output/server/index.mjs

	go live with production server:
	-pm2 start --name 'hat-boh-app' .output/server/index.mjs

npm run build
-build nuxt production server
-get the link to the index.mjs file and run it in pm2 dev
pm2-dev .output/server/index.mjs
confirm it's running properly

then run in pm2 in cluster mode
-pm2 start ./ecosystem.config.cjs --env production

more on cluster mode:
https://pm2.keymetrics.io/docs/usage/cluster-mode/

in a webrowser, access the api from: 
-http://localhost:3333/kiosk?kiosk=3&stocktime=5000&ordertime=5000
kiosk     = the id # of the corresponding paypad
stocktime = the millisecond interval to poll the backend for item availability
ordertime = the millisecond interval to poll the backend for orders
 