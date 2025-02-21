// Dieser Test überprüft, ob bestimmte Planeten in der Liste initialPlanets enthalten sind
// und ob ihre Eigenschaften korrekt sind.

import initialPlanets from './planets';

test('should contain Earth', () => {
  const earth = initialPlanets.find(planet => planet.name === 'Erde');
  expect(earth).toBeDefined();
  expect(earth.diameter).toBe(12742);
  expect(earth.gravity).toBe('9.8 m/s²');
  expect(earth.population).toBe(7800000000);
});

test('should contain Mars', () => {
  const mars = initialPlanets.find(planet => planet.name === 'Mars');
  expect(mars).toBeDefined();
  expect(mars.diameter).toBe(6779);
  expect(mars.gravity).toBe('3.7 m/s²');
  expect(mars.population).toBe(23432423);
});

test('should contain Jupiter', () => {
  const jupiter = initialPlanets.find(planet => planet.name === 'Jupiter');
  expect(jupiter).toBeDefined();
  expect(jupiter.diameter).toBe(139820);
  expect(jupiter.gravity).toBe('24.8 m/s²');
  expect(jupiter.population).toBe(3242343242);
});

test('should contain Saturn', () => {
  const saturn = initialPlanets.find(planet => planet.name === 'Saturn');
  expect(saturn).toBeDefined();
  expect(saturn.diameter).toBe(116460);
  expect(saturn.gravity).toBe('10.4 m/s²');
  expect(saturn.population).toBe(324242423);
});

