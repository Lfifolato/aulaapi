import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Fornecedor from 'App/Models/Fornecedor'

export default class InitSeeder extends BaseSeeder {
  public async run() {
    await Fornecedor.createMany([
      {
        nome: 'luiz',
        email: 'luiz@gmail.com',
        telefone: '35653565',
        cnpj: '6.5689689',
      },
      {
        nome: 'daniel',
        email: 'daniel@gmail.com',
        telefone: '57898798',
        cnpj: '6.878787',
      },
      {
        nome: 'tete',
        email: 'tete@gmail.com',
        telefone: '35653565',
        cnpj: '65645689689',
      },
    ])
  }
}
