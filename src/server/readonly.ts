// Declarations for Node globals without importing node:process
declare const process: { argv: string[] };
export const READONLY = process.argv.includes('--readonly');

export function assertWritable(toolName: string): void {
  if (READONLY) {
    throw new Error(`Tool "${toolName}" is disabled in read-only mode`);
  }
}


