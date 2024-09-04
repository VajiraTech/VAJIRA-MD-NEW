<h2 align="center"> IOS NEWS </h2>

<h4 align="center">

🍎 The UnOfficial ios News Scraper By [Mr Nima](https://github.com/DarkMakerofc). <br>

 </h4>
 
 [ Using This Npm Package ]
* [Get All News](#allnews)
* [Get News Using Link](#latest)
* [Get Latest News](#fromlink)


<br>

#### ⬇️ Install Package 
     npm install ios-news
or 

     yarn add ios-news

<br>

#### ➡️ Require Package 
     const { IOSNEWS } = require('ios-news')

#### ▶️ Start Package 
     const data = await IOSNEWS()
     
     
#### 📝 Get All News List 
<a name= "allnews">

```

data.all()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
  
```

#### ✅ All News Result 

```
{
   "creator": "MR NIMA",
   "status": true,
   "result": [
      {
         "title": "Apple Says Vision Pro Does Not Support Hard Contact Lenses",
         "time": "Friday January 19 |  2024 5:33 am PST",
         "img": "https://images.macrumors.com/t/h4pQvRvdnJBhyQ0GF55pSD-oRVc=/400x0/article-new/2023/11/apple-vision-pro-eye.jpg?lossy",
         "link": "https://www.macrumors.com/2024/01/19/apple-says-vision-pro-no-hard-contact-lenses/",
         "desc": "Apple Vision Pro should not be used while wearing hard contact lenses, Apple says in its pre-order process for its new spatial computing headset."
      },
      {
         "title": "Apple Releases Vision Pro Accessories, Including $199 Travel Case",
         "time": "Friday January 19 |  2024 5:22 am PST",
         "img": "https://images.macrumors.com/t/N3x_KQSwAml8LIA7Yidrvhs04rw=/400x0/article-new/2024/01/vision-pro-case-feature.jpg?lossy",
         "link": "https://www.macrumors.com/2024/01/19/apple-releases-vision-pro-accessories/",
         "desc": "Apple today added a range of Vision Pro accessories to its online store in the U.S., including a $199 travel case for the headset."
      },
      {
         "title": "Maxed-Out Apple Vision Pro Headset Costs Almost $4,800",
         "time": "Friday January 19 |  2024 5:18 am PST",
         "img": "https://images.macrumors.com/t/aX3bXxaRdduItY7J1kIZz-OQdZI=/400x0/article-new/2023/06/vision-pro-headset.jpg?lossy",
         "link": "https://www.macrumors.com/2024/01/19/maxed-out-apple-vision-pro-headset/",
         "desc": "A top-specification Vision Pro headset with all optional extras costs $4,795.95, which is $1,296.95 more than the device's $3,499 starting price. "
      },
      {
         "title": "AppleCare+ for Vision Pro Headset Costs $499",
         "time": "Friday January 19 |  2024 5:03 am PST",
         "img": "https://images.macrumors.com/t/OIT90QcvAZ_KDbvRk6HFPt4tomI=/400x0/article-new/2021/12/applecare-apple-care-banner.jpg?lossy",
         "link": "https://www.macrumors.com/2024/01/19/applecare-plus-for-vision-pro/",
         "desc": "Today's Apple Vision Pro pre-order process unveiled that AppleCare+ for the headset is priced at $499."
      },
      {
         "title": "Apple Vision Pro Available With These Three Storage Options",
         "time": "Friday January 19 |  2024 5:02 am PST",
         "img": "https://images.macrumors.com/t/MqYkBbb0n-BJJnmeY3mo17FP2jQ=/400x0/article-new/2016/02/apple-vision-pro.jpeg?lossy",
         "link": "https://www.macrumors.com/2024/01/19/vision-pro-available-with-these-storage-options/",
         "desc": "Apple's Vision Pro headset is available with three different storage options, today's pre-order process has revealed."
      },
      {
         "title": "Apple Shares Vision Pro Specs: Up to 1TB Storage, M2 Chip With 8-Core CPU, 16GB RAM, and More",
         "time": "Friday January 19 |  2024 5:02 am PST",
         "img": "https://images.macrumors.com/t/bbRKhoqe7LYQl60tpdRFEhPUw54=/400x0/article-new/2023/06/apple-vision-pro-chips.jpg?lossy",
         "link": "https://www.macrumors.com/2024/01/19/apple-vision-pro-tech-specs/",
         "desc": "Apple today finally shared additional tech specs for its Vision Pro headset following the start of pre-orders in the United States."
      },
      {
         "title": "Apple Vision Pro Now Available for Pre-Order",
         "time": "Friday January 19 |  2024 5:01 am PST",
         "img": "https://images.macrumors.com/t/j6Eupmg9G5IbsN3KDgJM-BVgg5s=/400x0/article-new/2024/01/Vision-Pro-Pre-Orders-Feature-1.jpg?lossy",
         "link": "https://www.macrumors.com/2024/01/19/apple-vision-pro-now-available-for-pre-order/",
         "desc": "Apple is now accepting pre-orders for the Apple Vision Pro, the company's first spatial computing device. Orders are live in the U.S. online store, with the Vision Pro limited to the United States for the time being."
      },
      {
         "title": "iPhone 16 Pro Models to Come With 2TB Storage Option, Claims Rumor",
         "time": "Friday January 19 |  2024 3:06 am PST",
         "img": "https://images.macrumors.com/t/vkKQSE-JHf57kyxrnCGDw8CmtLI=/400x0/article-new/2024/01/iPhone-16-Pro-Right-Side-Feature.jpg?lossy",
         "link": "https://www.macrumors.com/2024/01/19/iphone-16-pro-2tb-option-rumor/",
         "desc": "This year's forthcoming iPhone 16 Pro models will be available with a new 2TB maximum storage option, claims a new rumor coming out of Korea."
      },
      {
         "title": "Apple Store Down Ahead of Vision Pro Headset Pre-Orders",
         "time": "Friday January 19 |  2024 2:11 am PST",
         "img": "https://images.macrumors.com/t/ClVzXHLFYRHXXtHjgi_xf3yYFeg=/400x0/article-new/2024/01/apple-store-down-vision-pro.jpg?lossy",
         "link": "https://www.macrumors.com/2024/01/19/apple-store-down-vision-pro-pre-orders/",
         "desc": "Apple's online store is down in the U.S. ahead of Vision Pro pre-orders, which are scheduled to open at 5:00 a.m. Pacific Time, ahead of the device's official launch on Friday, February 2. "
      },
      {
         "title": "UK 'Body Coach' Joe Wicks to Make Guest Appearance on Apple Fitness+",
         "time": "Friday January 19 |  2024 1:32 am PST",
         "img": "https://images.macrumors.com/t/cFnhBsXdqiYjHCDNRJbGsuWM_9w=/400x0/article-new/2024/01/Apple-Fitness-Plus-UK-Joe-Wicks.jpg?lossy",
         "link": "https://www.macrumors.com/2024/01/19/joe-wicks-guest-appearance-apple-fitness/",
         "desc": "Apple has announced that British fitness coach Joe Wicks MBE, also known as \"The Body Coach,\" is set to make a guest appearance in Apple Fitness+ to \"help users kick-start their fitness routine\" this new year."
      },
      {
         "title": "iPhone 16 Capture Button Will Respond to Touch and Pressure for Zooming and Focusing",
         "time": "Thursday January 18 |  2024 5:09 pm PST",
         "img": "https://images.macrumors.com/t/wpp-f8jJT-4oBBgx-_YG81g4USM=/400x0/article-new/2023/11/iPhone-16-Pro-Mock-Header-Updated.jpg?lossy",
         "link": "https://www.macrumors.com/2024/01/18/iphone-16-capture-button-touch-pressure/",
         "desc": "Apple is planning to add a new \"Capture Button\" to the iPhone 16 models, as we first reported back in September. When the news broke about the extra button, we didn't initially know what it was for, but the name gave us some hints and Bloomberg's Mark Gurman confirmed in December that it would be used for taking video."
      },
      {
         "title": "Apple Giving Employees 25% Discount on Vision Pro",
         "time": "Thursday January 18 |  2024 4:33 pm PST",
         "img": "https://images.macrumors.com/t/qAYIv7yaK9hACD5AtWyfxSrTMPg=/400x0/article-new/2024/01/Apple-Vision-Pro-Dual-Loop-Band-Purple-Feature.jpg?lossy",
         "link": "https://www.macrumors.com/2024/01/18/apple-vision-pro-employee-discount/",
         "desc": "Apple employees will be able to purchase the Vision Pro at a 25 percent discount, which drops the price of the device $3,500 to approximately $2624, not including tax."
      },
      {
         "title": "Apple Says Vision Pro Could Be Used for Surgeries, Technical Training and More",
         "time": "Thursday January 18 |  2024 4:05 pm PST",
         "img": "https://images.macrumors.com/t/mFfcF0PvWgHBx2bgEPVXyG94mb8=/400x0/article-new/2024/01/vision-pro-macbook.jpg?lossy",
         "link": "https://www.macrumors.com/2024/01/18/vision-pro-enterprise-uses/",
         "desc": "Apple executives believe the Vision Pro has a number of enterprise applications, from advanced technical training to use in operating rooms, according to a video sent out to employees."
      },
      {
         "title": "Pre-Ordering Apple Vision Pro: What You Need to Know",
         "time": "Thursday January 18 |  2024 3:01 pm PST",
         "img": "https://images.macrumors.com/t/vSE1u3hvNu7GljTpULoIhbYQd_U=/400x0/article-new/2023/06/vision-pro-headset-1.jpg?lossy",
         "link": "https://www.macrumors.com/how-to/apple-vision-pro-pre-order-need-to-know/",
         "desc": "Apple has announced that its Vision Pro headset will officially launch in the United States on February 2, and that pre-orders will be open starting Friday, January 19, at 5:00 a.m. Pacific Time. Here's everything you need to know about pre-ordering your unit on Apple's online store."
      },
      {
         "title": "YouTube and Spotify Apps Won't Be Available on Vision Pro",
         "time": "Thursday January 18 |  2024 2:42 pm PST",
         "img": "https://images.macrumors.com/t/AiRCQZCscQbZRG2kXAhwM8feU_Q=/400x0/article-new/2023/06/Apple-Vision-Pro-with-battery-Feature-Blue-Magenta.jpg?lossy",
         "link": "https://www.macrumors.com/2024/01/18/youtube-spotify-vision-pro/",
         "desc": "YouTube and Spotify do not plan to offer apps on the Vision Pro headset, according to a new report from Bloomberg. YouTube said that it is not developing a YouTube Vision Pro app, nor will it allow the YouTube iPad app to run on the device."
      },
      {
         "title": "Super Fruit Ninja on Vision Pro Lets Gamers Chop Fruit With Hand Gestures",
         "time": "Thursday January 18 |  2024 12:50 pm PST",
         "img": "https://images.macrumors.com/t/ZEbIeVP0TuAmSVoiImmPFN6xFXw=/400x0/article-new/2024/01/fruit-ninja-vision-pro-1.jpeg?lossy",
         "link": "https://www.macrumors.com/2024/01/18/super-fruit-ninja-vision-pro/",
         "desc": "Fruit Ninja from Halfbrick Studios was developed for the iPhone in 2010, and since then, it's been one of the best-known mobile games. The Apple Arcade version is set to come to the Vision Pro, and Halfbrick today shared details on how it was customized for Apple's spatial computer."
      },
      {
         "title": "Masimo CEO: Apple Watch Blood Oxygen Sensor is Not Reliable, Customers Are 'Better Off Without It'",
         "time": "Thursday January 18 |  2024 12:04 pm PST",
         "img": "https://images.macrumors.com/t/mbcDEBnskEFc5Li2isUCma3wZuE=/400x0/article-new/2023/05/apple-watch-ultra-yellow.jpg?lossy",
         "link": "https://www.macrumors.com/2024/01/18/masimo-ceo-apple-blood-oxygen-sensor-unreliable/",
         "desc": "As Apple starts selling Apple Watch Series 9 and Ultra 2 models without the blood oxygen sensor enabled, Masimo CEO Joe Kiani confirmed to Bloomberg that there has been no chat with Apple about a possible settlement."
      },
      {
         "title": "Some Apple Stores Closing Early on Sunday Ahead of Vision Pro Launch",
         "time": "Thursday January 18 |  2024 11:53 am PST",
         "img": "https://images.macrumors.com/t/yczF0lu4XX1qQdYb561ieSMLaoU=/400x0/article-new/2023/06/Apple-Vision-Pro-at-Steve-Jobs-Theater.jpeg?lossy",
         "link": "https://www.macrumors.com/2024/01/18/some-apple-stores-closing-early-sunday/",
         "desc": "At least 70 of Apple's retail stores in the U.S. will be closing earlier than usual on Sunday, according to Apple's website. Most of Apple's other retail stores across the country already have reduced hours on Sundays."
      }
   ]
}

```
</a>

<br>

<br>


#### 📝 Fetch Latest News

<a name= "latest">

```
data.latest()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

```

#### ✅ Latest News Result

```
{
   "creator": "MR NIMA",
   "status": true,
   "result": {
      "title": "AppleCare+ for Vision Pro Headset Costs $499",
      "link": "https://www.macrumors.com/2024/01/19/applecare-plus-for-vision-pro/",
      "images": [
         "https://images.macrumors.com/t/OIT90QcvAZ_KDbvRk6HFPt4tomI=/400x0/article-new/2021/12/applecare-apple-care-banner.jpg?lossy"
      ],
      "desc": "Today's Apple Vision Pro pre-order process unveiled that AppleCare+ for the headset is priced at $499.\n‌AppleCare‌+ for the Vision Pro includes unlimited repairs for accidental damage protection, Apple-certified service and support, Express Replacement Service (the company will ship you a replacement so you don't have to wait for a repair), and 24/7 priority access to \"Apple experts.\"\nThe pricing of ‌AppleCare‌ for the Vision Pro was not clear until pre-orders opened earlier today. The Vision Pro launches in the U.S. on Friday, February 2.\nMore to follow...\n\nMacRumors attracts a broad audience of both consumers and professionals interested in the latest technologies and products. We also boast an active community focused on purchasing decisions and technical aspects of the iPhone, iPad, Mac, and other Apple platforms.\n"
   }
}
```
</a>
<br>
<br>

#### 📝 Get News From Link

<a name= "fromlink">

```
data.fromlink("https://www.macrumors.com/2024/01/19/applecare-plus-for-vision-pro/")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
```

#### ✅ Latest News Result

```
{
   "creator": "MR NIMA",
   "status": true,
   "result": {
      "title": "AppleCare+ for Vision Pro Headset Costs $499",
      "link": "https://www.macrumors.com/2024/01/19/applecare-plus-for-vision-pro/",
      "images": [
         "https://images.macrumors.com/t/OIT90QcvAZ_KDbvRk6HFPt4tomI=/400x0/article-new/2021/12/applecare-apple-care-banner.jpg?lossy"
      ],
      "desc": "Today's Apple Vision Pro pre-order process unveiled that AppleCare+ for the headset is priced at $499.\n‌AppleCare‌+ for the Vision Pro includes unlimited repairs for accidental damage protection, Apple-certified service and support, Express Replacement Service (the company will ship you a replacement so you don't have to wait for a repair), and 24/7 priority access to \"Apple experts.\"\nThe pricing of ‌AppleCare‌ for the Vision Pro was not clear until pre-orders opened earlier today. The Vision Pro launches in the U.S. on Friday, February 2.\nMore to follow...\n\nMacRumors attracts a broad audience of both consumers and professionals interested in the latest technologies and products. We also boast an active community focused on purchasing decisions and technical aspects of the iPhone, iPad, Mac, and other Apple platforms.\n"
   }
}
```
</a>

# Author : [@mrnima](https://github.com/darkmakerofc)

All news rights belong to [macrumors.com](https://macrumors.com) site
