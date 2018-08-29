<template>
    <div id="app">
        <v-app >
            
                <v-card flat>
                    <v-card-text>
                        <v-layout row>
                            <v-flex xs12 sm6 offset-sm3>
                                <v-card class="animated fadeInUp">
                                    <v-card-media :src="require('@/static/lean/std.jpg')" height="400px">
                                        <v-layout column fill-height>
                                            <v-spacer></v-spacer>
                    
                                             <v-card-title class="white--text pl-5 pt-3">
                                                 <div class="display-1 pl-5 pt-1"></div>
                                                 <div class="display-1 pl-5 pt-1"></div>
                                                 <div class="display-1 pl-5 pt-1"></div>
                                                 <div class="display-1 pl-5 pt-1"></div>
                                                <div class="display-1 pl-5 pt-1">การศึกษา</div>
                                            </v-card-title>
                                        </v-layout>
                                    </v-card-media>
                    
                                    <v-list two-line >
                                        <v-list-tile>

                                            <v-list-tile-content>
                                                <v-list-tile-title>มัธยมศึกษาตอนต้น</v-list-tile-title>
                                                <v-list-tile-sub-title>โรงเรียนชัยภูมิภักดีชุมพล<div style="float:right">ผลการเรียน : 3.64</div></v-list-tile-sub-title>
                                            </v-list-tile-content>
                                        </v-list-tile>

                                        <v-list-tile >
                                           
                                            <v-list-tile-content>
                                                <v-list-tile-title>ประกาศนียบัตรวิชาชีพ(ปวช.)</v-list-tile-title>
                                                <v-list-tile-sub-title>แผนกเทคโนโลยีสารสนเทศ วิทยาลัยเทคนิคชัยภูมิ<div style="float:right">ผลการเรียน : 3.90</div></v-list-tile-sub-title>
                                            </v-list-tile-content>
                                
                                        </v-list-tile>
                                        <v-divider inset></v-divider>
                    
                                        <v-list-tile >
                                          
                                            <v-list-tile-content>
                                                <v-list-tile-title>ประกาศนียบัตรวิชาชีพชั้นสูง(ปวส.)</v-list-tile-title>
                                                <v-list-tile-sub-title>แผนกเทคโนโลยีสารสนเทศ วิทยาลัยเทคนิคชัยภูมิ<div style="float:right">กำลังศึกษา</div></v-list-tile-sub-title>
                                            </v-list-tile-content>
                                        </v-list-tile>
                
                                    </v-list>
                                </v-card>
                            </v-flex>
                        </v-layout>
                    </v-card-text>
                </v-card>
        </v-app>
    </div>
</template>
