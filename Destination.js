import { Outlet } from "react-router-dom";
const Destination = () => {
    return ( 
        <>
        <center>
          <h1>Explore Around India</h1>
        </center>
       <div class="container">
  <div class="row">
    <div class="col col-md-6 col-sm-12">
      <div class="card" >
      <img src="https://images.unsplash.com/photo-1578564969231-039947801495?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFuYWxpfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="myimage" width="545px" height="330px" />
        <div class="card-body">
          <h5 class="card-title">Manali</h5>
          <p class="card-text">Manali is a high-altitude Himalayan resort town in India, a backpacking center and honeymoon destination. Set on the Beas River, it’s a gateway for skiing in the Solang Valley and trekking in Parvati Valley. It's also a jumping-off point for paragliding, rafting and mountaineering in the Pir Panjal mountains, home to 4,000m-high Rohtang Pass. </p>
          <a href="#" class="btn btn-primary">Book Package</a>
        </div>
      </div>
     </div>
     <div class="col col-md-6 col-sm-12">
      <div class="card" >
      <img src="https://media.istockphoto.com/id/505648464/photo/varanasi-india.webp?b=1&s=170667a&w=0&k=20&c=SewPVr-CxD0dgUTZ_DZ9kLWy1xla52CxHYiYuwK-Mqg=" alt="myimage" width="545px" height="330px" />
        <div class="card-body">
          <h5 class="card-title">Varanasi</h5>
          <p class="card-text">Varanasi is a city in the northern Indian state of Uttar Pradesh, the spiritual capital of India, the city draws Hindu pilgrims who bathe in the Ganges River’s sacred waters and perform funeral rites. Along the city's winding streets are some 2,000 temples, including Kashi Vishwanath, the “Golden Temple,” dedicated to the Hindu god Shiva. </p>
          <a href="#" class="btn btn-primary">Book Package</a>
        </div>
      </div>
     </div>
     <div class="col col-md-6 col-sm-12">
      <div class="card" >
      <img src="https://images.unsplash.com/photo-1580741186862-c5d0bf2aff33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdvYXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" alt="myimage" width="545px" height="330px" />
        <div class="card-body">
          <h5 class="card-title">Goa</h5>
          <p class="card-text">Goa is a state in western India with coastlines stretching along the Arabian Sea. Its long history as a Portuguese colony prior to 1961 is evident in its preserved 17th-century churches and the area’s tropical spice plantations. Goa is also known for its beaches, ranging from popular stretches at Baga and Palolem to those in laid-back fishing villages such as Agonda. </p>
          <a href="#" class="btn btn-primary">Book Package</a>
        </div>
      </div>
     </div>
    <div class="col col-md-6 col-sm-12">
      <div class="card" >
      <img src="https://media.istockphoto.com/id/1388949960/photo/unbelievable-ancient-temple-ruins-in-hampi-at-sunset-india.webp?b=1&s=170667a&w=0&k=20&c=BfmOv7ahUJZ5R7Qvb_tc1UcrrMDESl0oaZbdO8UXBgs=" alt="myimage" width="545px" height="330px" />
        <div class="card-body">
          <h5 class="card-title">Hampi</h5>
          <p class="card-text">Hampi is an ancient village in the south Indian state of Karnataka. It’s dotted with numerous ruined temple complexes from the Vijayanagara Empire. On the south bank of the River Tungabhadra is the 7th-century Hindu Virupaksha Temple, near the revived Hampi Bazaar. A carved stone chariot stands in front of the huge Vittala Temple site. Southeast of Hampi, Daroji Bear Sanctuary is home to the Indian sloth bear.</p>
          <a href="#" class="btn btn-primary">Book Package</a>
        </div>
      </div>
    </div>
    <br></br>
    <div class="col col-md-6 col-sm-12">
      <div class="card" >
      <img src="https://images.unsplash.com/photo-1591089101324-2280d9260000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVubmFyfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="myimage" width="545px" height="330px" />
        <div class="card-body">
          <h5 class="card-title">Munnar</h5>
          <p class="card-text">Munnar is a town in the Western Ghats mountain range in India’s Kerala state. A hill station and former resort for the British Raj elite, it's surrounded by rolling hills dotted with tea plantations established in the late 19th century. Eravikulam National Park, a habitat for the endangered mountain goat Nilgiri tahr, is home to the Lakkam Waterfalls, hiking trails and 2,695m-tall Anamudi Peak.</p>
          <a href="#" class="btn btn-primary">Book Package</a>
        </div>
      </div>
    </div>

    <div class="col col-md-6 col-sm-12">
      <div class="card" >
      <img src="https://images.unsplash.com/photo-1527705381526-469031509a9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2FueWFrdW1hcml8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=600&q=60" alt="myimage" width="545px" height="330px" />
        <div class="card-body">
          <h5 class="card-title">Kanyakumari</h5>
          <p class="card-text">Kanyakumari is a coastal town in the state of Tamil Nadu on India's southern tip. Jutting into the Laccadive Sea, the town was known as Cape Comorin during British rule and is popular for watching sunrise and sunset over the ocean. It's also a noted pilgrimage site thanks to its Bagavathi Amman Temple, dedicated to a consort of Shiva, and its Our Lady of Ransom Church, a center of Indian Catholicism.</p>
          <a href="#" class="btn btn-primary">Book Package</a>
        </div>
      </div>
    </div>
  </div>
</div>
      
        <Outlet/>
      </>
     );
  }
  
  export default Destination