<template>
  <div>
    <ul>
      <li v-for="(item, index) in items" :key="index">
        <ShareableItem class="px-5 md:px-8" :title="item.title" :link="item.route" :images="item.images" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {
    ShareableItem: () => import("@/components/ShareableItems/ShareableItem")
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style>
</style>
