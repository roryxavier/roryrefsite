<script>
  export let title;
</script>

<div class="card">
  <h3 class="title" style="padding: 20px">{title}</h3>
  <div class="border-b-4 border-yellow-200"></div>
  <div class="content" style="padding: 20px">
    <slot/>

  </div>
</div>

<style>
    .card {
        background: linear-gradient(120deg, #0f4c9c,#6BC5FA);
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
        /*padding: 20px;*/
    }

    .title {
        color: white;
        font-weight: bold;
        font-size: 24px;
        margin: 0;
    }

    .content {
        color: white;
        /*font-size: 16px;*/
        /*opacity: 0.7;*/
        /*margin: 0;*/
    }
</style>
