import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import test from 'node:test';

// Run after `npm run build` to check the actual generated routes.
test('Introduction to Psychology homepage link resolves to the course index', () => {
  const homepage = readFileSync('dist/index.html', 'utf8');
  assert.match(homepage, /href="\/psychology-introduction\/"/);
  const coursePath = 'dist/psychology-introduction/index.html';
  assert.ok(existsSync(coursePath), 'Homepage course link must have a generated index page');
  const course = readFileSync(coursePath, 'utf8');
  assert.match(course, /Základní informace/);
  assert.match(course, /Psychologie je věda/);
  assert.match(course, /href="\/psychology-introduction\/1-introduction-history\/"/);
});

test('Previous Introduction to Psychology index URL redirects to the course root', () => {
  const redirect = readFileSync('dist/psychology-introduction/0-index/index.html', 'utf8');
  assert.match(redirect, /http-equiv="refresh"/i);
  assert.match(redirect, /url=\/psychology-introduction\//);
});
