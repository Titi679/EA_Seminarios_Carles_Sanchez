import { IReview } from './model';
import reviews from './schema';

export default class ReviewService {
    
    public async createReview(review_params: IReview): Promise<IReview> {
        try {
            const session = new reviews(review_params);
            return await session.save();
        } catch (error) {
            throw error;
        }
    }

    public async filterReview(query: any): Promise<IReview | null> {
        try {
            return await reviews.findOne(query);
        } catch (error) {
            throw error;
        }
    }

    public async deleteReview(_id: string): Promise<{ deletedCount: number }> {
        try {
            const query = { _id: _id };
            return await reviews.deleteOne(query);
        } catch (error) {
            throw error;
        }
    }
}