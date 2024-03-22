import React from "react";
import Image from "next/image";
export default function About() {
  return (
    <div className="flex flex-col items-center justify-center p-10">
      <Image
        src="/images/hakkimizda.png"
        alt="about"
        width={900}
        height={900}
        className="flex items-center justify-center mb-5"
      />
      <p className=" font-medium text-xl text-black px-12 py-3 ">
        Foodieland, sevdiklerini mutlu etmek için mutfağa girenlerin, tek başına
        olsa bile yaptığı yemeğin lezzetli olduğunu görünce kendiyle gurur
        duyanların, mutfağı daha fazla keşfetmesini sağlayan bir bilgiyi dört
        bir yana paylaşmak isteyenlerin, yeri geldiğinde kendine daha fazla
        vakit ayırmak için pratik tarif peşinde koşanların, herkesin bütçesine
        göre bir tarif olduğunu bilenlerin, yemek yaparken günlük hayatın
        zorluklarını bir çırpıda unutanların ve bunların hepsinden mutlak keyif
        alanların sitesi...
      </p>
      <p className=" font-medium text-xl text-black px-12 py-3 ">
        Her gün milyonlarca kişiye dokunan Foodieland, web sitesi, mobil
        uygulaması ve sosyal medya hesaplarıyla "Bugün ne pişirsem?" diye
        düşünenlerin de hafta sonu kahvaltıya nereye gitsek diyenlerin de "Pilav
        lapa olursa ne yapılır?" diye çözüm arayanların da hayatını
        kolaylaştırıyor. Hepsi denenmiş, adım adım fotoğraflı ve stüdyoda
        şeflerimiz tarafından üretilmiş videolu tarifleriyle mutfakta kötü
        sürprizlere yer bırakmıyor.
      </p>
      <p className=" font-medium text-xl text-black px-12 py-3 ">
        Siz de Foodieland'a üye olarak beğendiğiniz, "Ben bunu yaparım"
        dediğiniz tarifleri, tarif defterinize ekleyebilir, dilediğinizde onlara
        tek dokunuşla ulaşabilir, dahası şahane tariflerinizi bizimle paylaşıp
        adınızla Foodieland'da yayınlanmasını sağlayabilir, en güzeli de
        mutfağınıza giren bir tarifimiz olursa bizlere haber verebilirsiniz.
      </p>
      <p className=" font-medium text-xl text-black px-12 py-3 ">
        Ayrıca "Mutlaka gitmem lazım" dediğiniz mekan önerilerini, öğretici,
        ilham verici içerikleri, tarif listelerini favorilerinize ekleyebilir,
        beğendiğiniz yazarları takip edebilir, tarifleri puanlayabilir ve yorum
        bırakabilirsiniz. Her gün onlarca yenisi eklenen onbinlerce tarifimizle,
        yemek yapmaktan ve yemek yemekten keyif alan herkese soframızda yer var.
      </p>
      <p className=" font-medium text-xl text-black px-12 py-3 ">
        İyi ki varsınız, hoş geldiniz!
      </p>
    </div>
  );
}
