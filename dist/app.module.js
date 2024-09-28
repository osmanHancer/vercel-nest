"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_module_1 = require("./users/user.module");
const davalar_module_1 = require("./davalar/davalar.module");
const fileupload_module_1 = require("./fileupload/fileupload.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forRoot({
                "type": "mysql",
                "host": "mysqltubitak-ohancer74-754d.l.aivencloud.com",
                "port": 20210,
                "username": "avnadmin",
                "password": "AVNS_UvV-Ign5rZP5i099-PL",
                "database": "test",
                "timezone": "Z",
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
                    duration: 60000
                }
            }), user_module_1.UserModule, davalar_module_1.DavalarModule, fileupload_module_1.FileuploadModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map