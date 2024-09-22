import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { DavalarModule } from './davalar/davalar.module';



@Module({
	imports: [TypeOrmModule.forRoot({
		"type": "mysql",
		"host": "mysqltubitak-ohancer74-754d.l.aivencloud.com",
		"port": 20210,
		"username": "avnadmin",
		"password": "AVNS_UvV-Ign5rZP5i099-PL",
		"database": "test",
		  "timezone":"UTC",
		"synchronize": true,
		ssl: {
			rejectUnauthorized: true,
			ca: `-----BEGIN CERTIFICATE-----
MIIEQTCCAqmgAwIBAgIURJogNSeObVjIp8OSesLLC9RJmrUwDQYJKoZIhvcNAQEM
BQAwOjE4MDYGA1UEAwwvMzRhYmZlNjQtMWY0OS00NmUxLWE2M2ItYmQ0ZGY3MDI3
YTFiIFByb2plY3QgQ0EwHhcNMjQwODA4MDczODIwWhcNMzQwODA2MDczODIwWjA6
MTgwNgYDVQQDDC8zNGFiZmU2NC0xZjQ5LTQ2ZTEtYTYzYi1iZDRkZjcwMjdhMWIg
UHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCCAYoCggGBALyvWYYg
aXviMaD9iIAz9wVxNfJkv52Q756olyJcfQS8d/Z10DzT0Vsi314u3JGzvlHCfznM
2wrTxAJfYpton4BZccYfme3mz7e/bw/f/ZkJiW9aYrYEQPrx8dhOCpXAZH4j9Aip
emOm/LdFYwJBrgJgr+4DMT0GgB1cfeCoFn4J1d5aOgmokCsJJ3vaKrmyV5rXeQDC
zvYtNxOpcTRGn6FbZJ+fqgrUvZE+dauTS9XXreNqSgxZwR14xI5O6Cf71mEYz+LU
JFXjOuz8mLgus8BgwsrnQhNwOLp6NDY6TFGwcJykVajFGILhJ+4r0yaxYlky7A1w
WiE5CgV12ovzWVMdg1QjGaE/9aZx2yoyn7zdxpeXRIlu43+Ko6kdq3Rg4Rno4O6K
+8DhZG1zyRo7tNkTNK7VlH6pmjLO/oFqCXfrEMhf+dcndnjivOk9xiLLKQ4wAlJF
xGuejZB4+W2Nuwe5JJ3QFa8GVk5uD2L0jmfDna6y2PxmKAqFItVndN4gQwIDAQAB
oz8wPTAdBgNVHQ4EFgQU33QxczhHnB0fgTb453Ec+1nPjc0wDwYDVR0TBAgwBgEB
/wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGBAEr/k7EajRUrEwRm
l13zvguDEMBoyd8hOIcvKQ24vEXOAx5fTR0pOI9cHeq7CzkV+9nGvHqbcONPPtIr
4VfruEwFI2aUGHwjXjkkFco4iV/kw6/StA8R7WzDzYevCfMG1KfwYwRb61Jh5loD
x+MwXqpcuyML8/1xQ27hIKDBbtEm+PUEdksWUdew+asV6aMZnlyDrUYAgk0egC5F
sRQAJADUL6Mxh8r73x4yvFrc9mVHhaxPB7YCvyedUnXYrS+kIRpdBIjbkY8I/Zld
WO3YKzqbbb62V8v3+j47pm7gnq/IJ2DD2ZzV2Y3PeujyP74UEbkR/v+setE5Dyzf
KmWpzQiScGcuH/zWepesW/0VrdyO+i9DnidGkSIzjDAKdEoH09SD2FYaHPLHMUcA
B5mLtHq9klQdVvJCm2supWkv+fCcPU1HnjhGvCPWkmE6Wm6GIr70TcYdHq3Kt3RG
hRIBCuCMNIAJkLlmC5y2aXomBRLyR/au1BnriN9sabitE7HcGw==
-----END CERTIFICATE-----
`
		},
		entities: [__dirname + '/../**/*.entity.js'],

		cache: {
			duration: 60000 // 60 saniye boyunca cache'le
		}
	}), UserModule, DavalarModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule { }