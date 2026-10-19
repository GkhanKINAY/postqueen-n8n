const path = require('path');
const { task, src, dest } = require('gulp');
const {copyFile} = require('fs/promises');

task('build:icons', copyIcons);

async function copyIcons() {
	return copyFile('nodes/Postqueen/postqueen.svg', 'dist/nodes/Postqueen/postqueen.svg');
}
