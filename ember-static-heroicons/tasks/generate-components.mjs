/* eslint-disable n/no-unpublished-import */
import * as fs from 'node:fs';
import { rimrafSync } from 'rimraf';

const workingPath = process.cwd();
const heroiconsPath = `${workingPath}/node_modules/heroicons`;
const componentsPath = `${workingPath}/src/components`;

const iconSets = [
  {
    inPath: '20/solid',
    outPath: 'solid-20',
    size: 20,
    variant: 'solid',
  },
  {
    inPath: '24/outline',
    outPath: 'outline-24',
    size: 24,
    variant: 'outline',
  },
  {
    inPath: '24/solid',
    outPath: 'solid-24',
    size: 24,
    variant: 'solid',
  },
];

function setupDirectories() {
  console.info('Deleting existing component files');
  rimrafSync(`${componentsPath}`);
}

function createGjsComponents(fileName, iconSet, svg) {
  const componentFilePath = `${componentsPath}/${
    iconSet.outPath
  }/${fileName.replace('.svg', '.gjs')}`;

  fs.writeFileSync(componentFilePath, `<template>${svg}</template>`);
}

function copySvgs(iconSet) {
  console.info('Creating components for iconSet', iconSet);

  fs.mkdirSync(`${componentsPath}/${iconSet.outPath}`, {
    recursive: true,
  });

  const files = fs.readdirSync(`${heroiconsPath}/${iconSet.inPath}`);

  for (const fileName of files) {
    const path = `${heroiconsPath}/${iconSet.inPath}/${fileName}`;
    const contents = fs.readFileSync(path, { encoding: 'utf8', flag: 'r' });
    createGjsComponents(fileName, iconSet, contents);
  }
}

setupDirectories();
for (const iconSet of iconSets) {
  copySvgs(iconSet);
}

console.info('Finished');
