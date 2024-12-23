import React from 'react'
import "./Hero.scss"

const Hero = () => {
  return (
    <>
    <section className="section">

        <div className="title">
            <h1>СТАНЦИЯ ПАХТАКОР </h1>
        </div>
    <div className="container">
        <div className="wrapper">


            <div className="text">
                <p>«Пахтако́р» (узб. Paxtakor — хлопкороб) — станция Ташкентского метрополитена.

Пущена в эксплуатацию 6 ноября 1977 года в составе первого участка Чиланзарской линии : «Сабир Рахимов» — «Октябрьской Революции».

Расположена между станциями : «Дружба Народов» и «Мустакиллик майдони».</p>
            </div>

            <div className="photo">
                <img  src="./i.webp " alt="" />
            </div>



        </div>
    </div>

    </section>
    </>

  )
}

export default Hero
