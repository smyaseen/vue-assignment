<template>
  <div>
    <b-table striped :items="items" @row-clicked="rowClickHandler"></b-table>
  </div>
</template>

<script>
export default {
  props: {
    items: Array,
    rowClickHandler: Function,
  },
  methods: {
    myRowClickHandler() {
      console.log("click");
    },
  },
};
</script>
