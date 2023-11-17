<template>
<section>
    <div class="w-[446px] h-[425.74px] flex-col justify-center items-center gap-10 inline-flex">
  <div class="h-[131.57px] pb-[4.46px] flex-col justify-start items-start gap-[22.21px] flex">
    <div class="text-neutral-300 text-[26.76px] font-black font-['Arial Black']">Name :</div>
    <input class="w-[446px] h-[66.90px] bg-zinc-300 rounded-[22.30px]" v-model="aname" type="text"/>
  </div>
  <div class="h-[131.57px] pb-[4.46px] flex-col justify-start items-start gap-[22.21px] flex">
    <div class="text-neutral-300 text-[26.76px] font-black font-['Arial Black']">Category :</div>
    <input class="w-[446px] h-[66.90px] bg-zinc-300 rounded-[22.30px]" v-model="category" type="text"/>
  </div>
  <div class="h-[131.57px] pb-[4.46px] flex-col justify-start items-start gap-[22.21px] flex">
    <div class="text-neutral-300 text-[26.76px] font-black font-['Arial Black']">Price :</div>
    <input class="w-[446px] h-[66.90px] bg-zinc-300 rounded-[22.30px]" v-model="price" type="text"/>
  </div>
  <div class="h-[131.57px] pb-[4.46px] flex-col justify-start items-start gap-[22.21px] flex">
    <div class="text-neutral-300 text-[26.76px] font-black font-['Arial Black']">Description :</div>
    <input class="w-[446px] h-[66.90px] bg-zinc-300 rounded-[22.30px]" v-model="description" type="text"/>
  </div>
  <div class="h-[82.60px] p-[22.30px] bg-sky-300 rounded-[22.30px] flex-col justify-center items-center gap-[22.30px] flex">
    <div class="text-neutral-600 text-[26.76px] font-black font-['Arial Black']"><button v-on:click="additems()">SUBMIT</button></div>
  </div>
</div>
</section>
</template>

<script>
export default{
    data(){
        return{
            aname:"",
            category:'',
            price:"",
            description:"",
        };
    },
    mounted(){
        const token = this.$route.params.token
    },
    methods: 
    {
        async additems(){
            const requestOptions = {
            method: 'post',
            headers:{
                    Authorization:'Bearer ' + this.$route.params.token,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
          name: this.aname,
          categories: [this.category],
          price: parseFloat(this.price),
          description: this.description,
        }),
            };
            await fetch("http://localhost/api/products", requestOptions )
            .then(() =>  this.$router.push({
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