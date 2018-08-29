importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "app",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.e5151cd1b1db88e7b616.js",
    "revision": "d727c5ad5b30e3fed656cf185b1a3b55"
  },
  {
    "url": "/_nuxt/layouts_default.f650e55ebb90aed93d31.js",
    "revision": "28a978dbd61bf0df3d25cb277d485ddf"
  },
  {
    "url": "/_nuxt/manifest.aa03c5a46e5eb9c40fee.js",
    "revision": "8d8cc9413fbdf57f5df0a4aed8143d41"
  },
  {
    "url": "/_nuxt/pages_about.6ab060ce7202923565fa.js",
    "revision": "7c089d764f654ce92e301e01fe467e5b"
  },
  {
    "url": "/_nuxt/pages_activitie.f9597ab22ed0d159cca9.js",
    "revision": "9207a2c33dd2eb27d9b55d065f99105c"
  },
  {
    "url": "/_nuxt/pages_award.e03d2fff20c181362766.js",
    "revision": "18cf2b4d04ebe60a5cb353cf4494e4aa"
  },
  {
    "url": "/_nuxt/pages_boots.a2ea2f3bb3d17e451ad9.js",
    "revision": "d7c36e037fabb539df2767159858ba97"
  },
  {
    "url": "/_nuxt/pages_Certificate.7c7f17462ccb77334462.js",
    "revision": "352b50344c0318c5a72c181c27d52971"
  },
  {
    "url": "/_nuxt/pages_chat.fc6877129df75920f940.js",
    "revision": "88fb1da625e8a11c0de87f2ef6f83aa3"
  },
  {
    "url": "/_nuxt/pages_Contact.9562a5d09613f3f7f83f.js",
    "revision": "a092c70b64ea2f22dec70d4d7063576d"
  },
  {
    "url": "/_nuxt/pages_general.8d4afe8355ce1f3affe8.js",
    "revision": "9e2e2cc1952d7843658cc489550b770e"
  },
  {
    "url": "/_nuxt/pages_index.02db4b0e1dadd166f401.js",
    "revision": "0a76f867642e233fc9c41335a964b98b"
  },
  {
    "url": "/_nuxt/pages_lean.9872da5b94952f572a44.js",
    "revision": "95c6c5ee60499e25bc407c03a2e188af"
  },
  {
    "url": "/_nuxt/pages_photo.3db04e3c004d1b49ce0d.js",
    "revision": "8506b3f111bfa4df5058749c638fd73d"
  },
  {
    "url": "/_nuxt/pages_ser.b7e540ed9d4f12faeae0.js",
    "revision": "6f738b7322fb7922969059381f325f2b"
  },
  {
    "url": "/_nuxt/pages_student_edit.79534bb8362974bfe06b.js",
    "revision": "ae70f1ad5f0e48b365434a759312bb83"
  },
  {
    "url": "/_nuxt/pages_student_index.1adc993e3b9460bee1a7.js",
    "revision": "bfd96ceb44819874efa3bb2c50aa97f0"
  },
  {
    "url": "/_nuxt/pages_student.d91844f5511b0f0f7608.js",
    "revision": "010c10ee8b0e99214588e1f2461efa36"
  },
  {
    "url": "/_nuxt/pages_student2.7a182685f9a761054816.js",
    "revision": "2b0815036adca85bbef406bcd5aa585f"
  },
  {
    "url": "/_nuxt/pages_studentlist.2fc2e256f90a30c61aa0.js",
    "revision": "22ba4350d7cedb4f1c95e7bcf6db4de5"
  },
  {
    "url": "/_nuxt/pages_test.072bbd8604771088ac47.js",
    "revision": "1d883dc1ade89ccc59e95075fdb1c555"
  },
  {
    "url": "/_nuxt/vendor.2e71cd38354c35d70b03.js",
    "revision": "eedab697e75c4539d1d013f7c5a9c66e"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

