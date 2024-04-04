import Grid from "@mui/material/Grid";
import Image from "next/image";

export default function LearnMore() {
  return (
    <Grid container rowGap={12} className="m-auto mb-20 mt-48 px-10 md:px-20 ">
      <Grid item xs={12} md={6}>
        <div className="h-full flex flex-col justify-center items-start gap-16 ">
          <h2 className="font-semibold text-5xl text-black tracking-tight">
            Herkes kendi mutfağında şef olabilir mi?
          </h2>
          <p className="text-left text-stone-600 font-normal text-base text-wrap">
            Bu sorunun cevabı kesinlikle evet. Yemek yapmak belli seviyede
            yetenek gerektirmekle birlikte evinizde yemek yapmak ve bunları
            basit ama etkili sunumlarla sunmak için kesinlikle doğru yöntemler
            ve bolca pratikle sağlamak mümkün. Hevesli olan herkes doğru
            kuralları uygulayarak kendi mutfağının şefi olabilir.
          </p>
          <button className="rounded-2xl w-[200px] h-[60px] text-white font-medium text-sm flex justify-center items-center gap-5  bg-black">
            Daha fazla bilgi edin
          </button>
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        className="bg-gradient-to-t from-skyblue rounded-4xl relative w-full h-52 md:60 md:h-[500px]">
        <Image
          src={"/images/HappyChef.svg"}
          width={660}
          height={600}
          alt="Chef"
          className="absolute bottom-0 -left-10"
        />
      </Grid>
    </Grid>
  );
}
