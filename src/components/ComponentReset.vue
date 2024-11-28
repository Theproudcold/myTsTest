<template>
  <div class="flex gap-20">
    <span>a: {{ state1.a }}</span>
    <span>b: {{ state1.b }}</span>
    <span>c: {{ state1.c }}</span>
    <span>d: {{ state1.d }}</span>
    <el-space>
      <el-button
        type="primary"
        @click="state1.a++"
        >a++</el-button
      >
      <el-button
        type="primary"
        @click="state1.b++"
        >b++</el-button
      >
      <el-button
        type="primary"
        @click="state1.c.push(1)"
        >c push</el-button
      >
      <el-button
        type="primary"
        @click="state1.d = 1"
        >d add</el-button
      >
      <el-button @click="reset">重置</el-button>
    </el-space>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import {
  useResetTableRefFn,
  useResetTableRef,
  useResetTableReactive,
} from "@/hooks/useResetTable";
// const {state1,reset} = useResetTableRefFn(() => ({
//   a: 0,
//   b: 0,
//   c: [1, 2, 3],
// }));
// const {state1,reset} = useResetTableRef({
//   a: 0,
//   b: 0,
//   c: [1, 2, 3],
// });
const [state1, reset] = useResetTableReactive({
  a: 0,
  b: 0,
  c: [1, 2, 3],
});
</script>
<style lang="scss" scoped>
.flex {
  display: flex;
  flex-direction: column;
}
.gap-20 {
  gap: 20px;
}
</style>
