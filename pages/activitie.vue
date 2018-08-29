<template>
    <div>

    <v-card>
        <v-card-media style="margin-top:-90px;">
            <v-carousel>
                <v-carousel-item
                    v-for="(item,i) in items"
                    :key="i"
                    :src="item.src"
                    >
                </v-carousel-item>
            </v-carousel>
        </v-card-media>
    </v-card>

 <v-card class="animated fadeInUp" style="margin-top:20px;">
        <v-card-media
          src="activities/IMG_20180725_145853.jpg"
          height="200px"
        ></v-card-media>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">กิจกกรรมแห่เทียนเข้าพรรษาปี 2561</h3>
            <div>กิจกกรรมแห่เทียนเข้าพรรษาปี 2561 แผนกเทคโนโลยีสารสนเทศ</div>
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
      <v-card class="animated fadeInUp" style="margin-top:20px;">
        <v-card-media
          src="activities/IMG_20180725_150901.jpg"
          height="200px"
        ></v-card-media>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">กิจกกรรมแห่เทียนเข้าพรรษาปี 2561</h3>
            <div>กิจกกรรมแห่เทียนเข้าพรรษาปี 2561 แผนกเทคโนโลยีสารสนเทศ</div>
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
    <v-card class="animated fadeInUp" style="margin-top:20px;">
        <v-card-media
          src="activities/35225892_2237695049794702_2530356020815855616_n.jpg"
          height="200px"
        ></v-card-media>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">กิจกรรมสานสัมพันธ์ ปี 2561</h3>
            <div>กิจกรรมสานสัมพันธ์ ปี 2561 แผนกเทคโนโลยีสารสนเทศ</div>
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
      <v-card class="animated fadeInUp" style="margin-top:20px;">
        <v-card-media
          src="activities/10462798_1499655713598643_7539835980875258802_n.jpg"
          height="200px"
        ></v-card-media>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">กิจกรรมสานสัมพันธ์ ปี 2557</h3>
            <div>กิจกรรมสานสัมพันธ์ ปี 2557 แผนกเทคโนโลยีสารสนเทศ</div>
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
     

        
    </div>   
</template>



<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'activities/35225892_2237695049794702_2530356020815855616_n.jpg' ,
            text:'กิจกรรมสานสัมพันธ์',
          },
          {
            src: 'activities/10462798_1499655713598643_7539835980875258802_n.jpg',
            text:'กิจกกรรม bye nior',
          },
          {
            src: 'activities/IMG_20180725_150901.jpg',
            text:'กิจกกรรมแห่เทียนเข้าพรรษาปี 2561',
          },
          {
            src: 'activities/IMG_20180725_145853.jpg',
            text:'กิจกกรรมแห่เทียนเข้าพรรษาปี 2561',
          },

         
        ]
      }
    }
  }
</script>