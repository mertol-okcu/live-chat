<template>
  <nav>
    <div v-if="user">
      <p>Hey there {{ user.displayName }}</p>
      <p class="email">Currently logged in as {{ user.email }}</p>
    </div>
    <button @click="handleClick">Log out</button>
  </nav>
</template>

<script>
import { useRouter } from "vue-router";
import useLogout from "../composables/useLogout.js";
import getUser from "../composables/getUser.js";

export default {
  setup() {
    const { logout, error } = useLogout();
    const { user } = getUser();

    const router = useRouter();

    const handleClick = async () => {
      await logout();
      if (!error.value) {
        router.push({ name: "Welcome" });
      }
    };

    return { handleClick, user };
  },
};
</script>

<style>
nav {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav p {
  margin: 2px auto;
  font-size: 16px;
  color: #444;
}
nav p.email {
  font-size: 14px;
  color: #999;
}
</style>