// noinspection JSUnusedGlobalSymbols

import * as fs from 'fs';
import BlogPost from "../types/blogPost";

const pathBase = './content';

const nameAll = () => {
  let files = fs.readdirSync(pathBase);
  let postURLs: string[] = [];
  files.forEach((file) => {
    postURLs.push(file.substring(0, file.lastIndexOf('.')));
  })
  return postURLs;
}

const parse = (postURL: string) => {
  if (!fs.existsSync(pathBase + '/' + postURL + '.json')) {
    console.error('A blog post using the URL "' + postURL + '" does not exist.');
  }
  return JSON.parse(fs.readFileSync(pathBase + '/' + postURL + '.json').toString()) as BlogPost;
}

export {nameAll, parse};