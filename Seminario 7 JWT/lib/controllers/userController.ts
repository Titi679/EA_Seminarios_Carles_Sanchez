import { Request, Response } from 'express';
import { IUser } from '../modules/users/model';
import UserService from '../modules/users/service';
import * as mongoose from 'mongoose';

export class UserController {

    private user_service: UserService = new UserService();

    public async create_user(req: Request, res: Response) {
        try{
            // this check whether all the filds were send through the request or not
            if (req.body.name && req.body.email && req.body.phone_number && req.body.gender && req.body.password) {
                const user_params: IUser = {
                    name: req.body.name,
                    email: req.body.email,
                    phone_number: req.body.phone_number,
                    gender: req.body.gender,
                    password: req.body.password
                };
                const user_data = await this.user_service.register(user_params);
                return res.status(201).json({ message: 'User created successfully', user: user_data });
            }else{            
                return res.status(400).json({ error: 'Missing fields' });
            }
        }catch(error){
            return res.status(500).json({ error: 'Internal server error'});
        }
    }

    public async get_user(req: Request, res: Response) {
        try{
            if (req.params.id) {
                const user_filter = { _id: req.params.id };
                // Fetch user
                const user_data = await this.user_service.filterUser(user_filter);
                // Send success response
                return res.status(200).json({ data: user_data, message: 'Successful'});
            } else {
                return res.status(400).json({ error: 'Missing fields' });
            }
        }catch(error){
            return res.status(500).json({ error: 'Internal server error' });
        }
    }
}