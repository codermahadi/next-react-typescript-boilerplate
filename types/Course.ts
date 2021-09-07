import {Status} from "./EnumTypes";

export interface Course {
    id?: number,
    title: string,
    titleSlug?: string,
    description: string,
    thumbnail: string,
    previewVideoUrl: string,
    regularPrice: number,
    sellingPrice: number,
    discount: number,
    courseDuration: number,
    totalQuizes: number,
    totalClasses: number,
    totalTopics: number,
    whatYouLearn: string,
    userId: number,
    status: Status,
    categoryId: number
    createdAt?: string,
    updatedAt?: string
}
