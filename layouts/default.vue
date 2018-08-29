
<template>
  
  <v-app>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">     
  <!-- <link rel="stylesheet" href="/node_modules/animate.css/animate.min.css">      -->
   
        <v-toolbar app color="light-green darken-3" style="color:#fff; font-size:20px">
          <v-btn icon style="color:#fff"><v-icon >search</v-icon></v-btn>
          <v-toolbat-title>Portfolio</v-toolbat-title>
          <v-spacer/>
            
            <v-toolbar-side-icon style="color:#fff" @click.stop="drawer = !drawer"/>
        </v-toolbar>

       <v-navigation-drawer
      v-model="drawer"
      :mini-variant="mini"
      absolute
      dark
      temporary
    >
      

        <v-list class="pa-1">
          <v-list-tile v-if="mini" @click.stop="mini = !mini">
            <v-list-tile-action>
              <v-icon>chevron_right</v-icon>
            </v-list-tile-action>
          </v-list-tile>
  
          <v-list-tile avatar tag="div" @click='index()'>
            <v-list-tile-avatar>
              <img src="35695453_2242311329333074_6780137731126198272_n.jpg">
            </v-list-tile-avatar>
  
            <v-list-tile-content>
              <v-list-tile-title>Charnvit Boonpluem</v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn icon @click.stop="mini = !mini">
                <v-icon>chevron_left</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
  
        <v-list class="pt-0" dense>
          <v-divider></v-divider>
  
          <v-list-tile>
            <v-list-tile-action>
              <i class="far fa-calendar-alt fa-2x"></i>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title @click='activities()'>กิจกรรม</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile>
            <v-list-tile-action>
              <i  class="far fa-address-book fa-2x"></i>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title @click='general()'>ประวัติส่วนตัว</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile >
            <v-list-tile-action>   
              <i class="fas fa-archway fa-2x"></i>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title @click='lean()'>ประวัติการศึกษา</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile >
            <v-list-tile-action>   
              <i class="fas fa-award fa-2x"></i>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title @click='award()'>ผลงาน</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile >
            <v-list-tile-action>   
              <i class="fas fa-images fa-2x"></i>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title @click='photo()'>photo</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile >
            <v-list-tile-action>   
              <i class="fas fa-certificate fa-2x"></i>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title @click='ser()'>ใบประกาศนียบัตร</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile >
            <v-list-tile-action>   
              <i class="fas fa-certificate fa-2x"></i>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title @click='Certificate()'>ใบแสดงผลการเรียน</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

           <v-list-tile >
            <v-list-tile-action>   
              <i class="fab fa-telegram-plane fa-2x"></i>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title @click='Contact()'>ช่องทางการติดต่อ  </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>

    <v-content>
      <nuxt/>
    </v-content>
  </v-app>

</template>
<script>
  export default {
    data () {
      return {
        drawer: null,
        mini: false,
        right: null
        
      }
    },
    methods: {
      index(){
        this.$router.replace('/')
      },
      about(){
        this.$router.replace('about')
      },
      general(){
        this.$router.replace('general')
      },
      lean(){
        this.$router.replace('/lean');
      },
      activities(){
        this.$router.replace('/activitie')
      },
      award(){
        this.$router.replace('/award')
      },
      photo(){
        this.$router.replace('/photo')
      },
      ser(){
        this.$router.replace('/ser')
      },
      Certificate(){
        this.$router.replace('/Certificate')
      },
      Contact(){
        this.$router.replace('/Contact')
      },
    },
  }
</script>