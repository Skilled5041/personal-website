<script lang="ts">
	import Scene from "$lib/components/Scene.svelte";
	import { Canvas } from "@threlte/core";
	import SkillCard from "$lib/components/SkillCard.svelte";
</script>

<div class="flex">
	<div class="px-36 py-24 flex flex-col gap-12">
		<h1 class="pt-12 text-8xl font-bold spaced">Hey, I'm <span class="font-fancy gradient-animation">Testing!</span>
		</h1>
		<p class="text-4xl">I am a high school student who is passionate about fullstack development and open-source
			software.</p>
	</div>
	<div class="w-full">
		<Canvas>
			<Scene />
		</Canvas>
	</div>
</div>
<div class="m-24 card variant-ghost py-24">
	<h1 class="text-6xl text-center pb-12">My Skills</h1>
	<div class="flex place-content-evenly">
		<SkillCard logo="/logos/svelte.png" text="Svelte"/>
		<SkillCard logo="/logos/typescript.png" text="Typescript"/>
	</div>
</div>

<style>
    .font-fancy {
        font-family: "Hertine", cursive;
    }

    .spaced {
        line-height: 1.5;
    }

    .gradient-animation {
        background: linear-gradient(
                to right,
                #e0d3ea 40%,
                #b99afc 60%
        );
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        text-fill-color: transparent;
        background-size: 500% auto;
        animation: textShine 5s ease-in-out infinite alternate;
    }

    @keyframes textShine {
        0% {
            background-position: 0 50%;
        }
        100% {
            background-position: 100% 50%;
        }
    }
</style>