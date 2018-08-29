<template>
            <v-layout style="margin-top:10px;font-size:18px;">
                <v-flex xs12 sm6 offset-sm3>
                  <v-card class="animated fadeInRight">
                    <v-card-media
                      :src="require('@/static/images/contactme-300x261.png')"
                      height="" 
                    ></v-card-media>
                  
                    <v-card-title primary-title>
                      <div >
                        <h3 class="headline mb-0">ช่องทางการติดต่อ</h3>
                        <div style="margin-top:5px;font-size:18px;"><i style="color:#2d7eb0" class="fas fa-phone fa-2x"></i> : 0852114119</div>
                        <div style="margin-top:5px;font-size:18px;"><i style="color:#558b2f" class="fab fa-line fa-2x"></i> : t37975793</div>
                        <div style="margin-top:5px;font-size:18px;"><i style="color:#2d7eb0" class="fab fa-facebook-square fa-2x"></i> : Charnvit Boonpluem</div>
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
