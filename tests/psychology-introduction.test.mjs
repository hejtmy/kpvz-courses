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

test('Exercises are accessible from Introduction to Psychology with a shared course card', () => {
  const homepage = readFileSync('dist/index.html', 'utf8');
  assert.doesNotMatch(homepage, /href="\/seminar-psychology\/"/);
  const course = readFileSync('dist/psychology-introduction/index.html', 'utf8');
  assert.match(course, /id="cvika"/);
  for (const lesson of ['3-perception', '4-learning-memory']) {
    assert.ok(course.includes(`href="/psychology-introduction/${lesson}/#cvika"`));
  }
  assert.doesNotMatch(course, /href="\/seminar-psychology\//);
  assert.match(course, /href="\/psychology-architecture\/"/);
});

test('Exercises render Canva presentations below the matching lecture presentations', () => {
  const presentations = [
    ['3-perception', 'DAHYW6Aa5M4/TmoPpJAFNy3KyThkTivPOw', 'DAHWHOHsSqw/DLIHCul1asrCpvE76rHwsQ'],
    ['4-learning-memory', 'DAHY72V-cPQ/mkKt5m-uB3GDgRCVF8rzPg', 'DAHYqOPj0-Y/406PlN_w4CWfE6Z10PTRKQ'],
  ];
  for (const [lesson, lectureDesign, exerciseDesign] of presentations) {
    const page = readFileSync(`dist/psychology-introduction/${lesson}/index.html`, 'utf8');
    assert.match(page, /<h2[^>]*id="presentace"/);
    const sectionIndex = page.indexOf('<h2 id="cvika"');
    assert.ok(sectionIndex !== -1, 'Lesson must have an exercises section');
    const lectureIndex = page.indexOf(`src="https://www.canva.com/design/${lectureDesign}/view?embed"`);
    const exerciseIndex = page.indexOf(`src="https://www.canva.com/design/${exerciseDesign}/view?embed"`);
    assert.ok(lectureIndex !== -1 && lectureIndex < sectionIndex);
    assert.ok(exerciseIndex > sectionIndex);
    assert.equal((page.match(/<iframe/g) || []).length, 2);
    assert.doesNotMatch(page, /:::(presentation|canva)/);
  }
});

test('Previous exercise URLs redirect to the matching course sections', () => {
  const redirects = [
    ['', '/psychology-introduction/#cvika'],
    ['1-lekce/', '/psychology-introduction/3-perception/#cvika'],
    ['2-lekce/', '/psychology-introduction/4-learning-memory/#cvika'],
  ];
  for (const [path, target] of redirects) {
    const page = readFileSync(`dist/seminar-psychology/${path}index.html`, 'utf8');
    assert.match(page, /http-equiv="refresh"/i);
    assert.ok(page.includes(`url=${target}`));
  }
});
