<script lang="ts">
	import "../app.postcss";
	import { storeHighlightJs, storePopup } from "@skeletonlabs/skeleton";

	// Highlight JS
	import hljs from "highlight.js/lib/core";
	import "highlight.js/styles/github-dark.css";
	import xml from "highlight.js/lib/languages/xml"; // for HTML
	import css from "highlight.js/lib/languages/css";
	import javascript from "highlight.js/lib/languages/javascript";
	import typescript from "highlight.js/lib/languages/typescript";
	import { arrow, autoUpdate, computePosition, flip, offset, shift } from "@floating-ui/dom";
	import type { MouseEventHandler } from "svelte/elements";
	import Icon from "@iconify/svelte";

	hljs.registerLanguage("xml", xml); // for HTML
	hljs.registerLanguage("css", css);
	hljs.registerLanguage("javascript", javascript);
	hljs.registerLanguage("typescript", typescript);
	storeHighlightJs.set(hljs);

	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	const scrollIntoView: MouseEventHandler<HTMLAnchorElement> = ({ target }) => {
		const el = document.querySelector(target?.getAttribute("href"));
		if (!el) return;
		el.scrollIntoView({
			behavior: "smooth"
		});
	};
</script>

<div class="layout">
	<nav class="flex justify-between p-4 bg-surface-800 sticky top-0 left-0 z-50">
		<a
			class="text-xl md:text-2xl lg:text-3xl fancy-text pl-2 lg:pl-4"
			href="/"
		>
			Aaron Ye
		</a>
		<div class="flex pr-2 lg:pr-4 gap-2">
			<a
				class="btn btn-sm md:btn-md variant-ghost-surface icons flex gap-1"
				href="/resume.pdf"
				target="_blank"
				rel="noreferrer"
			>
				<Icon icon="mdi:resume" />
				Resume
			</a>
			<a
				class="btn btn-sm md:btn-md variant-ghost-surface icons flex gap-1"
				href="#skills"
				target="_blank"
				rel="noreferrer"
				on:click|preventDefault={scrollIntoView}
			>
				<Icon icon="codicon:code" />
				Skills
			</a>
			<a
				class="btn btn-sm md:btn-md variant-ghost-surface icons flex gap-1"
				href="#socials"
				target="_blank"
				rel="noreferrer"
				on:click|preventDefault={scrollIntoView}
			>
				<Icon icon="mdi:contact" />
				Socials
			</a>
		</div>
	</nav>
	<div>
		<slot />
	</div>
	<footer
		class="m-2 pt-4 text-center items-center flex justify-between border-t-2 border-tertiary-800"
	>
		<a class="text-xs pl-2 lg:pl-8 md:text-lg" href="/stats">Stats</a>
		<span class="divider-vertical h-full hidden vdiv" />
		<h2 class="text-xs md:text-lg">
			Copyright © <br class="hidden copyright-br" />2024 Aaron Ye
		</h2>
		<span class="divider-vertical h-full hidden vdiv" />
		<div class="flex justify-center gap-4 pr-2 lg:pr-8 lg:gap-6">
			<a href="https://www.linkedin.com/in/aaron-ye-7574872a0/" class="contact-icon">
				<Icon icon="devicon-plain:linkedin" />
			</a>
			<a href="https://github.com/Skilled5041" class="contact-icon">
				<Icon icon="bi:github" />
			</a>
			<a href="mailto:aaronye1001@gmail.com" class="contact-icon">
				<Icon icon="mdi:email" />
			</a>
		</div>
	</footer>
</div>

<style>
    :global(.icons) {
        font-size: 12px;
    }

    :global(.contact-icon) {
        font-size: 24px;
    }

    @media (max-width: 767px) {
        .copyright-br {
            display: block;
        }

        .vdiv {
            display: block;
        }
    }

    @media (min-width: 768px) {
        div :global(.contact-icon) {
            font-size: 32px;
        }

        div :global(.icons) {
            font-size: 18px;
        }
    }

    @media (min-width: 1024px) {
        div :global(.contact-icon) {
            font-size: 36px;
        }

        div :global(.icons) {
            font-size: 22px;
        }
    }

    .fancy-text {
        font-family: "Hertine", cursive;
    }

    .layout {
        min-height: 100vh;
        margin: 0;
        display: grid;
        grid-template-rows: auto 1fr auto;
    }
</style>
