<script lang="ts">
	import globalVars from '../../vars/GlobalVars';
</script>

<div class="Footer">
	<p>
		v{globalVars.version} © {globalVars.pageMetaData.yearUpdated}
		{globalVars.pageMetaData.copyWriteName}
	</p>
</div>

<style>
	.Footer {
		background: #0000a9;
		display: block;
		background-blend-mode: multiply;
		padding: max(1em, env(safe-area-inset-top)) 0 max(1em, env(safe-area-inset-bottom)) 0;
		box-sizing: border-box;
		width: 100%;

		color: white;
		text-align: center;
	}
</style>
