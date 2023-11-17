<template>
<section>
        <div class="w-[446px] h-[425.74px] flex-col justify-center items-center gap-10 inline-flex">
  <div class="h-[131.57px] pb-[4.46px] flex-col justify-start items-start gap-[22.21px] flex">
    <div class="text-neutral-300 text-[26.76px] font-black font-['Arial Black']">Full Name :</div>
    <input class="w-[446px] h-[66.90px] bg-zinc-300 rounded-[22.30px]" v-model="fullName" type="text"/>
  </div>
  <div class="h-[131.57px] pb-[4.46px] flex-col justify-start items-start gap-[22.21px] flex">
    <div class="text-neutral-300 text-[26.76px] font-black font-['Arial Black']">Email :</div>
    <input class="w-[446px] h-[66.90px] bg-zinc-300 rounded-[22.30px]" v-model="email" type="text"/>
  </div>
  <div class="h-[131.57px] pb-[4.46px] flex-col justify-start items-start gap-[22.21px] flex">
    <div class="text-neutral-300 text-[26.76px] font-black font-['Arial Black']">Password :</div>
    <input class="w-[446px] h-[66.90px] bg-zinc-300 rounded-[22.30px]" v-model="password" type="password"/>
  </div>
  <div class="h-[82.60px] p-[22.30px] bg-sky-300 rounded-[22.30px] flex-col justify-center items-center gap-[22.30px] flex">
    <div class="text-neutral-600 text-[26.76px] font-black font-['Arial Black']"><button v-on:click="edituser()">SUBMIT</button></div>
  </div>
</div>
    </section>
</template>

<script>
export default {
        data() {
    return {
        fullName: this.$route.params.fullName,
        email: this.$route.params.email,
        password:'',
        token:this.$route.params.token
    };
  },
    mounted() {
    },
    methods: 
    {
        async edituser(){
            const requestOptions = {
            method: 'put',
            headers:{
                    Authorization:'Bearer ' + this.$route.params.token,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
          fullName: this.fullName,
          email:this.email,
          password:this.password
        }),
            };
            await fetch("http://localhost/api/users/"+this.$route.params.id.toString(), requestOptions )
            .then(() =>  
            this.$router.push({
                name:'admin',
                params:{
                    "token":this.$route.token
                }
            })
            );
        }
}
}
</script>

<style>

</style>