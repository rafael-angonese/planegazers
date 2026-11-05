/**
 * PRNG determinístico (mulberry32).
 *
 * As cenas 3D precisam de valores "aleatórios" para posições, cores e rotações,
 * mas `Math.random()` durante o render é impuro: viola as regras do React
 * Compiler (`react-hooks/purity`) e produz resultados instáveis a cada
 * re-render. Semeando o gerador obtemos os mesmos valores de forma estável.
 */
export function createRandom(seed: number) {
  let state = seed;

  return () => {
    state |= 0;
    state = (state + 0x6d2b79f5) | 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
