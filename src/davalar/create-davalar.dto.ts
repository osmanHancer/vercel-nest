export class CreateDavalarDto {

    id: number;

  
    dosyaNo: string;
  
    mail: string;
  
    // Davacı Bilgileri
  
    davaciAdi: string;
  
    davaciSoyadi: string;
  
    davaciAdresi: string;
  
    davaciIletisim: string;
  
    davaciMeslegi: string;
  
    // Davalı Bilgileri
  
    davaliAdi: string;
  
    davaliSoyadi: string;
  
    davaliAdresi: string;
  
    davaliIletisim: string;
  
    davaliMeslegi: string;
  
    // Genel Bilgiler
  
    genelBilgiler: string;
  
    il: string;
    
    baslamaTarihi: Date;
  
    gorevliMahkeme: string;
  
    davaAsamasi: string;
  
    notlar: string;
  
    // Diğer Özellikler (isteğe bağlı)
    createdAt: Date;
    updatedAt: Date;
}
