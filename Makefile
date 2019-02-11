default: app/secrets.js test

app/secrets.js: app/secrets.js.template
	cp app/secrets.js.template app/secrets.js

test:
	npm test

setup:
	npm install
	rm -rf node_modules/*/.git
	echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p

clean:

veryclean:
