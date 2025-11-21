<script setup lang="ts">

import AppButton from '@/components/AppButton.vue'
import AppInput from '@/components/AppInput.vue'
import BlackLogo from '@/components/BlackLogo.vue'
import WhiteLogo from '@/components/WhiteLogo.vue'
</script>

<template>
  <!-- login - leftside -->
  <div class="flex">
    <div class="flex-1 justify-items-center h-screen ">
      <div class="flex flex-col h-screen justify-center gap-5">
        <BlackLogo text="С Возвращением !!" />
        
        <h1>Пожалуйста введите ваши данные для входа</h1>

        <form action="" class="gap-5 flex flex-col">
          <AppInput text="Имя пользователя" />
          <AppInput text="Пароль" />
          <RouterLink to="/password-recovery" class="font-medium " ><span class="hover:border-darkest-black transition-colors duration-300 py-2 px-3 border border-white  rounded-xl">Забыли пароль?</span></RouterLink>
        </form>
        <AppButton text="Войти" color="bg-darkest-black"  class="font-bold self-center" />
      </div>
    </div>

<!-- login - righttside -->
    <div
      class="flex-1 justify-items-center text-white bg-darkest-black h-screen rounded-l-4xl "
    >
      <div class="flex flex-col h-screen justify-center gap-20">
        <WhiteLogo />
        <div class="flex flex-col gap-8 justify-center items-center text-center">
          <h1 class="font-medium">Впервые на нашей платформе?</h1>
          <AppButton text="Зарегистрироваться" color="bg-darkest-black" :outlined="true" class="font-bold" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
