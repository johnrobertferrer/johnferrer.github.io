<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["copyrightDate"]),
  },
};
</script>

<template>
  <div class="flex justify-center items-center text-center">
    <div
      class="
        font-general-regular
        text-lg text-ternary-dark
        dark:text-ternary-light
      "
    >
      Copyright &copy; {{ copyrightDate }}. All Rights Reserved.
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
