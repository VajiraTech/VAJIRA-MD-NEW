// Source: https://github.com/puppeteer/puppeteer/blob/main/typescript-if-required.js
// https://gtihub.com/BochilTeam/scraper/master/blob/scripts/compile-typescript.js
const child_process = require("child_process");
const fs = require("fs");
const path = require("path");

const { promisify } = require("util");
const exec = promisify(child_process.exec);
const fsAccess = promisify(fs.access);

const fileExists = async (filePath) =>
	fsAccess(filePath)
		.then(() => true)
		.catch(() => false);

const libPath = path.join(__dirname, "../lib");

async function compileTypeScript() {
	const out = await exec("npm run build:all").catch((error) => {
		console.error(error);
		process.exit(1);
	});
	if (out.stdout.trim()) console.log(out.stdout);
	if (out.stderr.trim()) console.error(out.stderr);
}

async function compileTypeScriptIfRequired() {
	const typesPath = path.join(libPath, "@types");
	const libExists = await fileExists(libPath);
	const typesExists = await fileExists(typesPath);
	if (libExists && typesExists) return;

	await compileTypeScript();
}

if (require.main === module) compileTypeScriptIfRequired();
