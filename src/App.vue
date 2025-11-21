<script setup lang="ts"> 
import { RouterLink } from 'vue-router';
import { ROUTES } from './router/config';
</script>

<template>
  <div>
    
    <router-view />
    <div class="flex gap-1 text-green-500 absolute bottom-3 left-3">
<RouterLink :to="ROUTES.INDEX" class="border-r-2 px-1">index</RouterLink>
<RouterLink :to="ROUTES.SIGN_IN" class="border-r-2 px-1">sign-in</RouterLink>
<RouterLink :to="ROUTES.SIGN_UP" class="border-r-2 px-1">sign-up</RouterLink>
<RouterLink :to="ROUTES.PASSWORD_RECOVERY" class="border-r-2 px-1">pass-recovery</RouterLink>
<RouterLink :to="ROUTES.PASSWORD_RESET" class="border-r-2 px-1">pass-reset</RouterLink>
<RouterLink :to="ROUTES.OTP_CHECK" class="border-r-2 px-1">otp-check</RouterLink>
<RouterLink :to="ROUTES.PROFILE" class="border-r-2 px-1">profile</RouterLink>
    </div>
  </div>
</template>

<style scoped></style>
