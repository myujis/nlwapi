import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../repositories/UsersRepository';


class UserController {
    async create(req: Request, res:Response) {
        const {name,email} = req.body;
        
        const usersRepository = getCustomRepository(UsersRepository);

        const userExists = await usersRepository.findOne({
            email
        });

        if (userExists) {
            return res.status(400).json({
                error: "User already exists",
            })  
        }

        const user = usersRepository.create({
            name, email
        });

        await usersRepository.save(user);
        
        return res.json(user);
    }
}
export { UserController };
