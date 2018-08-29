<template>
    <div>

    <v-card style="margin-top:20px;">
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
        <div style="font-size:50px;text-align:center">My Gallery</div>
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
        {
            src: 'activities/17498526_1983148028582740_5523992955183396175_n.jpg',
        },
        {
            src: 'activities/12472299_1791021591128719_4600252295294474205_n.jpg',
        },
        {
            src: 'activities/32078493_2212015275696013_4253380325968707584_n.jpg',
        },
        {
            src: 'images/IMG_20180622_090933.jpg',
        },
        {
            src: '35695453_2242311329333074_6780137731126198272_n.jpg',
        },

         
        ]
      }
    }
  }
</script>