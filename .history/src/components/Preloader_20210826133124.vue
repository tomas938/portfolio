<template>
	<transition name="fade">
		<div class="preloader" v-if="show">
			<svg>
				<g>
					<path d="M 50,100 A 1,1 0 0 1 50,0" />
				</g>
				<g>
					<path d="M 50,75 A 1,1 0 0 0 50,-25" />
				</g>
				<defs>
					<linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
						<stop offset="0%" style="stop-color:#FF56A1;stop-opacity:1" />
						<stop offset="100%" style="stop-color:#FF9350;stop-opacity:1" />
					</linearGradient>
				</defs>
			</svg>
			<div class="desc">
				<p>.Portfolio</p>
				<div class="circles">
					<div class="circle"></div>
					<div class="circle"></div>
					<div class="circle"></div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
export default {
	name: "preloader",
	data() {
		return {
			show: true,
		};
	},
	mounted() {
		if (this.show) this.showToggle();
	},
	methods: {
		showToggle() {
			setTimeout(() => {
				this.show = false;
			}, 2500);
		},
	},
};
</script>

<style lang="scss" scoped>
.preloader {
	overflow: hidden;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: fixed;
	width: 100%;
	height: 100%;
	background-color: #001220;
	z-index: 9999;
}
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.8s;
}
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
$transition-duration: 2s;
$path-length: 157px;
svg {
	overflow: visible;
	width: 100px;
	height: 150px;
	g {
		animation: slide $transition-duration linear infinite;
		&:nth-child(2) {
			animation-delay: $transition-duration / 4;
			path {
				animation-delay: $transition-duration / 4;
				stroke-dasharray: 0px $path-length + 1;
				stroke-dashoffset: 1px;
			}
		}
	}
	path {
		stroke: url(#gradient);
		stroke-width: 20px;
		stroke-linecap: round;
		fill: none;
		stroke-dasharray: 0 $path-length;
		stroke-dashoffset: 0;
		animation: escalade $transition-duration cubic-bezier(0.8, 0, 0.2, 1)
			infinite;
	}
}
@keyframes slide {
	0% {
		transform: translateY(-50px);
	}
	100% {
		transform: translateY(50px);
	}
}
@keyframes escalade {
	0% {
		stroke-dasharray: 0 $path-length;
		stroke-dashoffset: 0;
	}
	50% {
		stroke-dasharray: $path-length - 1 $path-length;
		stroke-dashoffset: 0;
	}
	100% {
		stroke-dasharray: $path-length - 1 $path-length;
		stroke-dashoffset: -($path-length - 1);
	}
}
.desc {
	display: flex;
	align-items: flex-end;
	gap: 1rem;
}
p {
	color: #fff;
	font-size: 8rem;
	margin-top: 3rem;
	font-weight: bold;
}
.circles {
	display: flex;
	margin-top: 1rem;
	.circle {
		width: 1.5rem;
		height: 1.5rem;
		margin: 0.75rem;
		background-color: rgb(238, 130, 58);
		border-radius: 50%;
		animation: scaleIn 1s infinite;
		transform: scale(0);
		&:nth-child(1) {
			animation-delay: 0.2s;
		}
		&:nth-child(2) {
			animation-delay: 0.4s;
		}
		&:nth-child(3) {
			animation-delay: 0.6s;
		}
	}
}
@keyframes scaleIn {
	0% {
		transform: scale(0);
	}
	50% {
		transform: scale(1);
	}
	100% {
		transform: scale(0);
	}
}
</style>
