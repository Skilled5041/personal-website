<script>
	import {
		Area,
		Axis,
		Chart,
		Highlight,
		LinearGradient,
		RectClipPath,
		Svg,
		Tooltip
	} from "layerchart";
	import { scaleTime } from "d3-scale";

	export let data;
</script>
<div class="p-12">
	<div class="h-[300px] border border-surface-500 rounded">
		<Chart
			data={data.visitData.map((d) => ({ date: new Date(d.date), count: d.count })).sort((a, b) => a.date.getTime() - b.date.getTime())}
			x="date"
			xScale={scaleTime()}
			y="count"
			yDomain={[0, null]}
			yNice
			padding={{ top: 48, bottom: 24 }}
			tooltip={{ mode: "bisect-x" }}
			let:width
			let:height
			let:padding
			let:tooltip
		>
			<Svg>
				<LinearGradient class="bg-gradient-to-b from-secondary-500 to-surface-900" vertical let:url>
					<Area line={{ class: "stroke-[6] stroke-secondary-500 opacity-20 bg-gradient-to-b from-secondary-500 to-transparent" }} fill={url} fill-opacity="50%"/>
					<RectClipPath x={0} y={0} width={tooltip.data ? tooltip.x : width} {height} spring>
						<Area line={{ class: "stroke-[6] stroke-secondary-500" }} fill={url} />
					</RectClipPath>
				</LinearGradient>
				<Highlight points lines={{ class: "stroke-secondary-400 [stroke-dasharray:unset]" }} />
				<Axis placement="bottom" />
			</Svg>
			<Tooltip
				y={48}
				xOffset={4}
				variant="none"
				class="text-sm font-semibold text-primary leading-3"
				let:data
			>
				{data.count} visits
			</Tooltip>

			<Tooltip
				x="data"
				y={height + padding.top + 2}
				anchor="top"
				variant=" "
				class="text-sm font-semibold bg-primary text-primary-content leading-3 px-2 py-1 rounded whitespace-nowrap"
				let:data
			>
				{data.date.toISOString().split("T")[0]}
			</Tooltip>
		</Chart>
	</div>
</div>
