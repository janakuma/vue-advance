<template>
  <div>
    <tool-bar>

    </tool-bar>
    {{ url }}
    <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from '@/components/ToolBar.vue';

export default {
  components: { ToolBar },
  data() {
    return {
      url: new URL(import.meta.url).href,
    };
  },
}
</script>

