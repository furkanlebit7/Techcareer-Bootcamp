import React from "react";
import { Accordion } from "flowbite-react";
const Sss = () => {
  return (
    <Accordion>
      <Accordion.Panel>
        <Accordion.Title className="dark:bg-darkContent dark:hover:bg-darkMain">
          Bilet fiyatına KDV dahil mi?
        </Accordion.Title>
        <Accordion.Content className="dark:bg-darkContent">
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Bilet fiyatlarına KDV dahildir.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className="dark:bg-darkContent dark:hover:bg-darkMain">
          Etkinliklere çocuk girebiliyor mu?
        </Accordion.Title>
        <Accordion.Content className="dark:bg-darkContent ">
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Çocukların etkinliklere giriş hakkı mekana ve etkinliğe göre
            farklılık gösterebileceği gibi bazı etkinliklerde yaş sınırı da
            olabilir. İlgilendiğiniz etkinlikteki durumu öğrenmek için etkinliğe
            ait satış sayfasının “Lütfen Not Edin” bölümünü kontrol
            edebilirsiniz.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className="dark:bg-darkContent dark:hover:bg-darkMain">
          Biletimin üzerinde başkasının adı yazıyor. Girişte sorun yaşar mıyım?
        </Accordion.Title>
        <Accordion.Content className="dark:bg-darkContent ">
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Etkinlik için; satın almış olduğunuz biletin PDF’ini göstererek
            etkinliğe giriş yapabilirsiniz. Etkinlikler için isim kontrolü
            yapılmamaktadır. Passolig kapsamında, TC kimlik numarası ile satış
            yapılan maçlarda; satın alınan biletler kimin adına ve TC kimlik
            numarasına satış yapıldı ise sadece o kişi bileti kullanabilir
          </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
};

export default Sss;
