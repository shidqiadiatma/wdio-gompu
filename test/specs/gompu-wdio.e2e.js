
const RegisterPage = require('../pageobjects/register-page')
const LoginPage = require('../pageobjects/login-page')
const ForgotPasswordPage = require('../pageobjects/forgotPassword-page')
const popUpCommponent = require('../pageobjects/popUp_Alert')
const {faker} = require('@faker-js/faker');

const emailTester = 'shidqiadiatma@dispostable.com'
const emailNgasal = 'emailngasal@mail.com'
const passwordTester = 'passwordBenar12*'

describe('feature-registration', () => {
    beforeEach('', async () =>{
        await RegisterPage.open()
        await RegisterPage.go_to_registerPage()
    })
    it('TC01-Pengguna gagal registrasi menggunakan email terdaftar', async () => {
        await RegisterPage.register('shidqi adiatma', emailTester, passwordTester)
        await expect(popUpCommponent.popUpAlert).toBeExisting()
        await expect(popUpCommponent.popUpAlert).toHaveTextContaining(
            'Email has already been taken')
    })
    it('TC02-Pengguna gagal registrasi menggunakan format password yang salah', async () => {
        await RegisterPage.register('shidqi adiatma', faker.internet.email(), 'iniformatpasswordsalah')
        await expect(popUpCommponent.alertMessage_password).toBeExisting()
        await expect(popUpCommponent.alertMessage_password).toHaveTextContaining(
            'Kata Sandi tidak valid!')
    })
    it('TC03-Pengguna berhasil registrasi dengan email yang belum terdaftar', async () => {
        await RegisterPage.register('shidqi adiatma', faker.internet.email(), passwordTester)
        await expect(popUpCommponent.popUpAlert).toBeExisting()
        await expect(popUpCommponent.popUpAlert).toHaveTextContaining(
            'Pendaftaran berhasil, harap verifikasi akun Anda!')
    })
})
describe('feature-forgotPassword', () => {
    beforeEach('', async () =>{
        await ForgotPasswordPage.open()
        await ForgotPasswordPage.go_to_forgotPasswordPage()
    })
    it('TC04-Pengguna gagal meminta link forgot password dengan email yang tidak terdaftar', async () => {
        await ForgotPasswordPage.forgotPassword(emailNgasal)
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
describe('feature-login', () => {
    beforeEach('', async () =>{
        await LoginPage.open()
        await LoginPage.go_to_LoginPage()
    })
    it('TC06-Pengguna gagal login dengan email yang belum terdaftar', async () => {
        await LoginPage.login(emailNgasal, passwordTester)
        await expect(popUpCommponent.popUpAlert).toBeExisting()
        await expect(popUpCommponent.popUpAlert).toHaveTextContaining(
            'User tidak ditemukan!')
    })
    it('TC07-Pengguna gagal login dengan password yang salah', async () => {
        await LoginPage.login(emailTester, 'passwordsalaaah')
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
describe('feature-login', () => {
    beforeEach('', async () =>{
        await LoginPage.open()
        await LoginPage.go_to_LoginPage()
    })
    it('TC09-Pengguna gagal memperbarui profile dengan mengosongkan semua data', async () => {
        await LoginPage.login(emailNgasal, passwordTester)
        await expect(popUpCommponent.popUpAlert).toBeExisting()
        await expect(popUpCommponent.popUpAlert).toHaveTextContaining(
            'User tidak ditemukan!')
    })
    it('TC10-Pengguna berhasil memperbarui data profile dengan mengisi data yang valid', async () => {
        await LoginPage.login(emailTester, 'passwordsalaaah')
        await expect(popUpCommponent.popUpAlert).toBeExisting()
        await expect(popUpCommponent.popUpAlert).toHaveTextContaining(
            'Email atau kata sandi tidak cocok')
    })
})
