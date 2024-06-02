<script lang="ts">
	export let text: string;
	export let logo: string;
</script>

<div class="card variant-ghost-primary w-44 px-12 py-12 flex flex-col items-center gap-4">
	<img src={logo} alt="logo" class="object-contain h-20 w-full" />
	<h1 class="text-2xl">{text}</h1>
</div>