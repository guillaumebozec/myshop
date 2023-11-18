<template>
    <section>
        <main>
        <section class="all w-[1280px] h-[720px] " >
            <div class="w-[1280px] h-[720px] px-[30px] mt-[-130px] py-20 bg-neutral-600 flex-col justify-start items-start gap-[90px] inline-flex">
  <div class="w-[1280px] justify-end items-center gap-[30px] inline-flex">
    <img class="w-[230px] h-[146.83px]" src="../../png-clipart-blue-triangle-logo-trademark-circle-coming-soon-purple-blue-removebg-preview.png" alt =  "MyShop logo"/>
    <div class="flex">
        <img class="w-16 h-16" src="../../1410285.png" alt="search icon"/>
    <input class="w-[1000px]  pl-[19.50px] pt-[7.58px] pb-[8.42px] bg-white rounded-[80px] justify-start items-center flex" type="text"/>
      
    </div>
    <div class="w-[200px] h-[70px] px-[31px] py-[17px] bg-zinc-300 rounded-[50px] justify-center items-center gap-2.5 flex">
        <div class="text-black text-xl font-black font-['Arial Black']"><button v-on:click="backlogin()">LOGIN</button></div>
    </div>
  </div>
  
<section class="all2  ml-[100px]">
  <article v-for="item in mydata['hydra:member']" :key="item.id" class="colonne">
    <div class="w-[300px] h-[300px] px-3 py-[11px] bg-sky-300 rounded-[22.19px] flex-col justify-center items-center gap-2.5 inline-flex">
    <div class="grow shrink basis-0 self-stretch pl-[34px] pr-[35px] pt-[33px] pb-[47px] bg-white rounded-xl justify-center items-center inline-flex">
      <div class="w-[85px] h-3.5 text-black text-[10px] font-black font-['Arial Black']">product picture</div>
    </div>
  <div class="justify-start items-start gap-2.5 inline-flex">
    <div class="text-black text-[19px] font-black font-['Arial Black']">{{ item.name}}</div>
    <div class="text-black text-[19px] font-black font-['Arial Black']">{{ item.price}}$</div>
  </div>
  <div class="text-black text-[15px] font-black font-['Arial Black']">{{ item.description}}</div>
  <div class="px-2.5 py-px bg-zinc-300 rounded-[40px] justify-start items-center gap-5 inline-flex">
    <div class="text-black text-[15px] font-black font-['Arial Black']">Buy it</div>
    <img class="w-[18px] h-[18px]" src="../../basket-cart-icon-27.png" alt = "cart icon"/>
    </div>
    </div>
</article>
</section>
  </div>

    </section> 
        </main>

        <footer>

        </footer>
    </section>
</template>

<script>
import axios from 'axios'
export default{
    data(){
        return{
            mydata:{},

        };
    },
    mounted(){
        this.getItems()
    },
    methods: 
    {
        getItems(){
            axios.get("http://localhost/api/products" ).then((result) =>{
            console.warn(result)
            this.mydata= result.data
            })
        },
        backlogin(){
            document.location="http://localhost:5173/"
        }
}
}
</script>

<style>

    *{
        margin:0;
        padding: 0;
        scale: 98%;
    }
    body{
        background-color: white;
        width: 100%;
    }
    header{
        text-align: center;
    }
    
    body{
        color:black;
    }
    .ligne{
        display: flex;
    }
    .colonne{
        left:0%;
        margin-right: 10px;
    }

    .all{
        display: flex;
    }
    .all2{
        display: flex;
    }
</style>