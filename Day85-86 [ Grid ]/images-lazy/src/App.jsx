import { useEffect, useState } from "react";
import ImageCard from "./ImageCard";


const config = {
  rootMargin : '100px 0px 0px 0px',
  threshold : 0
}

function App() {
  const [images, setImages] = useState([])
 
  const loadImages = async () => {
    const response = await fetch('https://picsum.photos/v2/list');
    const json = await response.json()
    console.log(json)
    setImages(json)
  }

  useEffect(() => {
    loadImages()
  }, [])

  useEffect(() => {
    let observer = new window.IntersectionObserver((entries, self) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting){
          getImages(entry.target)
          self.unobserve(entry.target)
        }
      });
    }, config)

    const images = document.querySelectorAll("[data-src]");

    images.forEach((image) => {
      observer.observe(image)
    })

    return () => {
      images.forEach((image) => {
        observer.unobserve(image)
      })
    }


  }, [images])

  const getImages = (image) => {
    image.src = image.dataset.src;
  }

  return (
    <>
     <h1>images</h1>
     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque error repellendus mollitia. Quia voluptatum doloremque voluptate nesciunt illum sint. Laborum possimus alias nisi, corporis nihil excepturi temporibus nobis dolor molestias libero similique repellendus rem minus iusto porro cum tempora asperiores, blanditiis error reiciendis delectus, est doloremque omnis? Magnam totam itaque minima laborum dolor amet, non cupiditate facere deserunt et saepe deleniti porro a aspernatur perspiciatis. Ullam iure id distinctio nisi quibusdam itaque unde. Nulla, sed magnam ipsa culpa fugiat aspernatur dicta officia tenetur eveniet iste eligendi accusamus molestiae porro quas, assumenda numquam qui error earum vitae, repudiandae quod aut? Odit.</p>
     
     <div className="images__box">
        { images?.map((image) => <ImageCard  key={image?.id} image={image} /> )}
     </div>

     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, perferendis laboriosam animi velit fugiat iure vitae eveniet, odit, maiores quasi magnam earum. Repellat laudantium error magnam libero porro id neque? Iure autem rem numquam? Explicabo in, accusantium dolorem expedita sed optio eaque nesciunt ea cupiditate et temporibus deleniti, assumenda placeat modi distinctio natus laboriosam fuga atque hic sequi esse quod odit dolores? Vel, unde voluptatem? Libero dolor voluptate, mollitia exercitationem vel eum delectus optio. Nobis, provident natus numquam laborum odit ipsa! Voluptatum assumenda suscipit ea dolorem atque fugit quo neque aut tempora modi sequi, quas est a, maiores exercitationem obcaecati temporibus perspiciatis ad mollitia? Veritatis, inventore! A harum enim non itaque expedita, rerum quas facere quo vel reprehenderit molestias repellendus vitae nesciunt adipisci officia voluptate, consequuntur fugit consequatur, ut ipsam amet cupiditate corrupti quia ratione. Debitis voluptatem distinctio, quibusdam ea aut sunt, natus eveniet commodi numquam atque excepturi similique neque facere. Corrupti voluptatum, consequatur iste veritatis maiores omnis sed tempore.</p>
    </>
  )
}

export default App
