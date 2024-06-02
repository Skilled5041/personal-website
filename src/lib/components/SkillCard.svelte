<script lang="ts">
	import Icon from "@iconify/svelte";

	export let text: string;
	export let logo: string;
</script>

<div
	class="border-2 border-primary-500 rounded-xl bg-primary-900 min-w-32 md:min-w-36 lg:min-w-40 lg:py-12 md:py-10 px-12 mx-2 py-8 flex flex-col items-center gap-4 animation"
>
	<Icon icon={logo} />
	<h1 class="text-md md:text-lg lg:text-xl">{text}</h1>
</div>

<style>
	div :global(svg) {
		font-size: 54px;
	}

	@media (min-width: 768px) {
		div :global(svg) {
			font-size: 64px;
		}
	}

	@media (min-width: 1024px) {
		div :global(svg) {
			font-size: 72px;
		}
	}

	.animation {
		transition: all 0.2s;
	}

	.animation:hover {
		transform: scale(1.05) rotateX(5deg) rotateY(5deg) perspective(1000px);
	}
</style>
