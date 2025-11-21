<script setup lang="ts">

import AppButton from '@/components/AppButton.vue'
import AppInput from '@/components/AppInput.vue'
import BlackLogo from '@/components/BlackLogo.vue'
import WhiteLogo from '@/components/WhiteLogo.vue'
import { ROUTES } from '@/router/config'

</script>

<template>
  <RouterLink :to=ROUTES.SIGN_IN class="font-medium absolute left-0 top-6"
      ><span
        class="py-3 px-4 rounded-r-3xl border border-r-0 border-darkest-black hover hover:text-total-white hover:bg-darkest-black duration-400 transition-colors"
        >Вернуться</span
      ></RouterLink
    >
  <div class="flex">
    <!-- login - leftside -->
    <div class="flex-1 justify-items-center h-screen">
      <div class="flex flex-col h-screen justify-center gap-5 text-center">
        <BlackLogo text="Проверьте вашу почту" />

        <h1>Пожалуйста введите код подтверждения</h1>

        <form action="" class="gap-5 flex flex-col">
          <AppInput text="Код подтверждения" />
        </form>
        <AppButton
          text="Восстановление"
          color="bg-darkest-black"
          class="font-bold self-center"
        />
      </div>
    </div>
    <!-- login - righttside -->
    

    <div
      class="flex-1 justify-items-center text-white bg-darkest-black h-screen rounded-l-4xl shadow-2xl"
    >
      <div class="flex flex-col h-screen justify-center gap-20">
        <WhiteLogo />
        <div class="flex flex-col gap-8 justify-center items-center text-center">
          <h1 class="font-medium max-w-2/3">
            " Ваша лучшая цифровая библиотека для поиска и чтения книг "
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
