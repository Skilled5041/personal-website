<script lang="ts">
	import { page } from "$app/stores";

	const messageToCode: Record<string, string> = {
		"Not Found": "404"
	};
</script>

<div class="flex justify-center text-center h-full">
	<h1 class="text-6xl md:text-8xl pt-48 md:pt-64">
		{messageToCode[$page.error?.message ?? ""] || ""}<br />{$page.error?.message}!
	</h1>
</div>
