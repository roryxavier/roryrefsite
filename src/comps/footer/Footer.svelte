<script lang="ts">
	import globalVars from '@/vars/GlobalVars';
</script>

<div class="footer pt-4 pb-4 w-full text-center text-white bg-blue-800">
	<p>
		v{globalVars.version} © {globalVars.pageMetaData.yearUpdated}
		{globalVars.pageMetaData.copyWriteName}
	</p>
	<p>Created by Rory 🐺 & Jimmy 🦊</p>
</div>

<style scoped lang="scss">
	.footer {
		z-index: 2;
		height: var(--footer-height);
	}
</style>
