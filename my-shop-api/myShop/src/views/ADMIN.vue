<template>
    <section>
        <header>
                 <div class="w-[1579px] h-[281.27px] relative">
  <div class="w-[1579px] left-0 top-0 absolute justify-end items-center gap-[30px] inline-flex">
    <img class="w-[230px] h-[146.83px]" src="../../png-clipart-blue-triangle-logo-trademark-circle-coming-soon-purple-blue-removebg-preview.png" />
    <div class="flex">
        <img class="w-16 h-16" src="../../1410285.png" />
    <input class="w-[1000px] h-20 pl-[19.50px] pr-[1005.50px] pt-[7.58px] pb-[8.42px] bg-white rounded-[80px] justify-start items-center flex">
      
    </div>
    <div class="w-[200px] h-[70px] px-[31px] py-[17px] bg-zinc-300 rounded-[50px] justify-center items-center gap-2.5 flex">
      <div class="text-black text-3xl font-black font-['Arial Black']"><button v-on:click="backlogin()">LOGIN</button></div>
    </div>
  </div>
  <div class="left-[48.50px] top-[122px] absolute text-white text-4xl font-black font-['Arial Black']">ADMIN</div>
  <div class="w-[613px] h-[112.27px] left-[482.50px] top-[169px] absolute justify-center items-start gap-[27.66px] inline-flex">
    <div class="grow shrink basis-0 self-stretch pl-[51.25px] pr-[37.83px] pt-[38.64px] pb-[44.63px] bg-violet-400 rounded-[20.34px] justify-end items-center inline-flex">
        <a v-on:click="getItems()"><div class="w-[96.81px] text-black text-xl font-black font-['Arial Black']">Product</div></a>
    </div>
    <div class="grow shrink basis-0 self-stretch pl-[30.51px] pr-[30.10px] bg-sky-300 rounded-[20.34px] justify-center items-center inline-flex">
        <a v-on:click="getCategories()"><div class="w-[125.28px] h-[28.88px] text-black text-xl font-black font-['Arial Black']">Categories</div></a>
    </div>
    <div class="grow shrink basis-0 self-stretch px-[58.98px] pt-[37.42px] pb-[37.83px] bg-violet-400 rounded-[20.34px] justify-center items-center inline-flex">
        <a v-on:click="getUsers()"><div class="w-[67.93px] h-[37.02px] text-black text-xl font-black font-['Arial Black']">Users</div></a>
    </div>
  </div>
</div>
        </header>

        <main>
            
            <!-- PRODUCT -->
            <section class="all" v-if="status==='done'">
        <article class="colonne">
            <section class="ligne">
                <div class="w-[1526px] h-[125px] justify-end items-center gap-[90px] inline-flex">
  <div class="w-[1156.07px] px-[35.64px] py-[7.13px] bg-violet-400 rounded-[36px] justify-start items-center gap-[7.13px] flex">
    <div class="w-[200px] px-[22.10px] py-[6.41px] bg-white rounded-[21.38px] justify-center items-center gap-[7.13px] flex">
      <div class="text-black text-4xl font-black font-['Arial Black']">Name</div>
    </div>
    <div class="w-[200px] px-[22.10px] py-[6.41px] bg-white rounded-[21.38px] justify-center items-center gap-[7.13px] flex">
      <div class="text-black text-4xl font-black font-['Arial Black']">ID</div>
    </div>
    <div class="w-[200px] px-[22.10px] py-[6.41px] bg-white rounded-[21.38px] justify-center items-center gap-[7.13px] flex">
      <div class="text-black text-4xl font-black font-['Arial Black']">Category</div>
    </div>
    <div class="w-[200px] px-[22.10px] py-[6.41px] bg-white rounded-[21.38px] justify-center items-center gap-[7.13px] flex">
      <div class="text-black text-4xl font-black font-['Arial Black']">Price</div>
    </div>
    <div class="w-[200px] px-[22.10px] py-[6.41px] bg-white rounded-[21.38px] justify-center items-center gap-[7.13px] flex">
      <div class="text-black text-4xl font-black font-['Arial Black']">Description</div>
    </div>
    <div class="w-[200px] px-[22.10px] py-[6.41px] bg-white rounded-[21.38px] justify-center items-center gap-[7.13px] flex">
      <div class="text-black text-4xl font-black font-['Arial Black']">Action</div>
    </div>
  </div>
  <div class="w-[237px] self-stretch px-[31px] py-[25px] bg-sky-300 rounded-[36px] justify-center items-center gap-2.5 flex">
    <div class="text-white text-4xl font-black font-['Arial Black']"><button v-on:click="additem()">Add New</button></div>
  </div>
</div>
            </section>
      </article>
      <article v-for="item in mydata['hydra:member']" :key="item.id" class="colonne">
        <section class="ligne">
            <div class="w-[1526px] h-[125px] pl-[40px] justify-start items-center gap-[90px] inline-flex">
  <div class="w-[1156.07px] px-[35.64px] py-[7.13px] bg-violet-400 rounded-[36px] justify-start items-center gap-[7.13px] flex">
    <div class="w-[190px] px-[22.10px] py-[6.41px] bg-white rounded-[21.38px] justify-center items-center gap-[7.13px] flex">
      <div class="text-black text-2xl font-black font-['Arial Black']">{{item.name}}</div>
    </div>
    <div class="w-[200px] px-[22.10px] py-[6.41px] bg-white rounded-[21.38px] justify-center items-center gap-[7.13px] flex">
      <div class="text-black text-2xl font-black font-['Arial Black']">{{ item.id }}</div>
    </div>
    <div class="w-[200px] px-[22.10px] py-[6.41px] bg-white rounded-[21.38px] justify-center items-center gap-[7.13px] flex">
      <div class=" text-black text-2xl font-black font-['Arial Black']">{{ item.categories }}</div>
    </div>
    <div class="w-[200px] px-[22.10px] py-[6.41px] bg-white rounded-[21.38px] justify-center items-center gap-[7.13px] flex">
      <div class="text-black text-2xl font-black font-['Arial Black']">{{item.price}}</div>
    </div>
    <div class="w-[200px] px-[22.10px] py-[6.41px] bg-white rounded-[21.38px] justify-center items-center gap-[7.13px] flex">
      <div class="text-black text-2xl font-black font-['Arial Black']">{{item.description}}</div>
    </div>
    <div class="px-[22.10px] py-[6.41px] bg-white rounded-[21.38px] justify-center items-center gap-[7.13px] flex">
      <div class="text-black text-4xl font-black font-['Arial Black']">
        <button v-on:click="edititems(item.name,item.id,item.categories.toString(),item.price.toString(),item.description)">Edit</button>
        <button  v-on:click="deleteitems(item.id)">Delete</button>
      </div>
    </div>
  </div>
</div>
        </section>
      </article>
    </section> 

    <!-- CATEGORY -->
    <section class="all" v-if="status==='done1'">
      <article class="colonne">
            <section class="ligne">
                <div class="w-[1526px] h-[125px] justify-start items-center gap-[90px] inline-flex">
  <div class="w-[900px] px-[35.64px] py-[7.13px] bg-violet-400 rounded-[36px] justify-start items-center gap-[7.13px] flex">
    <div class="w-[200px] px-[22.10px] py-[6.41px] bg-white rounded-[21.38px] justify-center items-center gap-[7.13px] flex">
      <div class="text-black text-4xl font-black font-['Arial Black']">Name</div>
    </div>
    <div class="w-[200px] px-[22.10px] py-[6.41px] bg-white rounded-[21.38px] justify-center items-center gap-[7.13px] flex">
      <div class="text-black text-4xl font-black font-['Arial Black']">ID</div>
    </div>
    <div class="w-[200px] px-[22.10px] py-[6.41px] bg-white rounded-[21.38px] justify-center items-center gap-[7.13px] flex">
      <div class="text-black text-4xl font-black font-['Arial Black']">Products</div>
    </div>
    <div class="w-[200px] px-[22.10px] py-[6.41px] bg-white rounded-[21.38px] justify-center items-center gap-[7.13px] flex">
      <div class="text-black text-4xl font-black font-['Arial Black']">Action</div>
    </div>
  </div>
  <div class="w-[237px] self-stretch px-[31px] py-[25px] bg-sky-300 rounded-[36px] justify-center items-center gap-2.5 flex">
    <div class="text-white text-4xl font-black font-['Arial Black']"><button v-on:click="addcat()">Add New</button></div>
  </div>
</div>
            </section>
      </article>
      <article v-for="item in mydata['hydra:member']" :key="item.id" class="colonne">
        <section class="ligne">
            <div class="w-[1526px] h-[125px]  justify-start items-center gap-[90px] inline-flex">
  <div class="w-[900px] px-[35.64px] py-[7.13px] bg-violet-400 rounded-[36px] justify-start items-center gap-[7.13px] flex">
    <div class="w-[190px] px-[22.10px] py-[6.41px] bg-white rounded-[21.38px] justify-center items-center gap-[7.13px] flex">
      <div class="text-black text-2xl font-black font-['Arial Black']">{{item.name}}</div>
    </div>
    <div class="w-[200px] px-[22.10px] py-[6.41px] bg-white rounded-[21.38px] justify-center items-center gap-[7.13px] flex">
      <div class="text-black text-2xl font-black font-['Arial Black']">{{ item.id }}</div>
    </div>
    <div class="w-[200px] px-[22.10px] py-[6.41px] bg-white rounded-[21.38px] justify-center items-center gap-[7.13px] flex">
      <div class=" text-black text-2xl font-black font-['Arial Black']">{{ item.products }}</div>
    </div>
    <div class="px-[22.10px] py-[6.41px] bg-white rounded-[21.38px] justify-center items-center gap-[7.13px] flex">
      <div class="text-black text-4xl font-black font-['Arial Black']">
        <button v-on:click="editcat(item.name,item.id,item.products.toString())">Edit</button>
        <button v-on:click="deletecat(item.id)">Delete</button>
      </div>
    </div>
  </div>
</div>
        </section>
      </article>
    </section>
      <!-- USER -->


      <section class="all" v-if="status==='ok'">
        <article class="colonne">
            <section class="ligne">
                <div class="w-[1526px] h-[125px] justify-start items-center gap-[90px] inline-flex">
  <div class="w-[1050px] px-[35.64px] py-[7.13px] bg-violet-400 rounded-[36px] justify-start items-center gap-[7.13px] flex">
    <div class="w-[200px] px-[22.10px] py-[6.41px] bg-white rounded-[21.38px] justify-center items-center gap-[7.13px] flex">
      <div class="text-black text-4xl font-black font-['Arial Black']">Full Name</div>
    </div>
    <div class="w-[200px] px-[22.10px] py-[6.41px] bg-white rounded-[21.38px] justify-center items-center gap-[7.13px] flex">
      <div class="text-black text-4xl font-black font-['Arial Black']">ID</div>
    </div>
    <div class="w-[200px] px-[22.10px] py-[6.41px] bg-white rounded-[21.38px] justify-center items-center gap-[7.13px] flex">
      <div class="text-black text-4xl font-black font-['Arial Black']">Role</div>
    </div>
    <div class="w-[200px] px-[22.10px] py-[6.41px] bg-white rounded-[21.38px] justify-center items-center gap-[7.13px] flex">
      <div class="text-black text-4xl font-black font-['Arial Black']">Email</div>
    </div>
    <div class="w-[200px] px-[22.10px] py-[6.41px] bg-white rounded-[21.38px] justify-center items-center gap-[7.13px] flex">
      <div class="text-black text-4xl font-black font-['Arial Black']">Action</div>
    </div>
  </div>
  <div class="w-[237px] self-stretch px-[31px] py-[25px] bg-sky-300 rounded-[36px] justify-center items-center gap-2.5 flex">
    <div class="text-white text-4xl font-black font-['Arial Black']"><button v-on:click="adduser()">Add New</button></div>
  </div>
</div>
            </section>
      </article>
      <article v-for="user in mydatas['hydra:member']" :key="user.id" class="colonne">
        <section class="ligne">
            <div class="w-[1526px] h-[125px] justify-start items-center gap-[90px] inline-flex">
  <div class="w-[1050px] px-[35.64px] py-[7.13px] bg-violet-400 rounded-[36px] justify-start items-center gap-[7.13px] flex">
    <div class="w-[190px] px-[22.10px] py-[6.41px] bg-white rounded-[21.38px] justify-center items-center gap-[7.13px] flex">
      <div class="text-black text-2xl font-black font-['Arial Black']">{{user.fullName}}</div>
    </div>
    <div class="w-[200px] px-[22.10px] py-[6.41px] bg-white rounded-[21.38px] justify-center items-center gap-[7.13px] flex">
      <div class="text-black text-2xl font-black font-['Arial Black']">{{ user.id }}</div>
    </div>
    <div class="w-[200px] px-[22.10px] py-[6.41px] bg-white rounded-[21.38px] justify-center items-center gap-[7.13px] flex">
      <div class=" text-black text-2xl font-black font-['Arial Black']">{{ user.roles }}</div>
    </div>
    <div class="w-[200px] px-[22.10px] py-[6.41px] bg-white rounded-[21.38px] justify-center items-center gap-[7.13px] flex">
      <p class="text-black text-2xl font-black font-['Arial Black']">{{user.email}}</p>
    </div>
    <div class="px-[22.10px] py-[6.41px] bg-white rounded-[21.38px] justify-center items-center gap-[7.13px] flex">
      <div class="text-black text-4xl font-black font-['Arial Black']">
        <button v-on:click="edituser(user.fullName,user.email,user.id)">Edit</button>
        <button  v-on:click="deleteuser(user.id)">Delete</button>
      </div>
    </div>
  </div>
</div>
        </section>
      </article>
    </section>

        </main>
    </section>
</template>

<script>
import axios from 'axios'
export default{
    data(){
        return{
            mydata:{},
            mydatas:{},
            status:'',
            token:''

        };
    },
    mounted(){
        this.token = this.$route.params.token;
    },
    methods: 
    {
        getItems(){
            axios.get("http://localhost/api/products" ).then((result) =>{
            console.warn(result)
            this.mydata= result.data
            this.status="done"
            })
        },
        async getCategories() {
    const requestOptions = {
        method: 'get',
        headers: {
            Authorization: 'Bearer '+ this.token,
            'Content-Type': 'application/json',
        },
    };

    try {
        const responses = await fetch("http://localhost/api/categories", requestOptions);
        const results = await responses.json();

        this.mydata = results; 
        this.status = "done1";
        console.log(this.mydata);
    } catch (error) {
        console.error("Error fetching categories:", error);
    }
},
async getUsers() {
    const requestOptions = {
        method: 'get',
        headers: {
            Authorization: 'Bearer '+ this.token,
            'Content-Type': 'application/json',
        },
    };

    try {
        const response = await fetch("http://localhost/api/users", requestOptions);
        const result = await response.json();

        this.mydatas = result;
        this.status = 'ok';
        console.log(this.mydatas);
    } catch (error) {
        console.error("Error fetching categories:", error);
    }
},

        deleteitems(id){
            const requestOptions = {
            method: 'DELETE',
            headers:{
                Authorization: 'Bearer '+ this.token,
                }
            };
            fetch("http://localhost/api/products/" + id, requestOptions )  
            .then(() => this.getItems());
        },
        deletecat(id){
            const requestOptions = {
            method: 'DELETE',
            headers:{
                Authorization: 'Bearer '+ this.token,
                }
            };
            fetch("http://localhost/api/categories/" + id, requestOptions )  
            .then(() => this.getCategories());
        },
        deleteuser(id){
            const requestOptions = {
            method: 'DELETE',
            headers:{
                Authorization: 'Bearer '+ this.token,
                }
            };
            fetch("http://localhost/api/users/" + id, requestOptions )  
            .then(() => this.getUsers());
        },
        edititems(aname, id, categories, price, description) {
            console.log(aname,id,categories,price,description)
        this.$router.push({
            name: 'edititem',
            params: {
                "name": aname,
                "id": id,
                "categories": categories,
                "price": price,
                "description": description,
                "token":this.$route.params.token
            }
        });
        
    },
    editcat(aname, id, products) {
        if (!products) {
        alert("Please provide items to this category before editing it.");
        return;
      }
      else{
        console.log(products)
        this.$router.push({
            name: 'editcat',
            params: {
                "name": aname,
                "id": id,
                "products": products,
                "token":this.$route.params.token
            }
        });
    }
    },
    edituser(fullName, email,id) {
        this.$router.push({
            name: 'edituser', 
            params: {
                "fullName": fullName,
                "email": email,
                "id":id,
                "token":this.$route.params.token
            }
        });
    
    },
        additem(){
            this.$router.push({
                name:'addnewitem',
                params:{
                    "token":this.$route.token
                }
            })
        },
        addcat(){
            this.$router.push({
                name:'addnewcat',
                params:{
                    "token":this.$route.token
                }
            })
        },
        adduser(){
            this.$router.push({
                name:'addnewuser',
                params:{
                    "token":this.$route.token
                }
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
    .colonne{
        left:0%;
    }
    .all{
        display: flex; 
        flex-direction: column;
    }

</style>