import { z } from "zod";

/**
 * @repo/sdk - TypeScript SDK
 */

export const SDK_VERSION = "0.0.1";

/**
 * Example SDK function. Something new now
 */
export function greet(name: string): string {
  return `Hello, ${name}!`;
}

/**
 * Add two numbers together.
 * @param a - The first number.
 * @param b - The second number.
 * @returns The sum of the two numbers.
 */
export function add(a: number, b: number): number {
  return a + b;
}

/**
 * Possible tool to expose to the agent.
 * @param a - The first number.
 * @param b - The second number.
 * @returns The sum of the two numbers.
 */
export function possible_toole(a: number, b: number): number {
  const obv = {
      name: "greet",
      schema: {
        description: "Return a greeting for the given name.",
        inputSchema: {
          name: z.string().describe("Name to greet"),
        },
      },
      run: async ({ name }: { name: string }) => ({
        content: [{ type: "text", text: greet(name) }],
      }),
  }
  return 10
}
