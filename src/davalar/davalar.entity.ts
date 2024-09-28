import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, Unique, CreateDateColumn } from 'typeorm';

@Entity('Davalar')
export class DavalarEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  esasNo: string;

  @Column()
  mail: string;

  // Davacı Bilgileri
  @Column()
  davaciVekilAdi: string;

  @Column()
  davaciVekilSoyadi: string;

  @Column()
  davaciVekilTc: string;

  @Column()
  davaciVekilAdres: string;

  @Column()
  davaciAdi: string;

  @Column()
  davaciSoyadi: string;

  @Column()
  davaciTc: string;

  @Column()
  davaciAdresi: string;

  @Column()
  davaciIletisim: string;

  @Column()
  davaciMeslegi: string;

  // Davalı Bilgileri
  @Column()
  davaliVekilAdi: string;

  @Column()
  davaliVekilSoyadi: string;

  @Column()
  davaliVekilTc: string;

  
  @Column()
  davaliVekilAdres: string;

  @Column()
  davaliAdi: string;

  @Column()
  davaliSoyadi: string;

  @Column()
  davaliTc: string;

  @Column()
  davaliAdresi: string;

  @Column()
  davaliIletisim: string;

  @Column()
  davaliMeslegi: string;

  // Genel Bilgiler
  @Column()
  genelBilgiler: string;

  @Column()
  mahkemeAsamasi: string;

  @Column()
  il: string;

  @Column()
  ilce: string;

  @Column()
  count: string;

  @Column()
  gorevliMahkeme: string;

  @Column({ type: 'datetime', nullable: true })
  baslamaTarihi: Date;

  @Column({ type: 'datetime', nullable: true })
  durusmaTarihi: Date;

  @Column()
  notlar: string;

  // Diğer Özellikler (isteğe bağlı)
  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updatedAt: Date;

  @CreateDateColumn({ type: 'timestamp', nullable: true })
  createdAt: Date;
}
