<script lang="ts">
  import globalVars from "../../../vars/GlobalVars";
</script>
<div class="footer text-center text-white">
  <p>{globalVars.pageMetaData.commitHash} - v{globalVars.version}</p>
  <p> © {globalVars.pageMetaData.yearUpdated} {globalVars.pageMetaData.copyWriteName} All Rights Reserved</p>
</div>

<style>
    .footer {
        background: url(https://ref.sebin-nyshkim.net/subtle-prism.svg) #0000a9;
        display: block;
        background-blend-mode: multiply;
        padding: max(1em, env(safe-area-inset-top)) 0 max(1em, env(safe-area-inset-bottom)) 0;
        box-sizing: border-box;
        width: 100%;

    }


</style>