import { IUser } from './model';
import users from './schema';
import { Types } from 'mongoose';

export default class UserService {
    public async register(user_params:IUser): Promise<IUser> {
        try {
            const session = new users(user_params);
            return await session.save();
        }catch(error) {
            throw error;
        }
    }

    public async filterUser(query: any): Promise<IUser | null> {
        try {
            return await users.findOne(query);
        } catch (error) {
            throw error;
        }
    }

    public async deleteUser(_id: string): Promise<{ deletedCount: number }> {
        try {
            const query = { _id: _id };
            return await users.deleteOne(query);
        } catch (error) {
            throw error;
        }
    }

    public async addPostToUser(userId: Types.ObjectId, postId: Types.ObjectId): Promise<void> {
        try {
            // Retrieve the user document by ID
            const user = await users.findById(userId);
            if (!user) {
                throw new Error('User not found');
            }

            // Add the post ID to the user's array of posts
            user.posts.push(postId);

            // Save the updated user document
            await user.save();
        } catch (error) {
            throw error;
        }
    }

    public async addReviewToUser(userId: Types.ObjectId, reviewId: Types.ObjectId): Promise<void> {
        try {
            // Retrieve the user document by ID
            const user = await users.findById(userId);
            if (!user) {
                throw new Error('User not found');
            }

            // Add the post ID to the user's array of posts
            user.reviews.push(reviewId);

            // Save the updated user document
            await user.save();
        } catch (error) {
            throw error;
        }
    }

}