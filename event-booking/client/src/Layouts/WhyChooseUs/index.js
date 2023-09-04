import React from "react";

//Components
import WhyChooseCard from "../../Components/WhyChooseCard";
import SectionHeader from "../../Components/SectionHeader";

const WhyChooseUs = () => {
  return (
    <div className="bg bg-white dark:bg-darkContent  py-20 pb-28 px-5 lg:px-0">
      <SectionHeader
        title={"Why Choose Us"}
        description={"Reasions why you Choose Us"}
      />
      <div className="lg:container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 xl:w-2/3">
        <WhyChooseCard
          title={"Kapsamlı Etkinlik Kapsamı"}
          description={
            "Konserlerden tiyatro gösterilerine, festivallerden daha fazlasına kadar geniş bir etkinlik listesi sunuyoruz. Favori etkinliklerinizi kaçırmayın."
          }
          index={1}
        />
        <WhyChooseCard
          title={"Kolay Etkinlik Keşfi"}
          description={
            "Kullanıcı dostu arama ve filtre seçenekleri ile etkinlikleri kolayca keşfedin. Tercihlerinize göre mükemmel etkinliği sadece birkaç tıklamayla bulun."
          }
          index={2}
        />
        <WhyChooseCard
          title={"Doğrulanmış Etkinlik Bilgileri"}
          description={
            "Etkinlik detaylarının güncel ve doğru olduğunu bilerek rahatlayın. Etkinlik bilgilerini doğrulayarak size en güvenilir bilgiyi sunuyoruz."
          }
          index={3}
        />
        <WhyChooseCard
          title={"Kullanıcı Odaklı Deneyim"}
          description={
            "Biz sizin ihtiyaçlarınızı önemsiyoruz. Kişiselleştirilmiş bir kullanıcı profil oluşturun, favori etkinliklerinizi kaydedin ve size özel etkinlik önerileri alın."
          }
          index={4}
        />
        <WhyChooseCard
          title={"Güvenli Bilet Rezervasyonu"}
          description={
            "Güvenliğiniz bizim için önemlidir. Biletlerinizi platformumuz aracılığıyla güvenli bir şekilde rezerve edin ve işlemlerinizin korunduğundan emin olun."
          }
          index={5}
        />
        <WhyChooseCard
          title={"Mobil Uyumluluk"}
          description={
            "Her yerden platformumuza erişim sağlayın. Mobil uyumlu tasarımımız, etkinlikleri cep telefonunuz veya tabletinizden bulup rezerve etmenizi kolaylaştırır."
          }
          index={6}
        />
      </div>
    </div>
  );
};

export default WhyChooseUs;
