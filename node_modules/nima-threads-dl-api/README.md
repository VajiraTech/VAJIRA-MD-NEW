<p align="center">
<img src="https://telegra.ph/file/cbbbb1d29628fc6834b2d.png" width="100" height="100"/>
</p>
<h2 align="center"> THREADS DOWNLOAD API </h2>
<h6 align="center"> A Simple threads Video & image Downloader </h6>
<br> 

#### ⬇️ Install
```
npm install nima-threads-dl-api
```

#### 📖 Example 
```
const { Download } = require("nima-threads-dl-api")

Download('https://www.threads.net/t/Cujx6ryoYx6/?igshid=NTc4MTIwNjQ2YQ==').then((result) => {
console.log(result)
})
  .catch((error) => {
console.log(error)
})
```

#### ✅ Result 
```
{
  author: 'Mr Nima',
  data_url: 'https://www.threads.net/t/Cujx6ryoYx6/?igshid=NTc4MTIwNjQ2YQ==',
  status: true,
  download: [
    {
      type: 'image',
      url: 'https://scontent.cdninstagram.com/v/t51.2885-15/358519876_815212506796492_3919811304555590396_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=5jUfXeMlOCcAX_3Q7mj&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzE0NDU3NjUwMTg2Mzc3OTQ1MA%3D%3D.2-ccb7-5&oh=00_AfBRsuRBCJ3jndvx2u8jf7emgSYuLSSaZX-4LySt_DRp3w&oe=64B31A2D&_nc_sid=10d13b',
      preview_url: 'https://scontent.cdninstagram.com/v/t51.2885-15/358519876_815212506796492_3919811304555590396_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=5jUfXeMlOCcAX_3Q7mj&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzE0NDU3NjUwMTg2Mzc3OTQ1MA%3D%3D.2-ccb7-5&oh=00_AfBRsuRBCJ3jndvx2u8jf7emgSYuLSSaZX-4LySt_DRp3w&oe=64B31A2D&_nc_sid=10d13b'
    }
  ]
}
```
<br><br>


#### 👨‍💻 Author : [Mr Nima](https://github.com/Darkmakerofc)