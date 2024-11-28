import { reactive, ref } from "vue";
export function useResetTableRefFn<T>(cb: () => T) {
  const state = ref(cb());
  const reset = () => {
    state.value = cb();
  };
  return {
    state,
    reset,
  };
}
/**
 * 深拷贝
 * @param value 需要拷贝的值
 * @return 拷贝后的值
 */
function defaultClone(value: any) {
  if (value === null || typeof value !== "object") {
    return value;
  }
  return JSON.parse(JSON.stringify(value));
}
export function useResetTableRef<T>(value: T, clone = defaultClone) {
  const initialValue = clone(value);
  const state = ref(value);
  const reset = () => {
    state.value = clone(initialValue);
  };
  return {
    state,
    reset,
  };
}
export function useResetTableReactive<T extends object>(
  value: T,
  clone = defaultClone
) {
  const state = reactive(clone(value)) as T;
  const reset = () => {
    Object.keys(state).forEach(key => delete state[key as keyof T]);
    Object.assign(state, clone(value));
  };
  return [state, reset] as const;
}
