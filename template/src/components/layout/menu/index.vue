<template>
  <a-layout-sider
    :theme="config.theme"
    :width="220"
    collapsible
    breakpoint="xl"
    :collapsed="collapsed"
    @collapse="onCollapse"
  >
    <div class="logo" @click="gohome">
      <svg
        viewBox="0 0 128 128"
        width="24"
        height="24"
      >
        <path
          fill="#42b883"
          d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"
        ></path>
        <path
          fill="#35495e"
          d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z"
        ></path>
      </svg>
      vue3 typescript
    </div>
    <div class="menu-demo">
      <a-menu class="mmenu" :default-open-keys="openkey">
        <template v-for="item in list" :key="item.key">
          <mItem :source="item" />
        </template>
      </a-menu>
    </div>
  </a-layout-sider>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Message } from "@arco-design/web-vue";
import { useConfig } from "../../../stores/config";
import mItem from "./item.vue";

export default defineComponent({
  components: {
    mItem,
  },
  setup() {
    const config = useConfig();
    const collapsed = ref(false);
    const onCollapse = (val: boolean, type: string) => {
      const content = type === "responsive" ? "触发响应式收缩" : "点击触发收缩";
      Message.info({
        content,
        duration: 2000,
      });
      collapsed.value = val;
    };
    return {
      config,
      collapsed,
      onCollapse,
      openkey: ["0"],
      list: [
        {
          key: 1,
          name: "Todo",
          icon: "apps",
          href: "/todo",
        },
        {
          key: 2,
          name: "arco-design",
          icon: "bug",
          href: "/test",
        },
        {
          key: 3,
          name: "其他",
          icon: "bulb",
          children: [
            {
              key: "3-1",
              name: "404页面",
              href: "/test3",
            },
          ],
        },
      ],
    };
  },
  methods: {
    gohome() {
      this.$router.push("/");
    },
  },
});
</script>
