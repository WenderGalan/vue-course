<template>
	<v-app>
		<app-menu/>
		<app-toolbar/>
		<v-content>
			<app-carousel/>
		</v-content>
		<app-footer/>
	</v-app>
</template>

<script>
	import AppFooter from "./componentes/template/AppFooter";
	import AppCarousel from "./componentes/widgets/AppCarousel"
	import AppToolbar from "./componentes/template/AppToolbar";
	import AppMenu from "./componentes/template/AppMenu";

	export default {
		components: {
			AppFooter,
			AppCarousel,
			AppToolbar,
			AppMenu
		}
	}
</script>
