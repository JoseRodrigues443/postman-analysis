test:
	npm run test

build:
	cp .env.template .env
	npm run build

clean:
	npm run clean:all

lint:
	npm run lint

run:
	npm run console

dev:
	tsc -w

commit:
	npm run commit

help:
	npx ts-node src/index.ts -h
