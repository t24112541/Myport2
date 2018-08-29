<template>
    <div>CTC IT
        <span>name : chanvit xxxx</span><br>
       <span v-if="ok" class="text"> Name :{{ name.toUpperCase()}}</span>
       อายุ:{{age}} ปี<br>
       กรุณาป้อนชื่อ: <input type="text" :value="name"><br>
       <input v-model="name" type="text">
       <div v-show="ok">{{upperName}}</div>
       <button type="button" @click="dosave">SAVE</button><br>
       <button type="button" @click="dotoggle">Toggle</button>
    </div>   
</template>
<script>
export default {
    data(){
        return{
            name:"chanvit yyyy",
            age:70,
            ok:true,
        }
    },
    computed:{
           upperName(){
               return this.name.toUpperCase()
           },
    },
    methods:{
           dosave(){
               console.log('SAVE')
           },
           dotoggle(){
               this.ok = !this.ok
               
           },
    },
}
</script>

<style>
   .text {
       color:blue;       
          }
</style>


