import { serve } from "bun";

const server = serve({
	fetch() {
		return new Response("Not Found", {
			status: 404,
		});
	},
});

console.log(`Server started at ${server.url}`);
