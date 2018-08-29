<template>
    <div>
        <h1>Student List</h1>
        <ul>
            <li v-for="st in student" :key="st.id">
                <span>{{st.id}}</span>
                <span>{{st.name}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            student:[
                {id:'6039010001',name:'karunporn'},
                {id:'6039010002',name:'chanvit'},
            ],
        }
    },
}
</script>

