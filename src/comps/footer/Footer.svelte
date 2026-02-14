<script lang="ts">
	import { APP_VERSION, OWNER_NAME, YEAR_UPDATED } from '@/vars/meta';
</script>

<div class="footer pt-4 pb-4 w-full text-center text-white bg-blue-800">
	<p>
		v{APP_VERSION} © {YEAR_UPDATED}
		{OWNER_NAME}
	</p>
	<p>Created by Rory 🐺 & Jimmy 🦊</p>
</div>

<style scoped lang="scss">
	.footer {
		z-index: 2;
		height: var(--footer-height);
	}
</style>
