[@repo/sdk](../index.md) / printWorkingDirectory

# Function: printWorkingDirectory()

> **printWorkingDirectory**(`cwd?`): `string`

Defined in: [tools/review.ts:14](https://github.com/mreedr/MCP-Claude-Tools/blob/8e9d1c33d86b11f75a9cacb048a87c3620f50d8f/packages/sdk/src/tools/review.ts#L14)

Runs the Claude CLI to review the current git diff (staged + unstaged) in the project.
Requires the Claude CLI to be installed and available on PATH.

## Parameters

### cwd?

`string` = `...`

Working directory for git and Claude (defaults to current process cwd)

## Returns

`string`

The spawn result; check result.status for exit code
