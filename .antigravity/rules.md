# Antigravity Execution Rules for VitalFlw

1. **Server Actions First:** Whenever building forms or data mutations in Next.js 14+, always default to using React Server Actions instead of creating separate API route handlers. Place server actions in an `actions/` directory.

2. **Tailwind & Shadcn Strictness:** Never write custom CSS modules or inline styles. Exclusively use Tailwind CSS utility classes. If a complex UI element is needed, check the shadcn MCP server first before attempting to build it from scratch.