<template>
    <div class="citacao">
<!--        {{texto}}-->
      <slot></slot>
    </div>
</template>

<script>
export default {
 /*props:['texto']*/
}
</script>

<style scoped>
    .citacao {
        border: 1px solid #DDD;
        background-color: rgba(0, 0, 0, .1);
        padding: 25px;
        max-width: 450px;
    }
</style>
