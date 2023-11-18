<template v-autofocus>
  <div class="w-[1280px] h-[720px] px-[641px] py-[407px] bg-neutral-600 flex-col justify-center items-center gap-2.5 inline-flex">
  <div class="flex-col justify-center items-center gap-10 flex">
    <div class="h-[131.57px] pb-[4.46px] flex-col justify-start items-start gap-[22.21px] flex">
      <div class="text-neutral-300 text-[26.76px] font-black font-['Arial Black']">EMAIL</div>
      <input class="w-[446px] h-[66.90px] bg-zinc-300 rounded-[22.30px]" v-model="email" type="text" >
    </div>
    <div class="h-[131.57px] pb-[4.46px] flex-col justify-start items-start gap-[22.21px] flex">
      <div class="text-neutral-300 text-[26.76px] font-black font-['Arial Black']">PASSWORD</div>
      <input class="w-[446px] h-[66.90px] bg-zinc-300 rounded-[22.30px]" v-model="password" type="password" />
    </div>
    <div class="h-[82.60px] p-[22.30px] bg-sky-300 rounded-[22.30px] flex-col justify-center items-center gap-[22.30px] flex">
      <button class="text-neutral-600 text-[26.76px] font-black font-['Arial Black'] border-none" v-on:click="login()" >SUBMIT</button>
    </div>
  </div>
</div>
</template>

<script>

export default {
  data() {
    return {
      email: "",
      password: "",
      token: "",
    };
  },
  mounted() {},
  methods: {
    async login() {
      const requestOptions = {
        method: "post",
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      };

      try {
        const response = await fetch(
          "http://localhost/authentication_token",
          requestOptions
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        this.token = data.token;

        this.$router.push({
          name: "direction",
          params: {
            token: this.token,
          },
        });

        console.log(this.token);
      } catch (error) {
        console.error("Error during login:", error);
      }
    },
  },
};
</script>

<style>
</style>

