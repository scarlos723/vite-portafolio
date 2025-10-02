/**
 * Utilidades para detectar soporte de WebGL y manejar fallbacks
 */

export interface WebGLCapabilities {
  webgl: boolean;
  webgl2: boolean;
  renderer?: string;
  vendor?: string;
  error?: string;
}

/**
 * Detecta las capacidades de WebGL del navegador
 */
export function detectWebGL(): WebGLCapabilities {
  const canvas = document.createElement("canvas");
  const result: WebGLCapabilities = {
    webgl: false,
    webgl2: false,
  };

  try {
    // Probar WebGL 1.0
    const gl =
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

    if (gl && gl instanceof WebGLRenderingContext) {
      result.webgl = true;

      // Obtener información del renderer
      const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
      if (debugInfo) {
        result.renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
        result.vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
      }

      // Probar WebGL 2.0
      const gl2 = canvas.getContext("webgl2");
      if (gl2 && gl2 instanceof WebGL2RenderingContext) {
        result.webgl2 = true;
      }
    }
  } catch (error) {
    result.error =
      error instanceof Error ? error.message : "Unknown WebGL error";
    console.warn("WebGL detection failed:", error);
  }

  return result;
}

/**
 * Verifica si el contexto WebGL es seguro para usar
 */
export function isWebGLSafe(): boolean {
  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

    if (!gl) {
      console.log("WebGL not available");
      return false;
    }

    console.log("WebGL is available and safe to use");
    return true;
  } catch (error) {
    console.warn("Error checking WebGL:", error);
    return false;
  }
}

/**
 * Intenta crear un contexto WebGL de forma segura
 */
export function createSafeWebGLContext(
  canvas: HTMLCanvasElement
): WebGLRenderingContext | WebGL2RenderingContext | null {
  const contextOptions = {
    alpha: true,
    antialias: true,
    powerPreference: "default" as WebGLPowerPreference, // 'default' es más estable que 'high-performance'
    failIfMajorPerformanceCaveat: false, // Permitir incluso con bajo rendimiento
    preserveDrawingBuffer: false,
    premultipliedAlpha: false,
    stencil: false, // Reducir uso de memoria
    depth: true,
  };

  try {
    console.log("Attempting to create WebGL context...");

    // Intentar WebGL 2.0 primero
    const gl2 = canvas.getContext("webgl2", contextOptions);
    if (gl2 && gl2 instanceof WebGL2RenderingContext) {
      console.log("WebGL 2.0 context created successfully");
      return gl2;
    }

    // Fallback a WebGL 1.0
    const gl =
      canvas.getContext("webgl", contextOptions) ||
      canvas.getContext("experimental-webgl", contextOptions);

    if (gl && gl instanceof WebGLRenderingContext) {
      console.log("WebGL 1.0 context created successfully");
      return gl;
    }

    console.warn("No WebGL context could be created");
    return null;
  } catch (error) {
    console.warn("Failed to create WebGL context:", error);
    return null;
  }
}

/**
 * Log información de debug sobre WebGL
 */
export function logWebGLInfo(): void {
  const capabilities = detectWebGL();
  console.log("WebGL Capabilities:", {
    webgl: capabilities.webgl,
    webgl2: capabilities.webgl2,
    renderer: capabilities.renderer,
    vendor: capabilities.vendor,
    safe: isWebGLSafe(),
  });
}
