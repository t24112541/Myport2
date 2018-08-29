<template>
            <v-layout style="margin-top:10px;font-size:18px;">

                <v-flex xs12 sm6 offset-sm3>
                  <v-card class="animated fadeInUp">

                    
                    <v-card-media
                      :src="require('@/static/activities/server.jpg')"
                      height="200px"
                    ></v-card-media>
                  
         

                    <v-card-title primary-title>
                      <div >
                        <h3 class="headline mb-0">ผลงาน</h3>
                        <div style="margin-top:5px">อธิบาย</div>
                        
                        
                      </div>
                    </v-card-title>
          
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn icon >
                        <v-icon color="orange">favorite</v-icon>
                      </v-btn>
                      <v-btn icon >
                        <v-icon color="orange">bookmark</v-icon>
                      </v-btn>
                       <v-btn icon >
                        <v-icon color="orange">share</v-icon>
                      </v-btn>
                    </v-card-actions>
                
                  </v-card>
                </v-flex>
            </v-layout>

            
</template>

<script>
  export default {
    data () {
      return {
        dialog: false
      }
    }
  }
</script>
