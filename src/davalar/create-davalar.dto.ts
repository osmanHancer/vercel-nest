export class CreateDavalarDto {
    id: number;
  

    esasNo: string;
  

    mail: string;
  
    // Davacı Bilgileri

    davaciVekilAdi: string;
  

    davaciVekilSoyadi: string;
  

    davaciVekilTc: string;
  

    davaciVekilAdres: string;
  

    davaciAdi: string;
  

    davaciSoyadi: string;
  

    davaciTc: string;
  

    davaciAdresi: string;
  

    davaciIletisim: string;
  

    davaciMeslegi: string;
  
    // Davalı Bilgileri

    davaliVekilAdi: string;
  

    davaliVekilSoyadi: string;
  

    davaliVekilTc: string;
  
    

    davaliVekilAdres: string;
  

    davaliAdi: string;
  

    davaliSoyadi: string;
  

    davaliTc: string;
  

    davaliAdresi: string;
  

    davaliIletisim: string;
  

    davaliMeslegi: string;
  
    // Genel Bilgiler

    genelBilgiler: string;
  

    mahkemeAsamasi: string;
  

    il: string;
  

    ilce: string;
  

    count: string;
  

    gorevliMahkeme: string;
  
    baslamaTarihi: Date;
  
    durusmaTarihi: Date;
  

    notlar: string;
  
    // Diğer Özellikler (isteğe bağlı)
    updatedAt: Date;
  
    createdAt: Date;
}
