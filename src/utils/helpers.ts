// Shared utility functions for the pSEO project

/**
 * Creates a URL-safe slug from text
 */
export function createSlug(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove accents
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/[^a-z0-9-]/g, '') // Remove special characters
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
}

/**
 * Generates SEO-optimized title from profession, style, and action
 */
export function generateTitle(profesion: string, estilo: string, accion: string): string {
  const profesionCapitalized = profesion.charAt(0).toUpperCase() + profesion.slice(1);
  const estiloCapitalized = estilo.charAt(0).toUpperCase() + estilo.slice(1);
  const accionCapitalized = accion.charAt(0).toUpperCase() + accion.slice(1);
  
  return `AI Image of ${profesionCapitalized} ${estiloCapitalized} ${accionCapitalized} | Smart Prompt Guide`;
}

/**
 * Style-specific technical details for prompt generation
 */
export const styleDetails: Record<string, string> = {
  'cyberpunk': 'neon lighting, chromatic aberration, futuristic city background, cyan and magenta tones',
  'photorealistic': 'soft natural lighting, 85mm lens, bokeh, skin texture details, Kodak Portra 400',
  'realista': 'soft natural lighting, 85mm lens, bokeh, skin texture details, Kodak Portra 400',
  'office': 'fluorescent office lighting, wide-angle lens, corporate environment, clean white walls',
  'studio': 'rembrandt lighting, solid grey background, sharp focus, fashion photography',
  'minimalist': 'soft diffused lighting, negative space, clean composition, muted color palette',
  'vintage': 'warm film grain, 35mm film aesthetic, sepia tones, vintage color grading',
  'futuristic': 'holographic elements, LED accent lighting, sci-fi atmosphere, cool color temperature',
  'corporate': 'professional studio lighting, executive environment, sharp focus, business aesthetic',
  'artistic': 'dramatic chiaroscuro lighting, creative composition, artistic framing, gallery quality',
  'professional': 'even studio lighting, professional backdrop, sharp focus, commercial photography',
  'modern': 'contemporary lighting design, sleek environment, high contrast, modern aesthetic',
  'classic': 'timeless lighting, elegant composition, traditional framing, classic photography style',
  'industrial': 'raw industrial lighting, concrete textures, urban decay aesthetic, gritty atmosphere',
  'natural': 'golden hour lighting, outdoor environment, natural textures, organic composition',
  'urban': 'street photography lighting, cityscape background, urban textures, contemporary style'
};

/**
 * Generates optimized AI image prompt using master template
 */
export function generatePrompt(profesion: string, estilo: string, accion: string): string {
  const technicalDetails = styleDetails[estilo.toLowerCase()] || 'professional lighting, sharp focus, high quality';
  return `Cinematic shot of a ${profesion} ${accion}. ${technicalDetails}. Shot on Sony A7R IV, 8k resolution.`;
}

/**
 * Capitalizes first letter of a string
 */
export function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
