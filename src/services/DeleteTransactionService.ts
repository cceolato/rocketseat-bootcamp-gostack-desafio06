import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';

import TransactioRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionsRepository = getCustomRepository(TransactioRepository);
    const transaction = await transactionsRepository.findOne(id);

    if (!transaction) {
      throw new AppError('Transaction does not exists!', 404);
    }

    await transactionsRepository.remove(transaction);
  }
}

export default DeleteTransactionService;
