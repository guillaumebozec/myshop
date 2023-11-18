<template>
    <div class="w-[1280px] h-[720px] px-[641px] py-[407px] bg-neutral-600 justify-center items-center gap-2.5 inline-flex">
  <div class="w-[364.85px] h-[299.18px] px-[145.94px] py-[7.30px] bg-sky-300 rounded-[36.49px] justify-center items-center gap-[7.30px] flex">
    <button class="text-black text-[46.70px] font-bold font-['Arial'] border-none" v-on:click="client()" >Client</button>
  </div>
  <div class="w-[364.85px] h-[299.18px] px-[145.94px] py-[7.30px] bg-violet-400 rounded-[36.49px] justify-center items-center gap-[7.30px] flex">
    <button class="text-black text-[46.70px] font-bold font-['Arial'] border-none" v-on:click="admin()" >Admin</button>
  </div>
</div>
</template>

<script>
export default{
    data(){
        return{
            
        };
    },
    mounted(){
       const token = this.$route.params.token
    },
    methods:{
        admin(){
            this.$router.push({
                name:'admin',
                params:{
                    "token":this.$route.token
                }
            })
        },
        client(){
            document.location = "http://localhost:5173/client"
        }
    }
}
</script>

<style>
button{
    word-break: normal;
}
</style>