<script lang="ts">
	import { T, useTask } from "@threlte/core";
	import { Edges, interactivity, MeshLineGeometry, MeshLineMaterial } from "@threlte/extras";
	import { spring } from "svelte/motion";
	import { CatmullRomCurve3, Vector3 } from "three";

	interactivity();
	const scale = spring(1.2);
	let rotation = 0;
	let speedMultiplier = 1;
	useTask((delta) => {
		rotation += delta * 0.5 * speedMultiplier;
		dashOffset += delta / 2;
		width = Math.sin(dashOffset * 2) / 5 + 0.3;
		lineOpacity = Math.sin(dashOffset) / 2 + 0.5;
		dashArray = Math.sin(dashOffset / 2) * 0.35 + 0.7;
	});

	let hovering = false;

	const onPointerEnter = () => {
		hovering = true;
		scale.set(1.4);
		speedMultiplier = 3;
	};

	const onPointerLeave = () => {
		hovering = false;
		scale.set(1.2);
		speedMultiplier = 1;
	};

	const curve = new CatmullRomCurve3([
		new Vector3(-3, 0, 0),
		new Vector3(2, 4, -4),
		new Vector3(2, -1, 4),
		new Vector3(4, 0, 0)
	]);

	const points = curve.getPoints(100);

	let width = 0.5;
	let dashOffset = 0;
	let lineOpacity = 1;
	let dashArray = 0.5;
</script>

<T.PerspectiveCamera
	makeDefault
	position={[10, 10, 10]}
	on:create={({ ref }) => {
    	ref.lookAt(0, 1, 0);
 	}}
/>

<T.DirectionalLight position={[0, 10, 10]} intensity={5} />
<T.AmbientLight intensity={1} />

<T.Mesh
	rotation.y={-rotation}
	rotation.x={-rotation}
	scale={$scale}>
	<MeshLineGeometry {points} />
	<MeshLineMaterial
		width={width / 2}
		{dashOffset}
		dashArray={dashArray}
		dashRatio={0.5}
		color={0x8f71d1}
		opacity={lineOpacity}
		transparent
	/>
</T.Mesh>

<T.Mesh
	rotation.y={rotation}
	rotation.x={rotation}
	position.y={1}
	scale={$scale}
	on:pointerenter={onPointerEnter}
	on:pointerleave={onPointerLeave}
>
	<T.OctahedronGeometry args={[2, 0]} />
	<T.MeshStandardMaterial color={0x4B3A70}/>
	<Edges color="white"/>
</T.Mesh>
