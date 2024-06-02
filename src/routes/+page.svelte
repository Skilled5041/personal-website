<script lang="ts">
	import Scene from "$lib/components/Scene.svelte";
	import { Canvas } from "@threlte/core";
	import SkillCard from "$lib/components/SkillCard.svelte";
	import Icon from "@iconify/svelte";

	let carouselElement: HTMLDivElement;

	function multiColumnLeft(): void {
		let x = carouselElement.scrollWidth;
		if (carouselElement.scrollLeft !== 0)
			x = carouselElement.scrollLeft - carouselElement.clientWidth;
		carouselElement.scroll(x, 0);
	}

	function multiColumnRight(): void {
		let x = 0;
		// -1 is used because different browsers use different methods to round scrollWidth pixels.
		if (
			carouselElement.scrollLeft <
			carouselElement.scrollWidth - carouselElement.clientWidth - 1
		)
			x = carouselElement.scrollLeft + carouselElement.clientWidth;
		carouselElement.scroll(x, 0);
	}
</script>

<div class="flex flex-col xl:flex-row" id="top">
	<div class="px-16 flex flex-col gap-12 md:px-32 md:py-8 xl:px-0 xl:pl-32">
		<h1
			class="pt-12 text-6xl font-bold spaced overflow-hidden md:text-8xl lg:text-8xl 2xl:text-9xl"
		>
			Hey, I'm <br /><span class="font-fancy gradient-animation">Aaron Ye!</span>
		</h1>
		<p class="text-xl md:text-3xl xl:text-4xl">
			I am a high school student who is passionate about fullstack development and open-source
			software.
		</p>
	</div>
	<div class="w-full min-h-96 max-w-screen-lg 2xl:pt-24">
		<Canvas>
			<Scene />
		</Canvas>
	</div>
</div>
<div class="md:py-12 xl:py-24 2xl:py-32" />
<div id="skills" />
<div
	class="flex flex-col content-center items-center py-12 md:m-12 md:py-12 card variant variant-ghost m-4"
>
	<h1 class="text-5xl text-center pb-8 md:text-5xl lg:text-6xl">My Skills</h1>
	<div class="flex gap-4 items-center px-4">
		<button
			type="button"
			class="btn-icon variant-glass-primary arrows"
			on:click={multiColumnLeft}
		>
			<Icon icon="lucide:move-left" />
		</button>
		<div
			bind:this={carouselElement}
			class="snap-x snap-mandatory max-w-44 md:max-w-md lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl scroll-smooth flex py-2 overflow-x-auto border-tertiary-600 rounded-2xl border-2"
		>
			<SkillCard logo="logos:svelte-icon" text="Svelte" />
			<SkillCard logo="logos:typescript-icon" text="Typescript" />
			<SkillCard logo="logos:javascript" text="Javascript" />
			<SkillCard logo="logos:python" text="Python" />
			<SkillCard logo="logos:java" text="Java" />
			<SkillCard logo="logos:linux-tux" text="Linux" />
			<SkillCard logo="logos:supabase-icon" text="Supabase" />
			<SkillCard logo="logos:git-icon" text="Git" />
			<SkillCard logo="logos:postgresql" text="PostgreSQL" />
			<SkillCard logo="devicon:cplusplus" text="C++" />
		</div>
		<button
			type="button"
			class="btn-icon variant-glass-primary arrows"
			on:click={multiColumnRight}
		>
			<Icon icon="lucide:move-right" />
		</button>
	</div>
</div>

<div class="m-8 pt-12 md:pt-16 md:pb-8">
	<h1 class="text-4xl text-center pb-2 md:text-4xl lg:text-5xl" id="socials">Socials</h1>
	<hr />
	<div class="flex justify-center gap-12 pt-8">
		<a href="https://www.linkedin.com/in/aaron-ye-7574872a0/" class="social-icon">
			<Icon icon="devicon-plain:linkedin" />
		</a>
		<a href="https://www.linkedin.com/in/aaron-ye-7574872a0/" class="social-icon">
			<Icon icon="bi:github" />
		</a>
		<a href="mailto:aaronye1001@gmail.com" class="social-icon">
			<Icon icon="mdi:email" />
		</a>
	</div>
</div>

<style>
	div :global(.arrows) {
		font-size: 18px;
	}

	div :global(.social-icon) {
		font-size: 36px;
	}

	@media (min-width: 768px) {
		div :global(.social-icon) {
			font-size: 48px;
		}
	}

	@media (min-width: 1024px) {
		div :global(.social-icon) {
			font-size: 64px;
		}
	}

	.font-fancy {
		font-family: "Hertine", cursive;
	}

	.spaced {
		line-height: 1.5;
	}

	.gradient-animation {
		opacity: 0;
		background: linear-gradient(to right, #e0d3ea 40%, #b99afc 60%);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		text-fill-color: transparent;
		background-size: 500% auto;
		animation:
			textShine 5s ease-in-out infinite alternate,
			reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) 0.5s;
		display: inline-block;
		animation-fill-mode: forwards;
	}

	@keyframes textShine {
		0% {
			background-position: 0 50%;
		}
		100% {
			background-position: 100% 50%;
		}
	}

	@keyframes reveal {
		0% {
			opacity: 0;
			transform: translateY(100%);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
