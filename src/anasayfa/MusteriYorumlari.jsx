import React from 'react'

const MusteriYorumlari = () => {
  return (
    <div className='my-8'>
      <h1 className='text-center text-3xl font-bold underline text-red-800 p-2 pt-6  underline-offset-4'>MÜŞTERİ YORUMLARI</h1>


      <div className="object-cover w-full gap-4 flex-wrap flex justify-center items-center p-8 ">


        <div className="w-60 min-h-[390px] p-2 bg-white rounded-xl transition-all hover:-translate-y-2 duration-300 shadow-lg shadow-black hover:shadow-2xl">

          <img className="h-40 object-cover w-60 rounded-xl" src="https://images.pexels.com/photos/935760/pexels-photo-935760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 " alt="" />
          <div className="p-2">

            <h2 className="font-bold text-lg mb-2 ">Ayşe K.</h2>

            <p className="text-sm text-gray-600">Mağazanın hizmet kalitesi gerçekten mükemmel! Personel çok yardımsever ve anlayışlı. Her zaman güler yüzle karşılanıyorum ve ihtiyaçlarımı hızlı bir şekilde karşılıyorlar. Kesinlikle tavsiye ederim!</p>
          </div>


        </div>

        <div className="shadow-black min-h-[390px] w-60 p-2 bg-white rounded-xl transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">

          <img className="h-40 object-cover  w-60 rounded-xl" src="https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <div className="p-2">

            <h2 className="font-bold text-lg mb-2 ">Canan A.</h2>

            <p className="text-sm text-gray-600">Online müşteri hizmetleri harika! Sorularıma hızlı bir şekilde yanıt verdiler ve yardımcı oldular. Müşteri memnuniyetine verdikleri önemi takdir ediyorum.</p>
          </div>


        </div>


        <div className="shadow-black min-h-[390px] w-60 p-2 bg-white rounded-xl transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">

          <img className="h-40 object-cover w-60  rounded-xl" src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <div className="p-2">

            <h2 className="font-bold text-lg mb-2 ">Buğra S.</h2>

            <p className="text-sm text-gray-600">Bu şirketin müşteri hizmetleri gerçek bir örnek! Bir problem yaşadığımda hemen çözüm buldular ve beni asla yanıtsız bırakmadılar. Şirketin müşteri memnuniyetine verdikleri önem göz önünde bulundurularak güvenle tercih edebilirsiniz.</p>
          </div>


        </div>

        <div className="shadow-black min-h-[390px] w-60 p-2 bg-white rounded-xl transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">

          <img className="h-40 object-cover w-60 object-top rounded-xl" src="https://images.pexels.com/photos/1959036/pexels-photo-1959036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <div className="p-2">

            <h2 className="font-bold text-lg mb-2 ">Yiğit Ö.</h2>

            <p className="text-sm text-gray-600">Teknik servis personelinin bilgi ve becerisi kesinlikle takdire şayandı! Sorunumu net bir şekilde anlayıp hızlı bir çözüm sunarak beni memnun ettiler. Zamanında ve etkili bir hizmet aldım</p>
          </div>

        </div>
      </div>


    </div>
  )
}

export default MusteriYorumlari