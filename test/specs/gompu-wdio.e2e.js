const allureReporter = require('@wdio/allure-reporter').default
const RegisterPage = require('../pageobjects/register-page')
const LoginPage = require('../pageobjects/login-page')
const ForgotPasswordPage = require('../pageobjects/forgotPassword-page')
const popUpCommponent = require('../pageobjects/popUp_Alert')
const {faker} = require('@faker-js/faker');
const updateProfilePage = require('../pageobjects/updateProfile-page');

//Test Data
var emailTester = ('shidqiadiatma@dispostable.com')
var passwordTester = ('passwordBenar12*')
var selectGender = faker.helpers.arrayElement(['Perempuan', 'Laki-laki'])
var selectBirthday = faker.helpers.arrayElement(['12052000', '30122000', '11082001', '17012001', '23111990'])
var randomName = faker.name.firstName()
var randomCity = faker.address.cityName()
var randomPhone = Math.floor(100000000 + Math.random() * 900000000000);
var randomEmail1 = 'email'+ Math.floor(100000000 + Math.random() * 900000000) + '@mail.com';
var randomEmail2 = faker.internet.email()
var wrongPassword = 'passwordsalah'

describe('[WebDriverIO] feature-registration', () => {
    beforeEach('', async () =>{
        await RegisterPage.open()
        await RegisterPage.go_to_registerPage()
    })
    it('TC01-Pengguna gagal registrasi menggunakan email terdaftar', async () => {
        await RegisterPage.register(randomName, emailTester, passwordTester)
        await expect(popUpCommponent.popUpAlert).toBeExisting()
        await expect(popUpCommponent.popUpAlert).toHaveTextContaining(
            'Email has already been taken')
    })
    it('TC02-Pengguna gagal registrasi menggunakan format password yang salah', async () => {
        await RegisterPage.register(randomName, randomEmail2, 'iniformatpasswordsalah')
        await expect(popUpCommponent.alertMessage_password).toBeExisting()
        await expect(popUpCommponent.alertMessage_password).toHaveTextContaining(
            'Kata Sandi tidak valid!')
    })
    it('TC03-Pengguna berhasil registrasi dengan email yang belum terdaftar', async () => {
        await RegisterPage.register(randomName, randomEmail2, passwordTester)
        await expect(popUpCommponent.popUpAlert).toBeExisting()
        await expect(popUpCommponent.popUpAlert).toHaveTextContaining(
            'Pendaftaran berhasil, harap verifikasi akun Anda!')
    })
})
describe('[WebDriverIO] feature-forgotPassword', () => {
    beforeEach('', async () =>{
        await ForgotPasswordPage.open()
        await ForgotPasswordPage.go_to_forgotPasswordPage()
    })
    it('TC04-Pengguna gagal meminta link forgot password dengan email yang tidak terdaftar', async () => {
        await ForgotPasswordPage.forgotPassword(randomEmail1)
        await expect(popUpCommponent.popUpAlert).toBeExisting()
        await expect(popUpCommponent.popUpAlert).toHaveTextContaining(
            'Email tidak ditemukan!')
    })
    it('TC05-Pengguna berhasil meminta link forgot password dengan email yang terdaftar', async () => {
        await ForgotPasswordPage.forgotPassword(emailTester)
        await expect(popUpCommponent.popUpAlert).toBeExisting()
        await expect(popUpCommponent.popUpAlert).toHaveTextContaining(
            'Email telah terkirim, silahkan cek email Anda!')
    })
})
describe('[WebDriverIO] feature-login', () => {
    beforeEach('', async () =>{
        await LoginPage.open()
        await LoginPage.go_to_LoginPage()
    })
    it('TC06-Pengguna gagal login dengan email yang belum terdaftar', async () => {
        await LoginPage.login(randomEmail1, passwordTester)
        await expect(popUpCommponent.popUpAlert).toBeExisting()
        await expect(popUpCommponent.popUpAlert).toHaveTextContaining(
            'User tidak ditemukan!')
    })
    it('TC07-Pengguna gagal login dengan password yang salah', async () => {
        await LoginPage.login(emailTester, wrongPassword)
        await expect(popUpCommponent.popUpAlert).toBeExisting()
        await expect(popUpCommponent.popUpAlert).toHaveTextContaining(
            'Email atau kata sandi tidak cocok')
    })
    it('TC08-Pengguna berhasil login dengan email dan password yang benar', async () => {
        await LoginPage.login(emailTester, passwordTester)
        await expect(popUpCommponent.popUpAlert).toBeExisting()
        await expect(popUpCommponent.popUpAlert).toHaveTextContaining(
            'Berhasil Masuk!')
    })
})
describe('[WebDriverIO] feature-updateProfile', () => {
    beforeEach ('', async () =>{
        await updateProfilePage.go_to_updateProfilePage()
    })
    it('TC09-Pengguna gagal memperbarui profile dengan mengosongkan semua data', async () => {
        await updateProfilePage.ClearAllData()
        await expect(popUpCommponent.popUpAlert).toBeExisting()
        await expect(popUpCommponent.popUpAlert).toHaveTextContaining(
            'Detail user berhasil diperbarui')
    })
    it('TC10-Pengguna berhasil memperbarui data profile dengan mengisi data yang valid', async () => {
        await updateProfilePage.updateData(randomName, emailTester, randomPhone, selectGender, selectBirthday, randomCity)
        await expect(popUpCommponent.popUpAlert).toBeExisting()
        await expect(popUpCommponent.popUpAlert).toHaveTextContaining(
            'Detail user berhasil diperbarui')
    })
})
